import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { ExchangeRateTitle } from "../exchangeRate/ExchangeRateTitle";
import { LedgerEntryTitle } from "../ledgerEntry/LedgerEntryTitle";
import { WalletTitle } from "../wallet/WalletTitle";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="currency" source="currency" />
        <ReferenceInput
          source="exchangeRate.id"
          reference="ExchangeRate"
          label="ExchangeRate"
        >
          <SelectInput optionText={ExchangeRateTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="ledgerEntries"
          reference="LedgerEntry"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LedgerEntryTitle} />
        </ReferenceArrayInput>
        <TextInput label="status" source="status" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <ReferenceInput source="wallet.id" reference="Wallet" label="Wallet">
          <SelectInput optionText={WalletTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
