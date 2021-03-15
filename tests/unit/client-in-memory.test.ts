import ClientInMemory from "@src/data/client-in-memory";
import Client from "@src/service/client";

describe("Test the CRUD operations of DB driver ClientInMemory", () => {
  const clientDrive = new ClientInMemory();
  const lucifer = new Client("Samael Lucifer", "11122266669");

  test("Create an client", () => {
    clientDrive.create(lucifer);

    expect(clientDrive.data[0].name).toEqual(lucifer.name);
  });

  test("Read a client", () => {
    const client = clientDrive.read("1");

    expect(client).toEqual({ id: "1", ...lucifer });
  });

  test("Read all clients", () => {
    const clients = clientDrive.readAll();

    expect(clients.length).toEqual(1);
    expect(clients).toContainEqual({ id: "1", ...lucifer });
  });

  test("Update a client", () => {
    clientDrive.update("1", { name: "Samael Lucifer Asmodeu" });
    const asmodeu = clientDrive.read("1");

    expect(asmodeu.name).toEqual("Samael Lucifer Asmodeu");
    expect(asmodeu.cpf).toEqual(lucifer.cpf);
  });

  test("Delete a client", () => {
    clientDrive.delete("1");

    expect(clientDrive.data.length).toEqual(0);
  });
});
