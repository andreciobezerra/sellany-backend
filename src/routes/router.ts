import { Router } from "express";
import productRouter from "./product-router";

const router = Router();

router.use("/", (_, res) => res.send("Welcome to Sellany!"));
router.use("/product", productRouter);

export default router;
