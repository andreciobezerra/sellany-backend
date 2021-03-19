describe("Client CRUD operations tests", () => {
  const client = {
    name: "Enzo Gabrielson Silva",
    cpf: "11122233344",
  };

  test("Create an client", async (): Promise<void> => {
    const { body, status } = await global.testRequest.post("/client/create-client").send(client);

    expect(status).toEqual(200);
    expect(body).toEqual({ message: "Client created with success." });
  });

  test("Get a client", async (): Promise<void> => {
    const { body, status } = await global.testRequest.get("/client/1");

    expect(status).toEqual(200);
    expect(body.data.name).toEqual(client.name);
    expect(body.data.cpf).toEqual(client.cpf);
  });

  test("Get all clients", async (): Promise<void> => {
    const { body, status } = await global.testRequest.get("/client/all-clients");
    expect(status).toEqual(200);
    expect(body.data.find((prod: any) => prod.name === client.name)).toBeDefined();
  });

  test("Update a client", async (): Promise<void> => {
    const { body, status } = await global.testRequest
      .patch("/client/1")
      .send({ name: "Énzo Gabrielson da Silva" });

    const clientRes = await global.testRequest.get("/client/1");

    expect(status).toEqual(200);
    expect(body.message).toEqual("Client updated with success.");
    expect(clientRes.body.data.name).toEqual("Énzo Gabrielson da Silva");
    expect(clientRes.body.data.cpf).toEqual(client.cpf);
  });

  test("Delete a client", async (): Promise<void> => {
    const { body, status } = await global.testRequest.delete("/client/1");

    expect(status).toEqual(200);
    expect(body.message).toEqual("Client deleted with success.");
  });

  test("Create a client with a invalid name", async (): Promise<void> => {
    const invalidClient = {
      name: "Ze",
      cpf: "11133322266",
    };

    const { body, status } = await global.testRequest
      .post("/client/create-client")
      .send(invalidClient);

    expect(status).toEqual(422);
    expect(body).toEqual({ error: "The name must be at least 3 characters." });
  });

  test("Create a client with a invalid cpf", async (): Promise<void> => {
    const invalidClient = {
      name: "Jovandilson Kleberson da Costa",
      cpf: "111222333123",
    };

    const { body, status } = await global.testRequest
      .post("/client/create-client")
      .send(invalidClient);

    expect(status).toEqual(422);
    expect(body).toEqual({ error: "The CPF must be 11 characters." });
  });
});
