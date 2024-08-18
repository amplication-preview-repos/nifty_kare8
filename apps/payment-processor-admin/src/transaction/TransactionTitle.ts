import { Transaction as TTransaction } from "../api/transaction/Transaction";

export const TRANSACTION_TITLE_FIELD = "currency";

export const TransactionTitle = (record: TTransaction): string => {
  return record.currency?.toString() || String(record.id);
};
