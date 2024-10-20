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

dotenv.config();

const UNEXPECTED_ERROR = 'An unexpected error occurred';
const ACTIONS_CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type,Authorization',
  'Content-Type': 'application/json',
};

const sponsorService = new SponsorService();

if (!DEFAULT_SOL_ADDRESS) {
  throw new Error('DEFAULT_SOL_ADDRESS is not defined in the environment variables');
}

export default class SponsorController {
  async getAction(req: Request, res: Response) {
    try {
      // Ensure we're getting the full base URL correctly
      console.log('here');
      const baseHref = new URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`).toString();

      const sponsorName = decodeURIComponent(req.params.keymessage).replace(/-/g, ' ');
      const sponsor = await sponsorService.getSponsorByQuery({ keymessage: sponsorName });

      if (!sponsor) {
        return res.status(404).set(ACTIONS_CORS_HEADERS).json({
          error: 'Not Found',
          message: 'Invalid sponsor name',
        });
      }

      // Construct the action response according to Solana Action spec
      const payload: ActionGetResponse = {
        icon: sponsor?.image as unknown as string,
        label: `Submit Now (${sponsor.budget} SOL)`,
        description: `${sponsor.campaign}`,
        title: `${sponsor.keymessage}`,
        links: {
          actions: [
            {
              label: `Submit Now (${sponsor.budget} SOL)`,
              href: `${baseHref}`,
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
      res.set(ACTIONS_CORS_HEADERS);
      return res.json(payload);
    } catch (error) {
      console.error('Error in getAction:', error);

      return res
        .status(500)
        .set(ACTIONS_CORS_HEADERS)
        .json({
          error: 'Internal Server Error',
          message: error instanceof Error ? error.message : 'Error occurred while creating  blink',
        });
    }
  }

  async postAction(req: Request, res: Response) {
    try {
      const sponsorName = decodeURIComponent(req.params.keymessage);
      const sponsor = await sponsorService.getSponsorByQuery({ keymessage: sponsorName });

      if (!sponsor) {
        throw new BadRequestError('Sponsor not found');
      }

      const body: ActionPostRequest = req.body;

      if (!body.account) {
        return res.status(400).set(ACTIONS_CORS_HEADERS).json({
          error: 'Bad Request',
          message: 'Account address is required',
        });
      }

      let account: PublicKey;
      try {
        account = new PublicKey(body.account);
      } catch (err) {
        return res.status(400).set(ACTIONS_CORS_HEADERS).json({
          error: 'Bad Request',
          message: 'Invalid account address format',
        });
      }

      // Initialize Solana connection
      const connection = new Connection(
        process.env.PUBLIC_SOLANA_RPC_URL || clusterApiUrl('devnet'),
        'confirmed',
      );

      const minimumBalance = await connection.getMinimumBalanceForRentExemption(0);
      const price = Number(sponsor.budget);

      if (isNaN(price) || price <= 0) {
        throw new BadRequestError('Invalid sponsor budget');
      }

      if (price * LAMPORTS_PER_SOL < minimumBalance) {
        throw new BadRequestError(
          `Transaction amount too low: minimum ${minimumBalance / LAMPORTS_PER_SOL} SOL required`,
        );
      }

      const sellerPubkey = new PublicKey(sponsor.userId);
      const defaultPubkey = new PublicKey(DEFAULT_SOL_ADDRESS);

      // Create transaction
      const transaction = new Transaction().add(
        // 90% to seller
        SystemProgram.transfer({
          fromPubkey: account,
          toPubkey: sellerPubkey,
          lamports: Math.floor(price * LAMPORTS_PER_SOL * 0.9),
        }),
        // 10% to platform
        SystemProgram.transfer({
          fromPubkey: account,
          toPubkey: defaultPubkey,
          lamports: Math.floor(price * LAMPORTS_PER_SOL * 0.1),
        }),
      );
      transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
      transaction.feePayer = account;

      const payload: ActionPostResponse = await createPostResponse({
        fields: {
          transaction,
          message: 'Transaction created successfully',
        },
      });

      return res.status(200).set(ACTIONS_CORS_HEADERS).json(payload);
    } catch (error) {
      console.error('Error in postAction:', error);

      if (error instanceof BadRequestError) {
        return res.status(400).set(ACTIONS_CORS_HEADERS).json({
          error: 'Bad Request',
          message: error.message,
        });
      }

      return res.status(500).set(ACTIONS_CORS_HEADERS).json({
        error: 'Internal Server Error',
        message: UNEXPECTED_ERROR,
      });
    }
  }
}
