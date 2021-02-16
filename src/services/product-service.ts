import ICrudMessages from "@src/interfaces-types/crud-messages-interface";
import Crud from "@src/models/crud";
import ProductDriver from "@src/models/db-drives/product-drive";

class ProductService extends Crud {
  private static CrudMessages: ICrudMessages = {
    createMessage: "Product created with success.",
    updateMessage: "Product updated with success.",
    deleteMessage: "Product deleted with success.",
  };

  constructor() {
    const env = process.env.NODE_ENV ?? "";
    const productDriver = new ProductDriver(env);
    super(ProductService.CrudMessages, productDriver);
  }
}

export default ProductService;
