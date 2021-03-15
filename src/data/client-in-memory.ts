import type Client from "@src/service/client";
import type { Data } from "@src/service/types";
import IDBStrategy from "./db-strategy-interface";

class ClientInMemory implements IDBStrategy {
  readonly data: Array<Data> = [];

  create(client: Client): void {
    this.data.push({ id: `${this.data.length + 1}`, ...client });
  }

  read(id: string): Client {
    const client = this.data.find((prod) => prod.id === id);

    return (client as unknown) as Client;
  }

  readAll(): Array<Client> {
    return (this.data as unknown) as Array<Client>;
  }

  update(id: string, newData: Record<string, string | number>): void {
    const clientIndex = this.data.findIndex((client) => client.id === id);

    if (clientIndex > -1) {
      const client = this.data[clientIndex];

      const clientUpdate = { ...client, ...newData };
      this.data.splice(clientIndex, 1, clientUpdate);
    }
  }

  delete(id: string): void {
    const clientIndex = this.data.findIndex((client) => client.id === id);

    if (clientIndex > -1) {
      this.data.splice(clientIndex, 1);
    }
  }
}

export default ClientInMemory;
