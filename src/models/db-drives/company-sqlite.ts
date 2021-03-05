import IDBStrategy from "@src/interfaces-types/db-strategy-interface";
import type Company from "../entities/company";
import type { Data } from "@src/interfaces-types/types";
import sqliteDrive from "@src/../database/sqlite3DB";

class CompanySQLite implements IDBStrategy {
  private dbDrive = new sqliteDrive();
  private db = this.dbDrive.getDB();

  create(company: Company): void {
    this.db
      .prepare("INSERT INTO company ( fantasy, companyName, cnpj, owners)  VALUES ( ?,?,?,?)")
      .run(company.fantasy, company.companyName, company.cnpj, company.owners);
  }

  read(id: string): Company {
    const company = this.db.prepare("SELECT * from company WHERE id = ?").get(id);

    return (company as unknown) as Company;
  }

  readAll(): Array<Company> {
    return this.db.prepare('SELECT * FROM "company"').all();
  }

  update(id: string, newData: Data): void {
    const columns = Object.keys(newData)
      .map((key) => `${key} = '${newData[key]}'`)
      .join(", ");

    this.db.prepare(`UPDATE company SET ${columns} WHERE id=${id}`).run();
  }

  delete(id: string): void {
    this.db.prepare(`DELETE from company WHERE id=${id}`).run();
  }

  clear(): void {
    this.db.prepare("DELETE from company").run();
    this.db.prepare("DELETE from sqlite_sequence WHERE name='company'").run();
  }
}

export default CompanySQLite;
