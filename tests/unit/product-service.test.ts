import ProductInMemory from "@src/data/product-in-memory";
import Product from "@src/service/product";
import ProductService from "@src/service/product-service";

describe("Test the CRUD operations of ProductService", () => {
  const tubaina = new Product("tubaina", 5.0, "xyz123", "o sabor refrescante do verão", 0.5);
  const productService = new ProductService();
  const dbDriver = (productService.getDBDriver() as unknown) as ProductInMemory;

  test("Create an product", async () => {
    const create = await productService.create(tubaina);

    expect(create).toEqual("Product created with success.");
    expect(dbDriver.read("1")).toEqual({ id: "1", ...tubaina });
  });

  test("Read a product", () => {
    const product = productService.read("1");

    expect(product).toEqual({ id: "1", ...tubaina });
  });

  test("Read all products", () => {
    const products = productService.readAll();

    expect(products.length).toEqual(1);
    expect(products[0]).toEqual({ id: "1", ...tubaina });
  });

  test("Update a product", () => {
    const message = productService.update("1", { name: "cajuina", price: 4.5 });
    const cajuina = productService.read("1");

    expect(message).toEqual("Product updated with success.");
    expect(cajuina.name).toEqual("cajuina");
    expect(cajuina.price).toEqual(4.5);
  });

  test("Delete a product", () => {
    const message = productService.delete("1");
    const deleted = productService.read("1");

    expect(message).toEqual("Product deleted with success.");
    expect(deleted).toBeUndefined();
  });
});

describe("Test exeptions", () => {
  const productService = new ProductService();

  test("Product with an invalid name", async () => {
    const invalid = new Product("ov", 1.0, "xyz123", "bife do oião @@", 0.5);

    try {
      await productService.create(invalid);
    } catch (error) {
      expect(error.message).toEqual("The name must be at least 3 characters.");
    }
  });

  test("Product with an invalid price", async () => {
    const invalid = new Product("Kinder Ovo", -1.0, "xyz123", "bife do oião @@", 0.5);

    try {
      await productService.create(invalid);
    } catch (error) {
      expect(error.message).toEqual("The price must be a positive value.");
    }
  });

  test("Product with an invalid percentual", async () => {
    const invalid = new Product("Kinder Ovo", 1.0, "xyz123", "bife do oião @@", -0.5);

    try {
      await productService.create(invalid);
    } catch (error) {
      expect(error.message).toEqual("The percentual must be a positive value.");
    }
  });
});
