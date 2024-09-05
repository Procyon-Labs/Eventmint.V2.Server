import ETransactions from '../interface/transaction.interface';
import { model, Schema } from 'mongoose';

const transactionSchema = new Schema<ETransactions>(
  {
    buyerId: {
      type: String,
      required: true,
      ref: 'user',
    },
    eventId: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: false,
    },
  },
  {
    strict: true,
    timestamps: false,
    versionKey: false,
  },
);

const Transaction = model('transaction', transactionSchema);
export default Transaction;
