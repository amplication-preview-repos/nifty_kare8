import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ExchangeRateWhereUniqueInput } from "../exchangeRate/ExchangeRateWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { LedgerEntryListRelationFilter } from "../ledgerEntry/LedgerEntryListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  currency?: StringNullableFilter;
  exchangeRate?: ExchangeRateWhereUniqueInput;
  id?: StringFilter;
  ledgerEntries?: LedgerEntryListRelationFilter;
  status?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  wallet?: WalletWhereUniqueInput;
};
