import ICrudMessages from "@src/service/crud-messages-interface";
import Crud from "./crud";
import ProductDriver from "@src/data/product-drive";

class ProductService extends Crud {
  private static CrudMessages: ICrudMessages = {
    createMessage: "Product created with success.",
    updateMessage: "Product updated with success.",
    deleteMessage: "Product deleted with success.",
  };

  constructor() {
    super(ProductService.CrudMessages, new ProductDriver(process.env.NODE_ENV ?? ""));
  }
}

export default ProductService;
