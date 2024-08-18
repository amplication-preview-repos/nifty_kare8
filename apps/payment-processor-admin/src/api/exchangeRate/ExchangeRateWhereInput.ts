import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type ExchangeRateWhereInput = {
  currencyFrom?: StringNullableFilter;
  currencyTo?: StringNullableFilter;
  id?: StringFilter;
  rate?: FloatNullableFilter;
  timestamp?: DateTimeNullableFilter;
  transactions?: TransactionListRelationFilter;
};
