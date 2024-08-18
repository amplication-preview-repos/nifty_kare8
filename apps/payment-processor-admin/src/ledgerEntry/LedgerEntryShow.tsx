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

import { LEDGERENTRY_TITLE_FIELD } from "./LedgerEntryTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { TRANSACTION_TITLE_FIELD } from "../transaction/TransactionTitle";

export const LedgerEntryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Wallet"
          target="ledgerEntryId"
          label="Wallets"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
