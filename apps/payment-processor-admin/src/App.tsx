import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ExchangeRateList } from "./exchangeRate/ExchangeRateList";
import { ExchangeRateCreate } from "./exchangeRate/ExchangeRateCreate";
import { ExchangeRateEdit } from "./exchangeRate/ExchangeRateEdit";
import { ExchangeRateShow } from "./exchangeRate/ExchangeRateShow";
import { WalletList } from "./wallet/WalletList";
import { WalletCreate } from "./wallet/WalletCreate";
import { WalletEdit } from "./wallet/WalletEdit";
import { WalletShow } from "./wallet/WalletShow";
import { TransactionList } from "./transaction/TransactionList";
import { TransactionCreate } from "./transaction/TransactionCreate";
import { TransactionEdit } from "./transaction/TransactionEdit";
import { TransactionShow } from "./transaction/TransactionShow";
import { LedgerEntryList } from "./ledgerEntry/LedgerEntryList";
import { LedgerEntryCreate } from "./ledgerEntry/LedgerEntryCreate";
import { LedgerEntryEdit } from "./ledgerEntry/LedgerEntryEdit";
import { LedgerEntryShow } from "./ledgerEntry/LedgerEntryShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"PaymentProcessor"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ExchangeRate"
          list={ExchangeRateList}
          edit={ExchangeRateEdit}
          create={ExchangeRateCreate}
          show={ExchangeRateShow}
        />
        <Resource
          name="Wallet"
          list={WalletList}
          edit={WalletEdit}
          create={WalletCreate}
          show={WalletShow}
        />
        <Resource
          name="Transaction"
          list={TransactionList}
          edit={TransactionEdit}
          create={TransactionCreate}
          show={TransactionShow}
        />
        <Resource
          name="LedgerEntry"
          list={LedgerEntryList}
          edit={LedgerEntryEdit}
          create={LedgerEntryCreate}
          show={LedgerEntryShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
