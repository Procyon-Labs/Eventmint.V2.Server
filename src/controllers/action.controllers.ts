// import BadRequestError from '../errors/bad-request';
// import EventService from '../services/event.service';
// import TransactionService from '../services/transaction.service';
// import wallet from '../config/wallet.json';
// import { BlinkSights, DEFAULT_SOL_ADDRESS } from '../config';
// import { BlinksightsClient } from 'blinksights-sdk';
// import { create, fetchCollection } from '@metaplex-foundation/mpl-core';
// import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
// import { Request, Response } from 'express';
// import { StatusCodes } from 'http-status-codes';
// import {
//   createNoopSigner,
//   createSignerFromKeypair,
//   generateSigner,
//   publicKey,
//   signerIdentity,
// } from '@metaplex-foundation/umi';
// import {
//   ACTIONS_CORS_HEADERS,
//   ActionGetResponse,
//   ActionPostRequest,
//   ActionPostResponse,
// } from '@solana/actions';
// import {
//   clusterApiUrl,
//   Connection,
//   LAMPORTS_PER_SOL,
//   PublicKey,
//   sendAndConfirmTransaction,
//   SystemProgram,
//   Transaction,
// } from '@solana/web3.js';

// const { getEventByQuery } = new EventService();

// const client = new BlinksightsClient(BlinkSights);

// type ExtendedActionPostResponse = ActionPostResponse & {
//   mintedTransaction: string;
// };

// export default class ActionController {
//   async getAction(req: Request, res: Response) {
//     try {
//       const baseHref = new URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`).toString();
//       const eventName = decodeURIComponent(req.params.name);
//       const event = await getEventByQuery({
//         name: eventName,
//       });

//       if (!event) {
//         throw new BadRequestError('invaild event Id');
//       }

//       let payload: ActionGetResponse;
//       payload = {
//         icon: event?.image as unknown as string,
//         label: `Buy Ticket (${event?.price} SOL)`,
//         description: `${event?.description}`,
//         title: `${event?.name}`,
//       };
//       // client.createActionGetResponseV1(req.url, payload);
//       res.set(ACTIONS_CORS_HEADERS);
//       res.status(StatusCodes.OK).json(payload);
//       return res.json(payload);
//     } catch (error: any) {
//       return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
//         success: false,
//         message: `Error: ${error.message}`,
//       });
//     }
//   }

//   async postAction(req: Request, res: Response) {
//     try {
//       const eventName = decodeURIComponent(req.params.name);
//       const event = await getEventByQuery({
//         name: eventName,
//       });

//       if (!event) {
//         throw new BadRequestError('invaild event Id');
//       }

//       const body: ActionPostRequest = req.body;

//       let account: PublicKey;

//       //Validate client account
//       try {
//         account = new PublicKey(body.account);
//       } catch (error) {
//         return res.status(400).json({
//           success: false,
//           message: 'Invalid "account" provided',
//         });
//       }

//       const connection = new Connection(process.env.SOLANA_RPC! || clusterApiUrl('devnet'));

//       // Ensure the receiving account will be rent exempt
//       const minimumBalance = await connection.getMinimumBalanceForRentExemption(
//         0, // Note: simple accounts that just store native SOL have `0` bytes of data
//       );

//       let price;
//       if (event?.payAnyPrice) {
//         price = parseFloat(req.query.amount as any);
//         if (price <= 0) throw new Error('amount is too small');
//       } else {
//         price = event?.price!;
//       }

//       if (price * LAMPORTS_PER_SOL < minimumBalance) {
//         throw `account may not be rent exempt: ${DEFAULT_SOL_ADDRESS.toBase58()}`;
//       }

//       const sellerPubkey: PublicKey = new PublicKey(event?.userId as string);

//       const transaction = new Transaction();

//       // Transfer 90% of funds to the sellers address
//       transaction.add(
//         SystemProgram.transfer({
//           fromPubkey: account,
//           toPubkey: sellerPubkey,
//           lamports: Math.floor(price * LAMPORTS_PER_SOL * 0.9),
//         }),
//       );

