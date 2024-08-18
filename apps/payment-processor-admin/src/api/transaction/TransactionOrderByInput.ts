import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  exchangeRateId?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  walletId?: SortOrder;
};
