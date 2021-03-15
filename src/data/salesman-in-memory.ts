import IDBStrategy from "./db-strategy-interface";
import type { Data } from "@src/service/types";
import type Salesman from "@src/service/salesman";

class SalesmanInMemory implements IDBStrategy {
  readonly data: Array<Data> = [];

  create(elem: Salesman): void {
    this.data.push({ id: `${this.data.length + 1}`, ...elem });
  }
  read(id: string): Salesman {
    const company = this.data.find((company) => company.id === id);

    return (company as unknown) as Salesman;
  }

  readAll(): Array<Salesman> {
    return (this.data as unknown) as Array<Salesman>;
  }

  update(id: string, newData: Data): void {
    const salesmanIndex = this.data.findIndex((sm) => sm.id === id);

    if (salesmanIndex > -1) {
      const salesman = this.data[salesmanIndex];

      const salesmanUpdate = { ...salesman, ...newData };

      this.data.splice(salesmanIndex, 1, salesmanUpdate);
    }
  }

  delete(id: string): void {
    const salesmanIndex = this.data.findIndex((sm) => sm.id === id);

    if (salesmanIndex > -1) {
      this.data.splice(salesmanIndex, 1);
    }
  }
}

export default SalesmanInMemory;
