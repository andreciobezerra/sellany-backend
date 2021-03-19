import ClientInMemory from "@src/data/client-in-memory";
import Client from "@src/service/client";
import ClientService from "@src/service/client-service";

describe("Test the CRUD operations of ClientService", () => {
  const lucifer = new Client("Samael Lucifer Asmodeus", "11122266669");
  const clientService = new ClientService();
  const dbDriver = (clientService.getDBDriver() as unknown) as ClientInMemory;

  test("Create an client", async () => {
    const create = await clientService.create(lucifer);

    expect(create).toEqual("Client created with success.");
    expect(dbDriver.read("1")).toEqual({ id: "1", ...lucifer });
  });

  test("Read a client", () => {
    const client = clientService.read("1");

    expect(client).toEqual({ id: "1", ...lucifer });
  });

  test("Read all clients", () => {
    const clients = clientService.readAll();

    expect(clients.length).toEqual(1);
    expect(clients[0]).toEqual({ id: "1", ...lucifer });
  });

  test("Update a client", () => {
    const message = clientService.update("1", { name: "Heylel Satã", price: 4.5 });
    const heylel = clientService.read("1");

    expect(message).toEqual("Client updated with success.");
    expect(heylel.name).toEqual("Heylel Satã");
    expect(heylel.cpf).toEqual(lucifer.cpf);
  });

  test("Delete a client", () => {
    const message = clientService.delete("1");
    const deleted = clientService.read("1");

    expect(message).toEqual("Client deleted with success.");
    expect(deleted).toBeUndefined();
  });
});

describe("Test exeptions", () => {
  const clientService = new ClientService();

  test("Client with an invalid name", async () => {
    const invalid = new Client("Lu", "66611166622");

    try {
      await clientService.create(invalid);
    } catch (error) {
      expect(error.message).toEqual("The name must be at least 3 characters.");
    }
  });

  test("Client with an invalid cpf", async () => {
    const invalid = new Client("Satã Belzebu", "111222335");

    try {
      await clientService.create(invalid);
    } catch (error) {
      expect(error.message).toEqual("The CPF must be 11 characters.");
    }
  });
});
