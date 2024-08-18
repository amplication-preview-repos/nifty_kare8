import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";
import { WalletCreateNestedManyWithoutLedgerEntriesInput } from "./WalletCreateNestedManyWithoutLedgerEntriesInput";

export type LedgerEntryCreateInput = {
  amount?: number | null;
  ledgerAmount?: number | null;
  ledgerTimestamp?: Date | null;
  ledgerType?: string | null;
  timestamp?: Date | null;
  transaction?: TransactionWhereUniqueInput | null;
  typeField?: string | null;
  wallets?: WalletCreateNestedManyWithoutLedgerEntriesInput;
};
