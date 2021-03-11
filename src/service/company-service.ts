import ICrudMessages from "@src/service/crud-messages-interface";
import Crud from "./crud";
import CompanyDriver from "@src/data/company-drive";

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
