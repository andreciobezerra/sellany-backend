import { Router } from "express";
import ProductService from "@src/services/product-service";

const productRouter = Router();
const product = new ProductService();

productRouter.post("/create-product", product.create);
productRouter.get("/:id", product.read);

export default productRouter;
