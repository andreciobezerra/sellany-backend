import IDBStrategy from "@src/interfaces-types/db-strategy-interface";
import type { Data } from "@src/interfaces-types/types";
import type Company from "../entities/company";

class CompanyInMemory implements IDBStrategy {
  readonly data: Array<Data> = [];

  create(elem: Company): void {
    this.data.push({ id: `${this.data.length + 1}`, ...elem });
  }
  read(id: string): Company {
    const company = this.data.find((company) => company.id === id);

    return (company as unknown) as Company;
  }

  readAll(): Array<Company> {
    return (this.data as unknown) as Array<Company>;
  }

  update(id: string, newData: Data): void {
    const productIndex = this.data.findIndex((prod) => prod.id === id);

    if (productIndex > -1) {
      const product = this.data[productIndex];

      const productUpdate = { ...product, ...newData };

      this.data.splice(productIndex, 1, productUpdate);
    }
  }

  delete(id: string): void {
    const companyIndex = this.data.findIndex((comp) => comp.id === id);

    if (companyIndex > -1) {
      this.data.splice(companyIndex, 1);
    }
  }
}

export default CompanyInMemory;
