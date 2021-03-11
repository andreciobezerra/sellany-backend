import type IDBDrive from "@src/data/db-drive-interface";
import type IDBStrategy from "./db-strategy-interface";
import type { Data } from "@src/service/types";
import type Company from "@src/service/company";
import CompanyInMemory from "./company-in-memory";
import CompanySQLite from "./company-sqlite";

class CompanyDrive implements IDBDrive {
  readonly strategy: IDBStrategy;

  constructor(nodeEnv: string) {
    switch (nodeEnv) {
      case "test":
        this.strategy = new CompanyInMemory();
        break;
      case "development":
        this.strategy = new CompanySQLite();
        break;
      default:
        this.strategy = new CompanyInMemory();
    }
  }

  create(elem: Company): void {
    this.strategy.create(elem);
  }

  read(id: string): Company {
    const product = this.strategy.read(id);

    return product as Company;
  }

  readAll(): Array<Company> {
    const products = this.strategy.readAll();

    return products as Array<Company>;
  }

  update(id: string, newData: Data): void {
    this.strategy.update(id, newData);
  }

  delete(id: string): void {
    this.strategy.delete(id);
  }
}

export default CompanyDrive;
