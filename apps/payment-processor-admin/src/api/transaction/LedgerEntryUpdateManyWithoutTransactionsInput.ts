import { LedgerEntryWhereUniqueInput } from "../ledgerEntry/LedgerEntryWhereUniqueInput";

export type LedgerEntryUpdateManyWithoutTransactionsInput = {
  connect?: Array<LedgerEntryWhereUniqueInput>;
  disconnect?: Array<LedgerEntryWhereUniqueInput>;
  set?: Array<LedgerEntryWhereUniqueInput>;
};
