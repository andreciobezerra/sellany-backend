import ICrudMessages from "@src/interfaces-types/crud-messages-interface";
import Crud from "@src/models/crud";

class ProductService extends Crud {
  private static CrudMessages: ICrudMessages = {
    createMessage: "Product created with success.",
    updateMessage: "Product updated with success.",
    deleteMessage: "Product deleted with success.",
  };

  constructor() {
    super(ProductService.CrudMessages);
  }
}

export default ProductService;
