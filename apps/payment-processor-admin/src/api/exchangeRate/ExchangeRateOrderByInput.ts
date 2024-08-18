import { SortOrder } from "../../util/SortOrder";

export type ExchangeRateOrderByInput = {
  createdAt?: SortOrder;
  currencyFrom?: SortOrder;
  currencyTo?: SortOrder;
  id?: SortOrder;
  rate?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
