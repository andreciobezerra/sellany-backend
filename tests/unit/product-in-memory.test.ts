import ProductInMemory from "@src/data/product-in-memory";
import Product from "@src/service/product";

describe("Test the CRUD operations of DB driver ProductInMemory", () => {
  const productDrive = new ProductInMemory();
  const tubaina = new Product("tubaina", 5.0, "xyz123", "o sabor refrescante do verão", 0.5);

  test("Create an product", () => {
    productDrive.create(tubaina);

    expect(productDrive.data[0].name).toEqual(tubaina.name);
  });

  test("Read a product", () => {
    const product = productDrive.read("1");

    expect(product.name).toEqual("tubaina");
    expect(product.price).toEqual(5.0);
    expect(product.companyID).toEqual("xyz123");
  });

  test("Read all products", () => {
    const products = productDrive.readAll();

    expect(products.length).toEqual(1);
    expect(products.find((prod) => prod.name === tubaina.name)).toBeDefined();
  });

  test("Update a product", () => {
    productDrive.update("1", { name: "cajuina", price: 4.5 });
    const cajuina = productDrive.read("1");

    expect(cajuina.name).toEqual("cajuina");
    expect(cajuina.price).toEqual(4.5);
  });

  test("Delete a product", () => {
    productDrive.delete("1");

    expect(productDrive.data.length).toEqual(0);
  });
});
