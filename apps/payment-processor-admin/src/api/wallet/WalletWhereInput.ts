import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LedgerEntryWhereUniqueInput } from "../ledgerEntry/LedgerEntryWhereUniqueInput";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WalletWhereInput = {
  balance?: FloatNullableFilter;
  currency?: StringNullableFilter;
  id?: StringFilter;
  ledgerEntry?: LedgerEntryWhereUniqueInput;
  transactions?: TransactionListRelationFilter;
  user?: UserWhereUniqueInput;
};
