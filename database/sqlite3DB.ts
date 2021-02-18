import sqlite3 from "sqlite3";

class sqliteDrive {
  private sqlite: sqlite3.sqlite3 = sqlite3.verbose();
  private static DB: sqlite3.Database;

  constructor() {
    sqliteDrive.DB = new this.sqlite.Database("./database/sellany.sqlite3");
  }

  getDB(): sqlite3.Database {
    return sqliteDrive.DB;
  }
}

export default sqliteDrive;
