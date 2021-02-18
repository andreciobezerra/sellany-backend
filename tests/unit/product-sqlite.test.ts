import ProductSQLite from "@src/models/db-drives/product-sqlite";
import Product from "@src/models/entities/product";

describe("Test the operation of DB driver ProductDrive", () => {
  const sqliteDrive = new ProductSQLite();
  const product = new Product(
    "mortadela fluminense",
    36.5,
    "xyz123",
    "Apimentada, gordurosa e saborosa."
  );

  test("Create a product", () => {
    sqliteDrive.create(product);
  });
});
