import ClientService from "@src/service/client-service";
import { NextFunction, Request, Response } from "express";
import IController from "./controller-interface";

class ClientController implements IController {
  private service: ClientService;

  constructor() {
    this.service = new ClientService();
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    const client = req.body;

    try {
      const message = await this.service.create(client);
      res.status(200).json({ message });
    } catch (error) {
      next({ statusCode: 422, message: error.message });
    }
  }

  read(req: Request, res: Response, next: NextFunction): void {
    const { id } = req.params;

    try {
      const product = this.service.read(id);
      res.status(200).json({ data: product });
    } catch (error) {
      next({ statusCode: 422, message: error.message });
    }
  }

  readAll(req: Request, res: Response, next: NextFunction): void {
    try {
      const products = this.service.readAll();
      res.status(200).json({ data: products });
    } catch (error) {
      next({ statusCode: 422, message: error.message });
    }
  }

  update(req: Request, res: Response, next: NextFunction): void {
    const { id } = req.params;

    try {
      const message = this.service.update(id, req.body);
      res.status(200).json({ message });
    } catch (error) {
      next({ statusCode: 422, message: error.message });
    }
  }

  delete(req: Request, res: Response, next: NextFunction): void {
    const { id } = req.params;

    try {
      const message = this.service.delete(id);
      res.status(200).json({ message });
    } catch (error) {
      next({ statusCode: 422, message: error.message });
    }
  }
}

export default ClientController;
