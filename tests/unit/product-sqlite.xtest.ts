import ProductSQLite from "@src/models/db-drives/product-sqlite";
import Product from "@src/models/entities/product";

describe("Test the operation of DB driver ProductDrive", () => {
  const sqliteDrive = new ProductSQLite();
  const fluminense = new Product(
    "mortadela fluminense",
    36.5,
    "xyz123",
    "Apimentada, gordurosa e saborosa.",
    0.3
  );

  afterAll(() => sqliteDrive.close());

  test("Create a product", () => {
    sqliteDrive.create(fluminense);
  });

  test("Read a product", () => {
    const product = sqliteDrive.read("1");

    expect(product?.name).toEqual(fluminense.name);
    expect(product?.price).toEqual(fluminense.price);
    expect(product?.companyID).toEqual(fluminense.companyID);
    expect(product?.details).toEqual(fluminense.details);
  });

  xtest("List all products", () => {
    const products = sqliteDrive.readAll();
  });
});
