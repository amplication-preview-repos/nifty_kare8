import { SortOrder } from "../../util/SortOrder";

export type LedgerEntryOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  ledgerAmount?: SortOrder;
  ledgerTimestamp?: SortOrder;
  ledgerType?: SortOrder;
  timestamp?: SortOrder;
  transactionId?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
