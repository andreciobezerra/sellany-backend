import type IDBDrive from "@src/interfaces-types/db-drive-interface";
import type IDBStrategy from "@src/interfaces-types/db-strategy-interface";
import type IProduct from "@src/interfaces-types/product-interface";
import ProductInMemory from "./product-in-memory";

class ProductDrive implements IDBDrive {
  readonly strategy: IDBStrategy;
  private static Strategies = new Map([["test", ProductInMemory]]);

  constructor(nodeEnv: string) {
    this.strategy = new (ProductDrive.Strategies.get(nodeEnv) ?? ProductInMemory)();
  }

  create(elem: IProduct): void {
    this.strategy.create(elem);
  }

  read(id: string): IProduct {
    return this.strategy.read(id);
  }

  readAll(): IProduct[] {
    return this.strategy.readAll();
  }

  update(id: string, newData: Record<string, string | number>): void {
    this.strategy.update(id, newData);
  }

  delete(id: string): void {
    this.strategy.delete(id);
  }
}

export default ProductDrive;
