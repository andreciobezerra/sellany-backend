import IDB from "../contracts/idb";
import Operator from "../shared/operator";
import Acccess from "./acess";
import IAccess from "./iaccess";

export default class EAccess extends Acccess implements IAccess {
  constructor(db: IDB) {
    super(db);
  }

  signUp(user: Operator): void {
    Promise.resolve(this.db.create(user)).catch((err) => {
      throw new Error(err.message);
    });
  }
}
