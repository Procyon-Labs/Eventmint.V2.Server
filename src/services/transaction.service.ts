import Transaction from "../models/transaction.model";
import ETransactions from "../interface/transaction.interface";

export default class TransactionService {
  async create(transaction: Partial<ETransactions>) {
    return await Transaction.create(transaction);
  }
}
