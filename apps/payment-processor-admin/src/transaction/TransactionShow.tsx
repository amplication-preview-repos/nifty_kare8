import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { TRANSACTION_TITLE_FIELD } from "./TransactionTitle";
import { EXCHANGERATE_TITLE_FIELD } from "../exchangeRate/ExchangeRateTitle";
import { WALLET_TITLE_FIELD } from "../wallet/WalletTitle";

export const TransactionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="currency" source="currency" />
        <ReferenceField
          label="ExchangeRate"
          source="exchangerate.id"
          reference="ExchangeRate"
        >
          <TextField source={EXCHANGERATE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="status" source="status" />
        <TextField label="timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Wallet" source="wallet.id" reference="Wallet">
          <TextField source={WALLET_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="LedgerEntry"
          target="transactionId"
          label="LedgerEntries"
        >
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="ledgerAmount" source="ledgerAmount" />
            <TextField label="ledgerTimestamp" source="ledgerTimestamp" />
            <TextField label="ledgerType" source="ledgerType" />
            <TextField label="timestamp" source="timestamp" />
            <ReferenceField
              label="Transaction"
              source="transaction.id"
              reference="Transaction"
            >
              <TextField source={TRANSACTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
