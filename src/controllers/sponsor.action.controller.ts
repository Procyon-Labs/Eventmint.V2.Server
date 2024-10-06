import dotenv from 'dotenv';
import BadRequestError from '../errors/bad-request';
import SponsorService from '../services/sponsor.service';
import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from '@solana/web3.js';
import {
  ActionGetResponse,
  ActionPostRequest,
  ActionPostResponse,
  createPostResponse,
} from '@solana/actions';
import { DEFAULT_SOL_ADDRESS } from '../config';
import { Request, Response } from 'express';
import HttpException from '../errors/http-exception';

dotenv.config();

const UNEXPECTED_ERROR = 'An unexpected error occurred';
const ACTIONS_CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type,Authorization',
};

const sponsorService = new SponsorService();

if (!DEFAULT_SOL_ADDRESS) {
  throw new Error('DEFAULT_SOL_ADDRESS is not defined in the environment variables');
}

export default class SponsorController {
  async getAction(req: Request, res: Response) {
    try {
      const baseHref = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
      const sponsorName = decodeURIComponent(req.params.keymessage);
      const sponsor = await sponsorService.getSponsorByQuery({ keymessage: sponsorName });

      if (!sponsor) {
        return res.status(400).json({ success: false, message: 'Invalid sponsor name' });
      }

      const payload: ActionGetResponse = {
        icon: sponsor.image,
        label: `Buy Now (${sponsor.budget} SOL)`,
        description: sponsor.campaign,
        title: sponsor.keymessage,
        links: {
          actions: [
            {
              label: `Buy Now (${sponsor.budget} SOL)`,
              href: `${baseHref}?amount={amount}`,
              parameters: [
                {
                  name: 'amount',
                  label: 'Enter your pitch deck',
                },
              ],
            },
          ],
        },
      };

      res.set(ACTIONS_CORS_HEADERS).json(payload);
    } catch (error: any) {
      console.error('Error in getAction:', error);
      res.status(500).json({ success: false, message: UNEXPECTED_ERROR });
    }
  }

  async postAction(req: Request, res: Response) {
    try {
      const sponsorName = decodeURIComponent(req.params.keymessage);
      const sponsor = await sponsorService.getSponsorByQuery({ keymessage: sponsorName });

      if (!sponsor) {
        throw new BadRequestError('Invalid sponsor ID');
      }

      const body: ActionPostRequest = req.body;

      let account: PublicKey;
      try {
        account = new PublicKey(body.account);
      } catch (err: any) {
        return res
          .status(400)
          .set(ACTIONS_CORS_HEADERS)
          .json({ success: false, message: 'Invalid "account" provided' });
      }

      const connection = new Connection(
        process.env.PUBLIC_SOLANA_RPC_URL || clusterApiUrl('devnet'),
      );

      const minimumBalance = await connection.getMinimumBalanceForRentExemption(0);

      let price = sponsor.budget;
      if (typeof price !== 'number' || price <= 0) {
        throw new Error('Invalid sponsor budget');
      }

      if (price * LAMPORTS_PER_SOL < minimumBalance) {
        throw new Error(`Transaction amount is too low to be rent exempt: ${price} SOL`);
      }

      const sellerPubkey = new PublicKey(sponsor.userId);
      const defaultPubkey = new PublicKey(DEFAULT_SOL_ADDRESS);

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: account,
          toPubkey: sellerPubkey,
          lamports: Math.floor(price * LAMPORTS_PER_SOL * 0.9),
        }),
        SystemProgram.transfer({
          fromPubkey: account,
          toPubkey: defaultPubkey,
          lamports: Math.floor(price * LAMPORTS_PER_SOL * 0.1),
        }),
      );

      transaction.feePayer = account;
      transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;

      const serializedTransaction = transaction
        .serialize({
          requireAllSignatures: false,
          verifySignatures: true,
        })
        .toString('base64');

      const payload: ActionPostResponse = await createPostResponse({
        fields: {
          transaction: serializedTransaction,
          message: 'Transaction created successfully',
        },
      });

      res.set(ACTIONS_CORS_HEADERS).json(payload);
    } catch (error: any) {
      console.error('Error in postAction:', error);
      if (error instanceof BadRequestError) {
        return res.status(400).json({ success: false, message: error.message });
      }
      res.status(500).json({ success: false, message: UNEXPECTED_ERROR });
    }
  }
}
