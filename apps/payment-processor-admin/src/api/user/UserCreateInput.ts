import { InputJsonValue } from "../../types";
import { WalletCreateNestedManyWithoutUsersInput } from "./WalletCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
  wallets?: WalletCreateNestedManyWithoutUsersInput;
};
