import ProductSQLite from "@src/data/product-sqlite";
import Product from "@src/service/product";

describe("Test the operation of DB driver ProductDrive", () => {
  const sqliteDrive = new ProductSQLite();
  const fluminense = new Product(
    "mortadela fluminense",
    36.5,
    "xyz123",
    "Apimentada, gordurosa e saborosa.",
    0.3
  );

  afterAll(() => {
    sqliteDrive.clear();
  });

  test("Create a product", () => {
    sqliteDrive.create(fluminense);

    expect(sqliteDrive.readAll().length).toEqual(1);
  });

  test("Read a product", () => {
    const product = sqliteDrive.read("1");

    expect(product?.name).toEqual(fluminense.name);
    expect(product?.price).toEqual(fluminense.price);
    expect(product?.companyID).toEqual(fluminense.companyID);
    expect(product?.details).toEqual(fluminense.details);
  });

  test("List all products", () => {
    const products = sqliteDrive.readAll();
    expect(products.length).toEqual(1);
    expect(products.find((prod) => prod.name === fluminense.name)).toBeDefined();
  });

  test("Update a product", () => {
    sqliteDrive.update("1", { name: "cajuina", price: 4.5 });
    const cajuina = sqliteDrive.read("1");

    expect(cajuina.name).toEqual("cajuina");
    expect(cajuina.price).toEqual(4.5);
  });

  test("Delete a product", () => {
    sqliteDrive.delete("1");

    expect(sqliteDrive.readAll().length).toEqual(0);
  });
});
