"use strict";
// import jwt from 'jsonwebtoken';
// import { JWT_SECRET } from '../constants';
// import bcrypt from 'bcrypt';
// import { winstonLogger } from './logger.util';
// export async function signJwt(payload: object, signature = JWT_SECRET, expiresIn = '1y') {
//   const options: jwt.SignOptions = {
//     expiresIn, // Optional expiry parameter
//   };
//   return await jwt.sign(payload, signature, options);
// }
// export function signJwtSync(payload: object, signature = JWT_SECRET, expiresIn = '1m') {
//   const options: jwt.SignOptions = {
//     expiresIn, // Optional expiry parameter
//   };
//   return jwt.sign(payload, signature, options);
// }
// export async function verifyJwt(token: string, signature = JWT_SECRET): Promise<any> {
//   try {
//     const decoded: any = await jwt.verify(token, signature);
//     delete decoded.iat;
//     delete decoded.exp;
//     return decoded;
//   } catch (e: any) {
//     // console.log(e);
//     winstonLogger.error(e.message);
//     return false;
//   }
// }
// export async function hashPassword(password: string) {
//   const saltRounds = 10; // You can adjust the number of rounds for security
//   return await bcrypt.hash(password, saltRounds);
// }
