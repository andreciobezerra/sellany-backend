import ClientDriver from "@src/data/client-drive";
import Client from "../../framework/shared/client";
import clientSchema from "./validations/client-schema";

class ClientService {
  private static DBDriver: ClientDriver = new ClientDriver(process.env.NODE_ENV ?? "");

  getDBDriver(): ClientDriver {
    return ClientService.DBDriver;
  }

  async create(client: Client): Promise<string> {
    await clientSchema.validate(client).catch((err) => {
      throw Error(err.errors.join());
    });

    try {
      ClientService.DBDriver.create(client);
      return "Client created with success.";
    } catch (error) {
      const err = Error("There was a database error.");
      err.name = "dbError";

      throw err;
    }
  }

  read(id: string): Client {
    try {
      return ClientService.DBDriver.read(id);
    } catch (error) {
      const err = new Error("There was a database error.");
      err.name = "dbError";

      throw err;
    }
  }

  readAll(): Array<Client> {
    try {
      return ClientService.DBDriver.readAll();
    } catch (error) {
      const err = new Error("There was a database error.");
      err.name = "dbError";

      throw err;
    }
  }

  update(id: string, data: Record<string, string | number>): string {
    try {
      ClientService.DBDriver.update(id, data);
      return "Client updated with success.";
    } catch (error) {
      const err = new Error("There was a database error.");
      err.name = "dbError";

      throw err;
    }
  }

  delete(id: string): string {
    try {
      ClientService.DBDriver.delete(id);
      return "Client deleted with success.";
    } catch (error) {
      const err = new Error("There was a database error.");
      err.name = "dbError";

      throw err;
    }
  }
}

export default ClientService;
