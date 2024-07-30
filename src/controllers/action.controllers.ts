import { Request, Response } from "express";
import EventService from "../services/event.service";
import TransactionService from "../services/transaction.service";
import { StatusCodes } from "http-status-codes";
import BadRequestError from "../errors/bad-request";
import {
  ACTIONS_CORS_HEADERS,
  ActionGetResponse,
  ActionPostRequest,
  ActionPostResponse,
} from "@solana/actions";
import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  sendAndConfirmTransaction,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { DEFAULT_SOL_ADDRESS } from "./const";

const { getEventByQuery } = new EventService();

export default class ActionController {
  async getAction(req: Request, res: Response) {
    try {
      const baseHref = new URL(
        `${req.protocol}://${req.get("host")}${req.originalUrl}`
      ).toString();
      const eventName = decodeURIComponent(req.params.name);
      const event = await getEventByQuery({
        name: eventName,
      });

      if (!event) {
        throw new BadRequestError("invaild event Id");
      }

      let payload: ActionGetResponse;
      payload = {
        icon: event?.image as unknown as string,
        label: `Buy Ticket (${event?.price} SOL)`,
        description: `${event?.description}`,
        title: `${event?.name}`,
      };

      res.set(ACTIONS_CORS_HEADERS);
      res.status(StatusCodes.OK).json(payload);
      return res.json(payload);
    } catch (error: any) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        success: false,
        message: `Error: ${error.message}`,
      });
    }
  }

  async postAction(req: Request, res: Response) {
    try {
      const eventName = decodeURIComponent(req.params.name);
      const event = await getEventByQuery({
        name: eventName,
      });

      if (!event) {
        throw new BadRequestError("invaild event Id");
      }

      const body: ActionPostRequest = req.body;

      let account: PublicKey;

      //Validate client account
      try {
        account = new PublicKey(body.account);
      } catch (error) {
        return res.status(400).json({
          success: false,
          message: 'Invalid "account" provided',
        });
      }

      const connection = new Connection(
        process.env.SOLANA_RPC! || clusterApiUrl("devnet")
      );

      // Ensure the receiving account will be rent exempt
      const minimumBalance = await connection.getMinimumBalanceForRentExemption(
        0 // Note: simple accounts that just store native SOL have `0` bytes of data
      );

      let price;
      if (event?.payAnyPrice) {
        price = parseFloat(req.query.amount as any);
        if (price <= 0) throw new Error("amount is too small");
      } else {
        price = event?.price!;
      }

      if (price * LAMPORTS_PER_SOL < minimumBalance) {
        throw `account may not be rent exempt: ${DEFAULT_SOL_ADDRESS.toBase58()}`;
      }

      const sellerPubkey: PublicKey = new PublicKey(event?.userId as string);

      const transaction = new Transaction();

      // Transfer 90% of funds to the sellers address
      transaction.add(
        SystemProgram.transfer({
          fromPubkey: account,
          toPubkey: sellerPubkey,
          lamports: Math.floor(price * LAMPORTS_PER_SOL * 0.9),
        })
      );

      // Transfer 10% of the funds to the default SOL address
      transaction.add(
        SystemProgram.transfer({
          fromPubkey: account,
          toPubkey: DEFAULT_SOL_ADDRESS,
          lamports: Math.floor(price * LAMPORTS_PER_SOL * 0.1),
        })
      );

      // Set the end user as the fee payer
      transaction.feePayer = account;
      transaction.recentBlockhash = (
        await connection.getLatestBlockhash()
      ).blockhash;

      const payload: ActionPostResponse = {
        transaction: transaction
          .serialize({
            requireAllSignatures: false,
            verifySignatures: true,
          })
          .toString("base64"),
        message: `You've successfully purchased ticket for  ${event?.name} for ${price} SOL 🎊`,
      };
      console.log("Payload:", payload);
      console.log("Transaction:", transaction);

      res.set(ACTIONS_CORS_HEADERS);
      return res.status(200).json(payload);
    } catch (error: any) {
      return res.status(500).send({
        success: false,
        message: `Error: ${error.message}`,
      });
    }
  }
}
