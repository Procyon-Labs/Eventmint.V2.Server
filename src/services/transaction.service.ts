import Transaction from '../models/transaction.model';
import { ETransactions } from '../interfaces';

export default class TransactionService {
  async createtrx(transaction: Partial<ETransactions>) {
    return await Transaction.create(transaction);
  }
}
