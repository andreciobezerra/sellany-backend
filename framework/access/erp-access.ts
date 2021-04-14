import IDB from "../contracts/idb";
import Admin from "../shared/admin";
import Operator from "../shared/operator";
import Acccess from "./acess";
import IAccess from "./iaccess";

type user = Admin | Operator;

export default class EAccess extends Acccess implements IAccess {
  constructor(db: IDB) {
    super(db);
  }

  signUp(user: user): void {
    Promise.resolve(this.db.create(user)).catch((err) => {
      throw new Error(err.message);
    });
  }
}
