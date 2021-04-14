import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import IDB from "../contracts/idb";
import type Person from "../shared/person";
import IAccess, { signInData, user } from "./iaccess";

export const tokenBlackList = [];

export default abstract class Acccess implements IAccess {
  protected db: IDB;

  constructor(db: IDB) {
    this.db = db;
  }

  signIn(data: signInData): string {
    const users = this.db.readAll() as Person[];
    const user = users.find((user: Person) => user.login === data.login);

    if (!user) {
      throw new Error("User not found!");
    }

    const okPassword = bcrypt.compare(data.password, user.password);

    if (!okPassword) {
      throw new Error("Password incorrect!");
    }

    const token = jwt.sign({ id: user.cpf }, process.env.SECRET, { expiresIn: "1d" });

    return token;
  }

  signOut(token: string): void {
    tokenBlackList.push(token);
  }

  abstract signUp(data: user): void;
}
