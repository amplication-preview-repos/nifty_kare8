import { LedgerEntryWhereUniqueInput } from "../ledgerEntry/LedgerEntryWhereUniqueInput";
import { TransactionUpdateManyWithoutWalletsInput } from "./TransactionUpdateManyWithoutWalletsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WalletUpdateInput = {
  balance?: number | null;
  currency?: string | null;
  ledgerEntry?: LedgerEntryWhereUniqueInput | null;
  transactions?: TransactionUpdateManyWithoutWalletsInput;
  user?: UserWhereUniqueInput | null;
};
