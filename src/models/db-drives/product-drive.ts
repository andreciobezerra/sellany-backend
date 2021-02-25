import type IDBDrive from "@src/interfaces-types/db-drive-interface";
import type IDBStrategy from "@src/interfaces-types/db-strategy-interface";
import type { Data } from "@src/interfaces-types/types";
import type Product from "@src/models/entities/product";
import ProductInMemory from "./product-in-memory";

class ProductDrive implements IDBDrive {
  readonly strategy: IDBStrategy;
  private static Strategies = new Map([["test", ProductInMemory]]);

  constructor(nodeEnv: string) {
    this.strategy = new (ProductDrive.Strategies.get(nodeEnv) ?? ProductInMemory)();
  }

  create(elem: Product): void {
    this.strategy.create(elem);
  }

  read(id: string): Product {
    const product = this.strategy.read(id);

    return product as Product;
  }

  readAll(): Array<Product> {
    const products = this.strategy.readAll();

    return products as Array<Product>;
  }

  update(id: string, newData: Data): void {
    this.strategy.update(id, newData);
  }

  delete(id: string): void {
    this.strategy.delete(id);
  }
}

export default ProductDrive;
