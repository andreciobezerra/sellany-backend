describe("Product CRUD operations tests", () => {
  const product = {
    name: "rapadura",
    companyID: "pb5815000",
    price: 2.99,
    details: "o puro sabor da cana de açucar",
    percentual: 0.6,
  };

  test("Create an product", async (): Promise<void> => {
    const { body, status } = await global.testRequest.post("/product/create-product").send(product);

    expect(status).toEqual(200);
    expect(body).toEqual({ message: "Product created with success." });
  });

  test("Get a product", async (): Promise<void> => {
    const { body, status } = await global.testRequest.get("/product/1");

    expect(status).toEqual(200);
    expect(body.data.name).toEqual(product.name);
    expect(body.data.companyID).toEqual(product.companyID);
    expect(body.data.price).toEqual(product.price);
    expect(body.data.details).toEqual(product.details);
  });

  test("Get all products", async (): Promise<void> => {
    const { body, status } = await global.testRequest.get("/product/all-products");
    expect(status).toEqual(200);
    expect(body.data.find((prod: any) => prod.name === product.name)).toBeDefined();
  });

  test("Update a product", async (): Promise<void> => {
    const { body, status } = await global.testRequest.patch("/product/1").send({ price: 3.49 });
    const productRes = await global.testRequest.get("/product/1");

    const keys = Object.keys(productRes.body.data);

    expect(status).toEqual(200);
    expect(body.message).toEqual("Product updated with success.");
    expect(keys.includes("name")).toBeTruthy();
    expect(keys.includes("companyID")).toBeTruthy();
    expect(keys.includes("details")).toBeTruthy();
    expect(productRes.body.data.price).toEqual(3.49);
  });

  test("Delete a product", async (): Promise<void> => {
    const { body, status } = await global.testRequest.delete("/product/1");

    expect(status).toEqual(200);
    expect(body.message).toEqual("Product deleted with success.");
  });

  test("Create a product with a invalid name", async (): Promise<void> => {
    const invalidProduct = {
      name: "ov",
      companyID: "pb5815000",
      price: 2.99,
      details: "produto invalido",
      percentual: 0.6,
    };

    const { body, status } = await global.testRequest
      .post("/product/create-product")
      .send(invalidProduct);

    expect(status).toEqual(422);
    expect(body).toEqual({ error: "The name must be at least 3 characters." });
  });

  test("Create a product with a invalid price", async (): Promise<void> => {
    const invalidProduct = {
      name: "ovo",
      companyID: "pb5815000",
      price: -2.99,
      details: "produto invalido",
      percentual: 0.6,
    };

    const { body, status } = await global.testRequest
      .post("/product/create-product")
      .send(invalidProduct);

    expect(status).toEqual(422);
    expect(body).toEqual({ error: "The price must be a positive value." });
  });

  test("Create a product with a invalid percentual", async (): Promise<void> => {
    const invalidProduct = {
      name: "ovo",
      companyID: "pb5815000",
      price: 2.99,
      details: "produto invalido",
      percentual: -0.6,
    };

    const { body, status } = await global.testRequest
      .post("/product/create-product")
      .send(invalidProduct);

    expect(status).toEqual(422);
    expect(body).toEqual({ error: "The percentual must be a positive value." });
  });
});
