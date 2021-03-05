import ICrudMessages from "@src/interfaces-types/crud-messages-interface";
import Crud from "@src/models/crud";
import CompanyDriver from "@src/models/db-drives/company-drive";

class CompanyService extends Crud {
  private static CrudMessages: ICrudMessages = {
    createMessage: "Company created with success.",
    updateMessage: "Company updated with success.",
    deleteMessage: "Company deleted with success.",
  };

  constructor() {
    super(CompanyService.CrudMessages, new CompanyDriver(process.env.NODE_ENV ?? ""));
  }
}

export default CompanyService;
