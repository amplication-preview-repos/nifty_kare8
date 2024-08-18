import { ExchangeRate as TExchangeRate } from "../api/exchangeRate/ExchangeRate";

export const EXCHANGERATE_TITLE_FIELD = "currencyFrom";

export const ExchangeRateTitle = (record: TExchangeRate): string => {
  return record.currencyFrom?.toString() || String(record.id);
};
