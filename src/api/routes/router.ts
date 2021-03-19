import { Router } from "express";
import clientRouter from "./client-router";
import productRouter from "./product-router";

const router = Router();

router.get("/", (_, res) => res.send("Welcome to Sellany!"));
router.use("/product", productRouter);
// router.use("/company", productRouter);
router.use("/client", clientRouter);
export default router;
