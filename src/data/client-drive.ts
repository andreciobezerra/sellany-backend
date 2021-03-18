import CompanyInMemory from "./company-in-memory";
import IDBDrive from "./db-drive-interface";
import IDBStrategy from "./db-strategy-interface";
import type Client from "@src/service/client";
import type { Entity, Data } from "@src/service/types";

class ClientDrive implements IDBDrive {
  readonly strategy: IDBStrategy;

  constructor(nodeEnv: string) {
    switch (nodeEnv) {
      case "test":
        this.strategy = new CompanyInMemory();
        break;
      default:
        this.strategy = new CompanyInMemory();
    }
  }

  create(elem: Entity): void {
    this.strategy.create(elem);
  }

  read(id: string): Entity {
    const client = this.strategy.read(id);

    return client as Client;
  }

  readAll(): Array<Client> {
    const clients = this.strategy.readAll();

    return clients as Array<Client>;
  }

  update(id: string, newData: Data): void {
    this.strategy.update(id, newData);
  }

  delete(id: string): void {
    this.strategy.delete(id);
  }
}

export default ClientDrive;
