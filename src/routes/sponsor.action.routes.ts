// src/routes/action.routes.ts
import { createActionHeaders } from '@solana/actions';
import express from 'express';
import { Request, Response } from 'express';

import SponsorController from '../controllers/sponsor.action.controller';
const { getAction, postAction } = new SponsorController();

const router = express.Router();

router.get('/:keymessage', getAction);
//options action
router.options('/:keymessage', (_req: Request, res: Response) => {
  const headers = createActionHeaders();
  res.set(headers);
  return res.json();
});

router.post('/:keymessage', postAction);
export default router;
