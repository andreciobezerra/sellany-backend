import ProductDriver from "@src/data/product-drive";
import Product from "./product";
import productSchema from "./validations/product-schema";

class ProductService {
  private static DBDriver: ProductDriver = new ProductDriver(process.env.NODE_ENV ?? "");

  getDBDriver(): ProductDriver {
    return ProductService.DBDriver;
  }

  async create(product: Product): Promise<string> {
    await productSchema.validate(product).catch((err) => {
      throw Error(err.errors.join());
    });

    try {
      ProductService.DBDriver.create(product);
      return "Product created with success.";
    } catch (error) {
      const err = new Error("There was a database error.");
      err.name = "dbError";

      throw err;
    }
  }

  read(id: string): Product {
    try {
      return ProductService.DBDriver.read(id);
    } catch (error) {
      const err = new Error("There was a database error.");
      err.name = "dbError";

      throw err;
    }
  }

  readAll(): Array<Product> {
    try {
      return ProductService.DBDriver.readAll();
    } catch (error) {
      const err = new Error("There was a database error.");
      err.name = "dbError";

      throw err;
    }
  }

  update(id: string, data: Record<string, string | number>): string {
    try {
      ProductService.DBDriver.update(id, data);
      return "Product updated with success.";
    } catch (error) {
      const err = new Error("There was a database error.");
      err.name = "dbError";

      throw err;
    }
  }

  delete(id: string): string {
    try {
      ProductService.DBDriver.delete(id);
      return "Product deleted with success.";
    } catch (error) {
      const err = new Error("There was a database error.");
      err.name = "dbError";

      throw err;
    }
  }
}

export default ProductService;
