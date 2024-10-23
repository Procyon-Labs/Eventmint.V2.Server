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
  createActionHeaders,
  createPostResponse,
} from '@solana/actions';
import { DEFAULT_SOL_ADDRESS, ACTIONS_CORS_HEADERS } from '../config';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Submission from "../services/submission.service";
const SubmissionService = new Submission();
dotenv.config();

const UNEXPECTED_ERROR = 'An unexpected error occurred';

const { getSponsorByQuery } = new SponsorService();

if (!DEFAULT_SOL_ADDRESS) {
  throw new Error('DEFAULT_SOL_ADDRESS is not defined in the environment variables');
}

const headers = createActionHeaders({
  chainId: "devnet",
  actionVersion: "2.2.3"
});

export default class SponsorController {
  async getAction(req: Request, res: Response) {
    try {
      const protocol = req.headers['x-forwarded-proto'] || req.protocol;

      const baseHref = new URL(
        `${protocol}://${req.get('host')}${req.originalUrl}`
      ).toString();
      const keymessage = decodeURIComponent(req.params.keymessage.replace(/-/g, ' '));
      const sponsor = await getSponsorByQuery({ keymessage: keymessage });

      if (!sponsor) {
        return res.status(404).json("Invalid keymessage")
      }

      let payload: ActionGetResponse = {
        icon: sponsor?.image as unknown as string,
        label: `Submit Now (${sponsor?.budget} SOL)`,
        description: `${sponsor?.campaign}`,
        title: `${sponsor?.keymessage}`,
        links: {
          actions: [
            {
              type: "post",
              label: `Submit Now (${sponsor?.budget} SOL)`,
              href: `${baseHref}?proof={proof}`,
              parameters: [
                {
                  name: 'proof',
                  label: 'Submit Proof of Audience',
                  type: "url"
                },
              ],
            },
          ],
        },
      };

      res.set({
        ...ACTIONS_CORS_HEADERS,
        "X-Action-Version": "2.1.3",
        // "X-Blockchain-Ids": "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1"
        "X-Blockchain-Ids": "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp"
      });
      res.set(headers);

      return res.json(payload);
    } catch (error: any) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        success: false,
        message: `Error: ${error.message}`,
        res,
      });
    }
  }

  async postAction(req: Request, res: Response) {
    try {
      const sponsorName = req.params.keymessage.replace(/-/g, ' ');
      const sponsor = await getSponsorByQuery({ keymessage: sponsorName });

      if (!sponsor) {
        return res.status(404).json("Invalid campaign title")
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
      } catch (error: any) {
        return res.status(400).set(ACTIONS_CORS_HEADERS).json({
          error: 'Bad Request',
          message: 'Invalid account address format',
        });
      }

      // Initialize Solana connection
      const connection = new Connection(
        // process.env.PUBLIC_SOLANA_RPC_URL || 
        clusterApiUrl('devnet'),
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
          type: "transaction",
          transaction,
          message: 'Transaction created successfully',
        },
      });

      await SubmissionService.create({ sponsorId: sponsor._id, userId: account.toString(), submission: req.query.proof as string })

      res.set({
        ...ACTIONS_CORS_HEADERS,
        "X-Action-Version": "2.1.3",
        // "X-Blockchain-Ids": "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1"
        "X-Blockchain-Ids": "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp"
      });
      res.set(headers);

      return res.status(200).json(payload);
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
