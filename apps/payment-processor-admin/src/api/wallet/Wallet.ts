import { LedgerEntry } from "../ledgerEntry/LedgerEntry";
import { Transaction } from "../transaction/Transaction";
import { User } from "../user/User";

export type Wallet = {
  balance: number | null;
  createdAt: Date;
  currency: string | null;
  id: string;
  ledgerEntry?: LedgerEntry | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  user?: User | null;
};
