import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";
import { WalletListRelationFilter } from "../wallet/WalletListRelationFilter";

export type LedgerEntryWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  ledgerAmount?: FloatNullableFilter;
  ledgerTimestamp?: DateTimeNullableFilter;
  ledgerType?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  transaction?: TransactionWhereUniqueInput;
  typeField?: StringNullableFilter;
  wallets?: WalletListRelationFilter;
};