//       // Transfer 10% of the funds to the default SOL address
//       transaction.add(
//         SystemProgram.transfer({
//           fromPubkey: account,
//           toPubkey: DEFAULT_SOL_ADDRESS,
//           lamports: Math.floor(price * LAMPORTS_PER_SOL * 0.1),
//         }),
//       );

//       // Set the end user as the fee payer
//       transaction.feePayer = account;
//       transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;

//       // Mint the transaction and include it in the response

//       const mintedTransaction = await this.mintTransaction(account, event);

//       const serializedTransaction = transaction
//         .serialize({
//           requireAllSignatures: false,
//           verifySignatures: true,
//         })
//         .toString('base64');
//       const payload = {
//         transaction: serializedTransaction,
//         mintedTransaction: mintedTransaction.toString(),
//         message: `You've successfully purchased a ticket for ${event?.name} for ${price} SOL 🎊`,
//       } as ActionPostResponse & { mintedTransaction: string };

//       console.log('Payload:', payload);
//       console.log('Transaction:', transaction);

//       res.set(ACTIONS_CORS_HEADERS);
//       client.trackActionV2(body.account, req.url);
//       return res.status(200).json(payload);
//     } catch (error: any) {
//       return res.status(500).send({
//         success: false,
//         message: `Error: ${error.message}`,
//       });
//     }
//   }

//   async mintTransaction(user: PublicKey, event: any) {
//     try {
//       const umi = createUmi('https://api.devnet.solana.com', 'confirmed');

//       // Ensure the wallet is provided and valid
//       if (!wallet) throw new Error('Wallet secret key is missing.');

//       const keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet as number[]));
//       const adminSigner = createSignerFromKeypair(umi, keypair);

//       // Set the user as the signer who will sign the transaction later
//       umi.use(signerIdentity(createNoopSigner(publicKey(user))));

//       // Generate the Asset KeyPair
//       const asset = generateSigner(umi);
//       console.log('This is your asset address', asset.publicKey.toString());

//       // Fetch the Collection
//       const collection = await fetchCollection(
//         umi,
//         publicKey('72An7SwKfUmTAu34x2azX7tYwCBznFKxDR6RV9gxoQDr'),
//       );

//       // Create the asset within the collection
//       const tx = await create(umi, {
//         asset,
//         collection,
//         name: `${event.name}`, // Using event name for asset
//         uri: event.image as string, // Using event image as URI
//         authority: adminSigner,
//       }).buildAndSign(umi);

//       // Serialize the transaction
//       return umi.transactions.serialize(tx);
//     } catch (error: any) {
//       console.error('Error minting transaction:', error.message);
//       throw new Error(`Failed to mint transaction: ${error.message}`);
//     }
//   }
// }

import BadRequestError from '../errors/bad-request';
import EventService from '../services/event.service';
import TransactionService from '../services/transaction.service';
import wallet from '../config/wallet.json';
import { BlinkSights, DEFAULT_SOL_ADDRESS } from '../config';
import { BlinksightsClient } from 'blinksights-sdk';
import { create, fetchCollection } from '@metaplex-foundation/mpl-core';
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import {
  createNoopSigner,
  createSignerFromKeypair,
  generateSigner,
  publicKey,
  signerIdentity,
} from '@metaplex-foundation/umi';
import {
  ACTIONS_CORS_HEADERS,
  ActionGetResponse,
  ActionPostRequest,
  ActionPostResponse,
} from '@solana/actions';
import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  sendAndConfirmTransaction,
  SystemProgram,
  Transaction,
} from '@solana/web3.js';

const { getEventByQuery } = new EventService();

const client = new BlinksightsClient(BlinkSights);

type ExtendedActionPostResponse = ActionPostResponse & {
  mintedTransaction: string;
};

