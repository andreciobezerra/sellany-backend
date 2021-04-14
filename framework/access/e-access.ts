import idb from "../contracts/idb";
import Admin from "../shared/admin";
import Client from "../shared/client";
import Acccess from "./acess";
import IAccess from "./iaccess";

type user = Client | Admin;

export default class EAccess extends Acccess implements IAccess {
  constructor(db: idb) {
    super(db);
  }

  signUp(user: user): void {
    Promise.resolve(this.db.create(user)).catch((err) => {
      throw new Error(err.message);
    });
  }
}
