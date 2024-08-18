import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";
import { WalletUpdateManyWithoutLedgerEntriesInput } from "./WalletUpdateManyWithoutLedgerEntriesInput";

export type LedgerEntryUpdateInput = {
  amount?: number | null;
  ledgerAmount?: number | null;
  ledgerTimestamp?: Date | null;
  ledgerType?: string | null;
  timestamp?: Date | null;
  transaction?: TransactionWhereUniqueInput | null;
  typeField?: string | null;
  wallets?: WalletUpdateManyWithoutLedgerEntriesInput;
};
