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
const bad_request_1 = __importDefault(require("../errors/bad-request"));
const event_service_1 = __importDefault(require("../services/event.service"));
const dotenv_1 = __importDefault(require("dotenv"));
const config_1 = require("../config");
const http_status_codes_1 = require("http-status-codes");
const actions_1 = require("@solana/actions");
const web3_js_1 = require("@solana/web3.js");
dotenv_1.default.config();
const ACTIONS_CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type,Authorization',
};
const { getEventByQuery } = new event_service_1.default();
// const client = new BlinksightsClient(BlinkSights);
class ActionController {
    getAction(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const baseHref = new URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`).toString();
                const eventName = decodeURIComponent(req.params.name);
                const event = yield getEventByQuery({
                    name: eventName,
                });
                if (!event) {
                    throw new bad_request_1.default('invaild event Id');
                }
                let payload;
                payload = {
                    icon: event === null || event === void 0 ? void 0 : event.image,
                    label: `Buy Ticket (${event === null || event === void 0 ? void 0 : event.price} SOL)`,
                    description: `${event === null || event === void 0 ? void 0 : event.description}`,
                    title: `${event === null || event === void 0 ? void 0 : event.name}`,
                };
                res.set(ACTIONS_CORS_HEADERS);
                res.status(http_status_codes_1.StatusCodes.OK).json(payload);
                return res.json(payload);
            }
            catch (error) {
                return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).send({
                    success: false,
                    message: `Error: ${error.message}`,
                });
            }
        });
    }
    postAction(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const eventName = decodeURIComponent(req.params.name);
                const event = yield getEventByQuery({
                    name: eventName,
                });
                if (!event) {
                    throw new bad_request_1.default('invaild event Id');
                }
                const body = req.body;
                //Validate client account
                let account;
                try {
                    account = new web3_js_1.PublicKey(body.account);
                }
                catch (err) {
                    return res.status(400).set(ACTIONS_CORS_HEADERS).send('Invalid "account" provided');
                }
                const connection = new web3_js_1.Connection(process.env.PUBLIC_SOLANA_RPC_URL || (0, web3_js_1.clusterApiUrl)('devnet'));
                // Ensure the receiving account will be rent exempt
                const minimumBalance = yield connection.getMinimumBalanceForRentExemption(0);
                let price;
                if (event === null || event === void 0 ? void 0 : event.payAnyPrice) {
                    price = parseFloat(req.query.amount);
                    if (price <= 0)
                        throw new Error('amount is too small');
                }
                else {
                    price = event === null || event === void 0 ? void 0 : event.price;
                }
                if (price * web3_js_1.LAMPORTS_PER_SOL < minimumBalance) {
                    throw `account may not be rent exempt: ${config_1.DEFAULT_SOL_ADDRESS.toBase58()}`;
                }
                const sellerPubkey = new web3_js_1.PublicKey(event === null || event === void 0 ? void 0 : event.userId);
                const transaction = new web3_js_1.Transaction();
                transaction.feePayer = account;
                // Transfer 90% of funds to the sellers address
                transaction.add(web3_js_1.SystemProgram.transfer({
                    fromPubkey: account,
                    toPubkey: sellerPubkey,
                    lamports: Math.floor(price * web3_js_1.LAMPORTS_PER_SOL * 0.9),
                }));
                // Transfer 10% of the funds to the default SOL address
                transaction.add(web3_js_1.SystemProgram.transfer({
                    fromPubkey: account,
                    toPubkey: config_1.DEFAULT_SOL_ADDRESS,
                    lamports: Math.floor(price * web3_js_1.LAMPORTS_PER_SOL * 0.1),
                }));
                // Set the end user as the fee payer
                transaction.feePayer = account;
                transaction.recentBlockhash = (yield connection.getLatestBlockhash()).blockhash;
                transaction
                    .serialize({
                    requireAllSignatures: false,
                    verifySignatures: true,
                })
                    .toString('base64');
                const payload = yield (0, actions_1.createPostResponse)({
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
            }
            catch (error) {
                return res.status(500).send({
                    success: false,
                    message: `Error: ${error.message}`,
                });
            }
        });
    }
}
exports.default = ActionController;
