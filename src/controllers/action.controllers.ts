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
}
