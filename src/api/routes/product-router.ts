import { Router } from "express";
import { body } from "express-validator";
import ProductController from "../controllers/product-controller";

const productRouter = Router();
const controller = new ProductController();

productRouter.post(
  "/create-product",
  body(["name", "companyID", "details", "percentual"]).trim().escape(),
  controller.create.bind(controller)
);

productRouter.get("/all-products", controller.readAll.bind(controller));
productRouter.get("/:id", controller.read.bind(controller));
productRouter.patch("/:id", controller.update.bind(controller));
productRouter.delete("/:id", controller.delete.bind(controller));

export default productRouter;
