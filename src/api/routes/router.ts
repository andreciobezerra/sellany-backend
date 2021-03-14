import { Router } from "express";
import productRouter from "./product-router";

const router = Router();

router.get("/", (_, res) => res.send("Welcome to Sellany!"));
router.use("/product", productRouter);
// router.use("/company", productRouter);

export default router;