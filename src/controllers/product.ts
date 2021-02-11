import { Controller, Delete, Get, Patch, Post } from "@overnightjs/core";
import IService from "@src/interfaces-types/service-interface";
import { Request, Response } from "express";

@Controller("product")
class ProductController implements IService {
  @Post("create-product")
  create(req: Request, res: Response): void {
    res.status(200).json({ message: "Produto criado." });
  }

  @Get(":id")
  read(req: Request, res: Response): void {
    res.status(200).json({ message: "Test." });
  }

  @Get("all-products")
  readAll(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
  }

  @Patch(":id")
  update(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
  }

  @Delete(":id")
  delete(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
  }
}

export default ProductController;
