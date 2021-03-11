import { Router } from "express";
import { body } from "express-validator";

const productRouter = Router();

productRouter.post(
  "/create-product",
  body(["name", "companyID", "details", "percentual"]).trim().escape(),
  () => console.log("")
);

productRouter.get("/all-products", () => console.log(""));
productRouter.get("/:id", () => console.log(""));
productRouter.patch("/:id", () => console.log(""));
productRouter.delete("/:id", () => console.log(""));

export default productRouter;
