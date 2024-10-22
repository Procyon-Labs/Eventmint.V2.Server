"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const bad_request_1 = __importDefault(require("../errors/bad-request"));
const sponsor_service_1 = __importDefault(require("../services/sponsor.service"));
const web3_js_1 = require("@solana/web3.js");
const actions_1 = require("@solana/actions");
const config_1 = require("../config");
const http_status_codes_1 = require("http-status-codes");
dotenv_1.default.config();
const UNEXPECTED_ERROR = 'An unexpected error occurred';
const { getSponsorByQuery } = new sponsor_service_1.default();
if (!config_1.DEFAULT_SOL_ADDRESS) {
    throw new Error('DEFAULT_SOL_ADDRESS is not defined in the environment variables');
}
class SponsorController {
    getAction(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const baseHref = new URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`).toString();
                const keymessage = decodeURIComponent(req.params.keymessage.replace(/-/g, ' '));
                const sponsor = yield getSponsorByQuery({ keymessage: keymessage });
                if (!sponsor) {
                    throw new bad_request_1.default('invaild event Id');
                }
                let payload = {
                    icon: sponsor === null || sponsor === void 0 ? void 0 : sponsor.image,
                    label: `Submit Now (${sponsor === null || sponsor === void 0 ? void 0 : sponsor.budget} SOL)`,
                    description: `${sponsor === null || sponsor === void 0 ? void 0 : sponsor.campaign}`,
                    title: `${sponsor === null || sponsor === void 0 ? void 0 : sponsor.keymessage}`,
                    links: {
                        actions: [
                            {
                                type: "post",
                                label: `Submit Now (${sponsor === null || sponsor === void 0 ? void 0 : sponsor.budget} SOL)`,
                                href: `${baseHref}?amount={amount}`,
                                parameters: [
                                    {
                                        name: 'amount',
                                        label: 'Submit Poof of audience',
                                    },
                                ],
                            },
                        ],
                    },
                };
                res.set(config_1.ACTIONS_CORS_HEADERS);
                return res.json(payload);
            }
            catch (error) {
                return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).send({
                    success: false,
                    message: `Error: ${error.message}`,
                    res,
                });
            }
        });
    }
    postAction(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sponsorName = req.params.keymessage.replace(/-/g, ' ');
                const sponsor = yield getSponsorByQuery({ keymessage: sponsorName });
                if (!sponsor) {
                    throw new bad_request_1.default('Sponsor not found');
                }
                const body = req.body;
                if (!body.account) {
                    return res.status(400).set(config_1.ACTIONS_CORS_HEADERS).json({
                        error: 'Bad Request',
                        message: 'Account address is required',
                    });
                }
                let account;
                try {
                    account = new web3_js_1.PublicKey(body.account);
                }
                catch (error) {
                    return res.status(400).set(config_1.ACTIONS_CORS_HEADERS).json({
                        error: 'Bad Request',
                        message: 'Invalid account address format',
                    });
                }
                // Initialize Solana connection
                const connection = new web3_js_1.Connection(process.env.PUBLIC_SOLANA_RPC_URL || (0, web3_js_1.clusterApiUrl)('devnet'), 'confirmed');
                const minimumBalance = yield connection.getMinimumBalanceForRentExemption(0);
                const price = Number(sponsor.budget);
                if (isNaN(price) || price <= 0) {
                    throw new bad_request_1.default('Invalid sponsor budget');
                }
                if (price * web3_js_1.LAMPORTS_PER_SOL < minimumBalance) {
                    throw new bad_request_1.default(`Transaction amount too low: minimum ${minimumBalance / web3_js_1.LAMPORTS_PER_SOL} SOL required`);
                }
                const sellerPubkey = new web3_js_1.PublicKey(sponsor.userId);
                const defaultPubkey = new web3_js_1.PublicKey(config_1.DEFAULT_SOL_ADDRESS);
                // Create transaction
                const transaction = new web3_js_1.Transaction().add(
                // 90% to seller
                web3_js_1.SystemProgram.transfer({
                    fromPubkey: account,
                    toPubkey: sellerPubkey,
                    lamports: Math.floor(price * web3_js_1.LAMPORTS_PER_SOL * 0.9),
                }), 
                // 10% to platform
                web3_js_1.SystemProgram.transfer({
                    fromPubkey: account,
                    toPubkey: defaultPubkey,
                    lamports: Math.floor(price * web3_js_1.LAMPORTS_PER_SOL * 0.1),
                }));
                transaction.recentBlockhash = (yield connection.getLatestBlockhash()).blockhash;
                transaction.feePayer = account;
                const payload = yield (0, actions_1.createPostResponse)({
                    fields: {
                        type: "transaction",
                        transaction,
                        message: 'Transaction created successfully',
                    },
                });
                return res.status(200).set(config_1.ACTIONS_CORS_HEADERS).json(payload);
            }
            catch (error) {
                console.error('Error in postAction:', error);
                if (error instanceof bad_request_1.default) {
                    return res.status(400).set(config_1.ACTIONS_CORS_HEADERS).json({
                        error: 'Bad Request',
                        message: error.message,
                    });
                }
                return res.status(500).set(config_1.ACTIONS_CORS_HEADERS).json({
                    error: 'Internal Server Error',
                    message: UNEXPECTED_ERROR,
                });
            }
        });
    }
}
exports.default = SponsorController;
