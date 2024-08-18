import { TransactionUpdateManyWithoutExchangeRatesInput } from "./TransactionUpdateManyWithoutExchangeRatesInput";

export type ExchangeRateUpdateInput = {
  currencyFrom?: string | null;
  currencyTo?: string | null;
  rate?: number | null;
  timestamp?: Date | null;
  transactions?: TransactionUpdateManyWithoutExchangeRatesInput;
};
