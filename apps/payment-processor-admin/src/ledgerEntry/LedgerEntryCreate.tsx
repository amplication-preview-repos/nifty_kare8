import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TransactionTitle } from "../transaction/TransactionTitle";
import { WalletTitle } from "../wallet/WalletTitle";

export const LedgerEntryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <NumberInput label="ledgerAmount" source="ledgerAmount" />
        <DateTimeInput label="ledgerTimestamp" source="ledgerTimestamp" />
        <TextInput label="ledgerType" source="ledgerType" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <ReferenceInput
          source="transaction.id"
          reference="Transaction"
          label="Transaction"
        >
          <SelectInput optionText={TransactionTitle} />
        </ReferenceInput>
        <TextInput label="type" source="typeField" />
        <ReferenceArrayInput
          source="wallets"
          reference="Wallet"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WalletTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
