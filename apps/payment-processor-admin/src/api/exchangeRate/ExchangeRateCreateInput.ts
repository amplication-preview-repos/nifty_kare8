import { TransactionCreateNestedManyWithoutExchangeRatesInput } from "./TransactionCreateNestedManyWithoutExchangeRatesInput";

export type ExchangeRateCreateInput = {
  currencyFrom?: string | null;
  currencyTo?: string | null;
  rate?: number | null;
  timestamp?: Date | null;
  transactions?: TransactionCreateNestedManyWithoutExchangeRatesInput;
};
