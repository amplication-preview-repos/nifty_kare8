import { Transaction } from "../transaction/Transaction";
import { Wallet } from "../wallet/Wallet";

export type LedgerEntry = {
  amount: number | null;
  createdAt: Date;
  id: string;
  ledgerAmount: number | null;
  ledgerTimestamp: Date | null;
  ledgerType: string | null;
  timestamp: Date | null;
  transaction?: Transaction | null;
  typeField: string | null;
  updatedAt: Date;
  wallets?: Array<Wallet>;
};
