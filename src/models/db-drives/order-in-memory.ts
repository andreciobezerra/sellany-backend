import IDBStrategy from "@src/interfaces-types/db-strategy-interface";
import type { Data } from "@src/interfaces-types/types";
import Order from "../entities/order";

class OrderInMemory implements IDBStrategy {
  readonly data: Array<Data> = [];

  create(elem: Order): void {
    this.data.push({ id: `${this.data.length + 1}`, ...elem });
  }
  read(id: string): Order {
    const order = this.data.find((order) => order.id === id);

    return (order as unknown) as Order;
  }

  readAll(): Array<Order> {
    return (this.data as unknown) as Array<Order>;
  }

  update(id: string, newData: Data): void {
    const orderIndex = this.data.findIndex((order) => order.id === id);

    if (orderIndex > -1) {
      const order = this.data[orderIndex];

      const orderUpdate = { ...order, ...newData };
      this.data.splice(orderIndex, 1, orderUpdate);
    }
  }

  delete(id: string): void {
    const orderIndex = this.data.findIndex((order) => order.id === id);

    if (orderIndex > -1) {
      this.data.splice(orderIndex, 1);
    }
  }
}

export default OrderInMemory;
