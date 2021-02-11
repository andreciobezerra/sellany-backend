import { Request, Response } from "express";

interface IService {
  create(req: Request, res: Response): void;
  read(req: Request, res: Response): void;
  readAll(req: Request, res: Response): void;
  update(req: Request, res: Response): void;
  delete(req: Request, res: Response): void;
}

export default IService;
