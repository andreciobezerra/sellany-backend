describe("Product CRUD operations tests", () => {
  test("Create an product", async (): Promise<void> => {
    const { body, status } = await global.testRequest.post("/product/create-product");

    expect(status).toEqual(200);
    expect(body).toEqual({ message: "Produto criado." });
  });

  test("Get a product", async (): Promise<void> => {
    const { body, status } = await global.testRequest.get("/product/1");

    expect(status).toEqual(200);
    expect(body).toEqual({ message: "Test." });
  });
});
