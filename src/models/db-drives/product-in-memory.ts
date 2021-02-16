import IDBStrategy from "@src/interfaces-types/db-strategy-interface";
import IProduct from "@src/interfaces-types/product-interface";

class ProductInMemory implements IDBStrategy {
  readonly data: Array<Record<string, string | number>> = [];

  create(elem: IProduct): void {
    this.data.push({ id: `${this.data.length + 1}`, ...elem });
  }

  read(id: string): IProduct {
    const product = this.data.find((prod) => prod.id === id);

    return (product as unknown) as IProduct;
  }

  readAll(): Array<IProduct> {
    return (this.data as unknown) as Array<IProduct>;
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
