import { ExchangeRate } from "../exchangeRate/ExchangeRate";
import { LedgerEntry } from "../ledgerEntry/LedgerEntry";
import { Wallet } from "../wallet/Wallet";

export type Transaction = {
  amount: number | null;
  createdAt: Date;
  currency: string | null;
  exchangeRate?: ExchangeRate | null;
  id: string;
  ledgerEntries?: Array<LedgerEntry>;
  status: string | null;
  timestamp: Date | null;
  updatedAt: Date;
  wallet?: Wallet | null;
};
