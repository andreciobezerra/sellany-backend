import ProductInMemory from "@src/models/db-drives/product-in-memory";
import Product from "@src/models/entities/product";

describe("Test the CRUD operations of DB driver ProductInMemory", () => {
  const productDrive = new ProductInMemory();
  const tubaina = new Product("tubaina", 5.0, "xyz123", "o sabor refrescante do verão");

  test("Create an product", () => {
    productDrive.create(tubaina);

    expect(productDrive.data.includes({ ...tubaina })).toBeTruthy;
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

    expect(productDrive.data.includes({ ...tubaina })).toBeFalsy;
  });
});
