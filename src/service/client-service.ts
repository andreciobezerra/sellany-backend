import ICrudMessages from "./crud-messages-interface";
import ClientDriver from "@src/data/client-drive";
import Crud from "./crud";

class ClientService extends Crud {
  private static CrudMessages: ICrudMessages = {
    createMessage: "Client created with success.",
    updateMessage: "Client updated with success.",
    deleteMessage: "Client deleted with success.",
  };

  constructor() {
    super(ClientService.CrudMessages, new ClientDriver(process.env.NODE_ENV ?? ""));
  }
}

export default ClientService;
