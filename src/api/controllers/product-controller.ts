import ProductService from "@src/service/product-service";
import { NextFunction, Request, Response } from "express";
import IController from "./controller-interface";

class ProductController implements IController {
  private service: ProductService;

  private static CrudMessages = {
    createMessage: "Product created with success.",
    updateMessage: "Product updated with success.",
    deleteMessage: "Product deleted with success.",
  };

  constructor() {
    this.service = new ProductService();
  }

  create(req: Request, res: Response, next: NextFunction): void {
    const { product } = req.body;

    try {
      this.service.create(product);
    } catch (error) {
      next({ statusCode: 422, message: error.message });
    }
  }
}

export default ProductController;
