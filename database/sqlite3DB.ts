import sqlite3 from "better-sqlite3";
import IDB from "../framework/contracts/idb";

class sqliteDrive implements IDB {
  private static DB = sqlite3("./database/sellany.sqlite3");

  getDB(): sqlite3.Database {
    return sqliteDrive.DB;
  }

  close(): void {
    this.getDB().close();
  }
}

export default sqliteDrive;
