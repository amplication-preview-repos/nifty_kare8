import { Transaction } from "../transaction/Transaction";

export type ExchangeRate = {
  createdAt: Date;
  currencyFrom: string | null;
  currencyTo: string | null;
  id: string;
  rate: number | null;
  timestamp: Date | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
