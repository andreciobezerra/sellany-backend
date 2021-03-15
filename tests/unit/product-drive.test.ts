import ProductDrive from "@src/data/product-drive";
import Product from "@src/service/product";

describe("Test the operation of DB driver ProductDrive", () => {
  const productDrive = new ProductDrive(process.env.NODE_ENV ?? "");
  const tubaina = new Product("tubaina", 5.0, "xyz123", "o sabor refrescante do verão", 0.5);

  test("Has a strategy?", () => {
    expect(productDrive.strategy).toBeDefined;
  });

  test("Create an product", () => {
    productDrive.create(tubaina);

    expect(productDrive.readAll().includes({ ...tubaina })).toBeTruthy;
  });

  test("Read a product", () => {
    const product = productDrive.read("1");

    expect(product.name).toEqual("tubaina");
    expect(product.price).toEqual(5.0);
    expect(product.companyID).toEqual("xyz123");
  });

  test("Read all products", () => {
    const products = productDrive.readAll();

    expect(Array.isArray(products)).toBeTruthy;
  });

  test("Update a product", () => {
    productDrive.update("1", { name: "cajuina", price: 4.5 });
    const cajuina = productDrive.read("1");

    expect(cajuina.name).toEqual("cajuina");
    expect(cajuina.price).toEqual(4.5);
  });

  test("Delete a product", () => {
    productDrive.delete("1");

    expect(productDrive.readAll().includes({ ...tubaina })).toBeFalsy();
  });
});
