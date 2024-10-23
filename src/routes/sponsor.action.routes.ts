// src/routes/action.routes.ts
import { ACTIONS_CORS_HEADERS, createActionHeaders } from '@solana/actions';
import express from 'express';
import { Request, Response } from 'express';

import SponsorController from '../controllers/sponsor.action.controller';
const { getAction, postAction } = new SponsorController();

const router = express.Router();

router.get('/:keymessage', getAction);

router.options('/:keymessage', (_req: Request, res: Response) => {
  res.set(createActionHeaders({
    chainId: "devnet",
    actionVersion: "2.2.3"
  }));
  res.set({
    ...ACTIONS_CORS_HEADERS,
    "X-Action-Version": "2.1.3",
    // "X-Blockchain-Ids": "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1"
    "X-Blockchain-Ids": "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp"
  });

  return res.json();
});

router.post('/:keymessage', postAction);
export default router;
