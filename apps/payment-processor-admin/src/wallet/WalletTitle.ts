import { Wallet as TWallet } from "../api/wallet/Wallet";

export const WALLET_TITLE_FIELD = "currency";

export const WalletTitle = (record: TWallet): string => {
  return record.currency?.toString() || String(record.id);
};
