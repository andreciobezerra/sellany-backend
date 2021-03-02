import { Router } from "express";
import { body } from "express-validator";
import { validate, validationRules } from "@src/middlewares/validator";
import ProductService from "@src/services/product-service";
import productSchema from "@src/validations/product-schema";

const productRouter = Router();
const productService = new ProductService();

productRouter.post(
  "/create-product",
  body(["name", "companyID", "details", "percentual"]).trim().escape(),
  validationRules(productSchema),
  validate,
  productService.create
);
productRouter.get("/all-products", productService.readAll);
productRouter.get("/:id", productService.read);
productRouter.patch("/:id", productService.update);
productRouter.delete("/:id", productService.delete);

export default productRouter;
