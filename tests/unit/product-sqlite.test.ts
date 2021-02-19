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

  afterAll(() => sqliteDrive.close());

  test("Create a product", () => {
    sqliteDrive.create(product);
  });

  test("Read a product", () => {
    const product = sqliteDrive.read("1");
    console.log(product);
  });

  test("List all products", () => {
    const products = sqliteDrive.readAll();
    console.log(products);
  });
});
