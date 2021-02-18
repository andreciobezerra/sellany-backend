import IDBStrategy from "@src/interfaces-types/db-strategy-interface";
import type { Data } from "@src/interfaces-types/types";
import type Product from "../entities/product";

class ProductInMemory implements IDBStrategy {
  readonly data: Array<Data> = [];

  create(elem: Product): void {
    this.data.push({ id: `${this.data.length + 1}`, ...elem });
  }

  read(id: string): Product {
    const product = this.data.find((prod) => prod.id === id);

    return (product as unknown) as Product;
  }

  readAll(): Array<Product> {
    return (this.data as unknown) as Array<Product>;
  }

  update(id: string, newData: Record<string, string | number>): void {
    const productIndex = this.data.findIndex((prod) => prod.id === id);

    if (productIndex > -1) {
      const product = this.data[productIndex];

      const productUpdate = { ...product, ...newData };
      this.data.splice(productIndex, 1, productUpdate);
    }
  }

  delete(id: string): void {
    const productIndex = this.data.findIndex((prod) => prod.id === id);

    if (productIndex > -1) {
      this.data.splice(productIndex, 1);
    }
  }
}

export default ProductInMemory;
