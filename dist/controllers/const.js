"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_SOL_AMOUNT = exports.DEFAULT_SOL_ADDRESS = void 0;
// controllers/const.ts
const web3_js_1 = require("@solana/web3.js");
// Replace with the default Solana address you want to use
exports.DEFAULT_SOL_ADDRESS = new web3_js_1.PublicKey("YourDefaultSolanaAddressHere");
exports.DEFAULT_SOL_AMOUNT = 0.1; // Replace with the default SOL amount
