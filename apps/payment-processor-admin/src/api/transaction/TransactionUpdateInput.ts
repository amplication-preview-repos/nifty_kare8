import { ExchangeRateWhereUniqueInput } from "../exchangeRate/ExchangeRateWhereUniqueInput";
import { LedgerEntryUpdateManyWithoutTransactionsInput } from "./LedgerEntryUpdateManyWithoutTransactionsInput";
import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: number | null;
  currency?: string | null;
  exchangeRate?: ExchangeRateWhereUniqueInput | null;
  ledgerEntries?: LedgerEntryUpdateManyWithoutTransactionsInput;
  status?: string | null;
  timestamp?: Date | null;
  wallet?: WalletWhereUniqueInput | null;
};
