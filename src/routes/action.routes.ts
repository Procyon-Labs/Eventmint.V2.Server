// src/routes/action.routes.ts

import express from 'express';
import ActionController from '../controllers/action.controllers';
const { getAction, postAction } = new ActionController();

const router = express.Router();

router.get('/:name', getAction);
router.options('/:name', getAction);
router.post('/:name', postAction);
export default router;
