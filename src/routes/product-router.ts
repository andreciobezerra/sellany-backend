import { Router } from "express";
import ProductService from "@src/services/product-service";

const productRouter = Router();
const product = new ProductService();

productRouter.post("/create-product", product.create);
productRouter.get("/all-products", product.readAll);
productRouter.get("/:id", product.read);
productRouter.patch("/:id", product.update);
productRouter.delete("/:id", product.delete);

export default productRouter;
