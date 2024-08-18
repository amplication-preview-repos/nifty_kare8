import { ExchangeRateWhereUniqueInput } from "../exchangeRate/ExchangeRateWhereUniqueInput";
import { LedgerEntryCreateNestedManyWithoutTransactionsInput } from "./LedgerEntryCreateNestedManyWithoutTransactionsInput";
import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type TransactionCreateInput = {
  amount?: number | null;
  currency?: string | null;
  exchangeRate?: ExchangeRateWhereUniqueInput | null;
  ledgerEntries?: LedgerEntryCreateNestedManyWithoutTransactionsInput;
  status?: string | null;
  timestamp?: Date | null;
  wallet?: WalletWhereUniqueInput | null;
};
