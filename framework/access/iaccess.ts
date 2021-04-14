import Admin from "../shared/admin";
import Client from "../shared/client";
import Operator from "../shared/operator";

export type user = Client | Admin | Operator;

export type signInData = {
  login: string;
  password: string;
};

export default interface IAccess {
  signIn(data: signInData): string;
  signOut(token: string): void;
  signUp(data: user): void;
}