export default class ActionController {
  async getAction(req: Request, res: Response) {
    try {
      const baseHref = new URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`).toString();
      const eventName = decodeURIComponent(req.params.name);
      const event = await getEventByQuery({ name: eventName });

      if (!event) {
        throw new BadRequestError('Invalid event Id');
      }

      let payload: ActionGetResponse = {
        icon: event?.image as unknown as string,
        label: `Buy Ticket (${event?.price} SOL)`,
        description: `${event?.description}`,
        title: `${event?.name}`,
      };

      res.set(ACTIONS_CORS_HEADERS);
      res.status(StatusCodes.OK).json(payload);
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
      const event = await getEventByQuery({ name: eventName });

      if (!event) {
        throw new BadRequestError('Invalid event Id');
      }

      const body: ActionPostRequest = req.body;
      let account: PublicKey;

      // Validate client account
      try {
        account = new PublicKey(body.account);
      } catch (error) {
        return res.status(400).json({
          success: false,
          message: 'Invalid "account" provided',
        });
      }

      const connection = new Connection(process.env.SOLANA_RPC! || clusterApiUrl('devnet'));

      // Ensure the receiving account will be rent exempt
      const minimumBalance = await connection.getMinimumBalanceForRentExemption(0);

      let price;
      if (event?.payAnyPrice) {
        price = parseFloat(req.query.amount as any);
        if (price <= 0) throw new Error('Amount is too small');
      } else {
        price = event?.price!;
      }

      if (price * LAMPORTS_PER_SOL < minimumBalance) {
        throw new Error(`Account may not be rent exempt: ${DEFAULT_SOL_ADDRESS.toBase58()}`);
      }

      const sellerPubkey: PublicKey = new PublicKey(event?.userId as string);
      const transaction = new Transaction();

      // Transfer 90% of funds to the seller's address
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

      // Mint the transaction and include it in the response
      const mintedTransaction = await this.mintTransaction(account, event);

      const serializedTransaction = transaction
        .serialize({
          requireAllSignatures: false,
          verifySignatures: true,
        })
        .toString('base64');

      const payload: ExtendedActionPostResponse = {
        transaction: serializedTransaction,
        mintedTransaction: mintedTransaction.toString(),
        message: `You've successfully purchased a ticket for ${event?.name} for ${price} SOL 🎊`,
      };

      console.log('Payload:', payload);
      console.log('Transaction:', transaction);

      res.set(ACTIONS_CORS_HEADERS);
      client.trackActionV2(body.account, req.url);
      return res.status(200).json(payload);
    } catch (error: any) {
      return res.status(500).send({
        success: false,
        message: `Error: ${error.message}`,
      });
    }
  }

  async mintTransaction(user: PublicKey, event: any) {
    try {
      const umi = createUmi('https://api.devnet.solana.com', 'confirmed');

      // Ensure the wallet is provided and valid
      if (!wallet) throw new Error('Wallet secret key is missing.');

      const keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet as number[]));
      const adminSigner = createSignerFromKeypair(umi, keypair);

      // Set the user as the signer who will sign the transaction later
      umi.use(signerIdentity(createNoopSigner(publicKey(user))));

      // Generate the Asset KeyPair
      const asset = generateSigner(umi);
      console.log('This is your asset address', asset.publicKey.toString());

      // Fetch the Collection
      const collection = await fetchCollection(
        umi,
        publicKey('72An7SwKfUmTAu34x2azX7tYwCBznFKxDR6RV9gxoQDr'),
      );

      // Create the asset within the collection
      const tx = await create(umi, {
        asset,
        collection,
        name: `${event.name}`, // Using event name for asset
        uri: event.image as string, // Using event image as URI
        authority: adminSigner,
      }).buildAndSign(umi);

      // Serialize the transaction
      return umi.transactions.serialize(tx);
    } catch (error: any) {
      console.error('Error minting transaction:', error.message);
      throw new Error(`Failed to mint transaction: ${error.message}`);
    }
  }
}
