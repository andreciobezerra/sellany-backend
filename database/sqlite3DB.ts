import sqlite3 from "better-sqlite3";

class sqliteDrive {
  private static DB = sqlite3("./database/sellany.sqlite3");

  getDB(): sqlite3.Database {
    return sqliteDrive.DB;
  }
}

export default sqliteDrive;
