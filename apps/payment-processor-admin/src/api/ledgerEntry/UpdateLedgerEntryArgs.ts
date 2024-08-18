import { LedgerEntryWhereUniqueInput } from "./LedgerEntryWhereUniqueInput";
import { LedgerEntryUpdateInput } from "./LedgerEntryUpdateInput";

export type UpdateLedgerEntryArgs = {
  where: LedgerEntryWhereUniqueInput;
  data: LedgerEntryUpdateInput;
};
