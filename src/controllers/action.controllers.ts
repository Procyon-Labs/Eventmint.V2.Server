import BadRequestError from '../errors/bad-request';
import EventService from '../services/event.service';
import TransactionService from '../services/transaction.service';
import dotenv from 'dotenv';
import { BlinkSights, DEFAULT_SOL_ADDRESS } from '../config';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import {
  ActionGetResponse,
  ActionPostRequest,
  ActionPostResponse,
  createPostResponse,
} from '@solana/actions';
import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from '@solana/web3.js';
dotenv.config();

const ACTIONS_CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type,Authorization',
};

const { getEventByQuery } = new EventService();

// const client = new BlinksightsClient(BlinkSights);

export default class ActionController {
  async getAction(req: Request, res: Response) {
    try {
      const baseHref = new URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`).toString();
      const eventName = decodeURIComponent(req.params.name);
      const event = await getEventByQuery({
        name: eventName,
      });

      if (!event) {
        throw new BadRequestError('invaild event Id');
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
        throw new BadRequestError('invaild event Id');
      }

      const body: ActionPostRequest = req.body;

      //Validate client account

      let account: PublicKey;
      try {
        account = new PublicKey(body.account);
      } catch (err: any) {
        return res.status(400).set(ACTIONS_CORS_HEADERS).send('Invalid "account" provided');
      }
      const connection = new Connection(
        process.env.PUBLIC_SOLANA_RPC_URL || clusterApiUrl('devnet'),
      );

      // Ensure the receiving account will be rent exempt
      const minimumBalance = await connection.getMinimumBalanceForRentExemption(
        0, // Note: simple accounts that just store native SOL have `0` bytes of data
      );

      let price;
      if (event?.payAnyPrice) {
        price = parseFloat(req.query.amount as any);
        if (price <= 0) throw new Error('amount is too small');
      } else {
        price = event?.price!;
      }

      if (price * LAMPORTS_PER_SOL < minimumBalance) {
        throw `account may not be rent exempt: ${DEFAULT_SOL_ADDRESS.toBase58()}`;
      }

      const sellerPubkey: PublicKey = new PublicKey(event?.userId as string);

      const transaction = new Transaction();
      transaction.feePayer = account;
      // Transfer 90% of funds to the sellers address
      transaction.add(
        SystemProgram.transfer({
          fromPubkey: account,
          toPubkey: sellerPubkey,
          lamports: Math.floor(price * LAMPORTS_PER_SOL * 0.9),
        }),
      );

      // Transfer 10% of the funds to the default SOL address
      transaction.add(
        SystemProgram.transfer({
          fromPubkey: account,
          toPubkey: DEFAULT_SOL_ADDRESS,
          lamports: Math.floor(price * LAMPORTS_PER_SOL * 0.1),
        }),
      );

      // Set the end user as the fee payer
      transaction.feePayer = account;
      transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;

      transaction
        .serialize({
          requireAllSignatures: false,
          verifySignatures: true,
        })
        .toString('base64');

      const payload: ActionPostResponse = await createPostResponse({
        fields: {
          type: "transaction",
          transaction,
          message: `Send ${price} SOL to ${sellerPubkey.toBase58()}`,
        },
      });

      // const payload: ActionPostResponse = {
      //   transaction: transaction
      //     .serialize({
      //       requireAllSignatures: false,
      //       verifySignatures: true,
      //     })
      //     .toString('base64'),

      //   message: `You've successfully purchased a ticket for ${event?.name} for ${price} SOL 🎊`,
      // };

      console.log('Payload:', payload);
      console.log('Transaction:', transaction);

      res.set(ACTIONS_CORS_HEADERS).json(payload);

      return res.status(200).json(payload);
    } catch (error: any) {
      return res.status(500).send({
        success: false,
        message: `Error: ${error.message}`,
      });
    }
  }

  // async mintTransaction(user: PublicKey, event: any) {
  //   try {
  //     const umi = createUmi('https://api.devnet.solana.com', 'confirmed');

  //     // Ensure the WALLET_SECRET_KEY is provided and valid
  //     const walletSecretKeyString = process.env.WALLET_SECRET_KEY;
  //     if (!walletSecretKeyString) throw new Error('WALLET_SECRET_KEY is missing in the env file.');

  //     // Convert the WALLET_SECRET_KEY from a string to a Uint8Array
  //     const walletSecretKey = Uint8Array.from(walletSecretKeyString.split(',').map(Number));

  //     const keypair = umi.eddsa.createKeypairFromSecretKey(walletSecretKey);
  //     const adminSigner = createSignerFromKeypair(umi, keypair);

  //     // Set the user as the signer who will sign the transaction later
  //     umi.use(signerIdentity(createNoopSigner(publicKey(user))));

  //     // Generate the Asset KeyPair
  //     const asset = generateSigner(umi);
  //     console.log('This is your asset address', asset.publicKey.toString());

  //     // Fetch the Collection
  //     const collection = await fetchCollection(
  //       umi,
  //       publicKey('72An7SwKfUmTAu34x2azX7tYwCBznFKxDR6RV9gxoQDr'),
  //     );

  //     // Create the asset within the collection
  //     const tx = await create(umi, {
  //       asset,
  //       collection,
  //       name: `${event.name}`, // Using event name for asset
  //       uri: event.image as string, // Using event image as URI
  //       authority: adminSigner,
  //     }).buildAndSign(umi);

  //     // Serialize the transaction
  //     return umi.transactions.serialize(tx);
  //   } catch (error: any) {
  //     console.error('Error minting transaction:', error.message);
  //     throw new Error(`Failed to mint transaction: ${error.message}`);
  //   }
  // }
}
