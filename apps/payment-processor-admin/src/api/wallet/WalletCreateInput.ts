import { LedgerEntryWhereUniqueInput } from "../ledgerEntry/LedgerEntryWhereUniqueInput";
import { TransactionCreateNestedManyWithoutWalletsInput } from "./TransactionCreateNestedManyWithoutWalletsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WalletCreateInput = {
  balance?: number | null;
  currency?: string | null;
  ledgerEntry?: LedgerEntryWhereUniqueInput | null;
  transactions?: TransactionCreateNestedManyWithoutWalletsInput;
  user?: UserWhereUniqueInput | null;
};
