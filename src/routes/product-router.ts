import { Router } from "express";
import ProductService from "@src/services/product-service";

const productRouter = Router();
const productService = new ProductService();

productRouter.post("/create-product", productService.create);
productRouter.get("/all-products", productService.readAll);
productRouter.get("/:id", productService.read);
productRouter.patch("/:id", productService.update);
productRouter.delete("/:id", productService.delete);

export default productRouter;
