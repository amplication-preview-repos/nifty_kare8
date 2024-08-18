import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { EXCHANGERATE_TITLE_FIELD } from "./ExchangeRateTitle";
import { WALLET_TITLE_FIELD } from "../wallet/WalletTitle";

export const ExchangeRateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="currencyFrom" source="currencyFrom" />
        <TextField label="currencyTo" source="currencyTo" />
        <TextField label="ID" source="id" />
        <TextField label="rate" source="rate" />
        <TextField label="timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Transaction"
          target="exchangeRateId"
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
