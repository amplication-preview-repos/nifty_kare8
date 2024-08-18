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

import { EXCHANGERATE_TITLE_FIELD } from "../exchangeRate/ExchangeRateTitle";
import { WALLET_TITLE_FIELD } from "./WalletTitle";
import { LEDGERENTRY_TITLE_FIELD } from "../ledgerEntry/LedgerEntryTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const WalletShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="balance" source="balance" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="currency" source="currency" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="LedgerEntry"
          source="ledgerentry.id"
          reference="LedgerEntry"
        >
          <TextField source={LEDGERENTRY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Transaction"
          target="walletId"
          label="Transactions"
        >
          <Datagrid rowClick="show">
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
            <ReferenceField
              label="Wallet"
              source="wallet.id"
              reference="Wallet"
            >
              <TextField source={WALLET_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
