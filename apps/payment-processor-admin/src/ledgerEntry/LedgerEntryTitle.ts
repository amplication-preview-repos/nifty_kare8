import { LedgerEntry as TLedgerEntry } from "../api/ledgerEntry/LedgerEntry";

export const LEDGERENTRY_TITLE_FIELD = "ledgerType";

export const LedgerEntryTitle = (record: TLedgerEntry): string => {
  return record.ledgerType?.toString() || String(record.id);
};
