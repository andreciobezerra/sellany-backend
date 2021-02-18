import IDBStrategy from "@src/interfaces-types/db-strategy-interface";
import type { Data } from "@src/interfaces-types/types";
import type Product from "../entities/product";

class CompanyInMemory implements IDBStrategy {
  readonly data: Array<Data> = [];

  create(elem: Product): void {
    throw new Error("Method not implemented.");
  }
  read(id: string): Product {
    throw new Error("Method not implemented.");
  }
  readAll(): Product[] {
    throw new Error("Method not implemented.");
  }
  update(id: string, newData: Data): void {
    throw new Error("Method not implemented.");
  }
  delete(id: string): void {
    throw new Error("Method not implemented.");
  }
}

export default CompanyInMemory;
