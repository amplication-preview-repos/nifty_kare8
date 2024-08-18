import { LedgerEntryWhereInput } from "./LedgerEntryWhereInput";
import { LedgerEntryOrderByInput } from "./LedgerEntryOrderByInput";

export type LedgerEntryFindManyArgs = {
  where?: LedgerEntryWhereInput;
  orderBy?: Array<LedgerEntryOrderByInput>;
  skip?: number;
  take?: number;
};
