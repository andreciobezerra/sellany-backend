import type IDBDrive from "@src/interfaces-types/db-drive-interface";
import type IDBStrategy from "@src/interfaces-types/db-strategy-interface";
import type { Data } from "@src/interfaces-types/types";
import type Company from "@src/models/entities/company";
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
