import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TRANSACTION_TITLE_FIELD } from "../transaction/TransactionTitle";

export const LedgerEntryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LedgerEntries"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
