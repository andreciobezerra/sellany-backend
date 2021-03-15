import { NextFunction, Request, Response } from "express";

interface IController {
  create(req: Request, res: Response, next: NextFunction): void;
  read(req: Request, res: Response, next: NextFunction): void;
  readAll(req: Request, res: Response, next: NextFunction): void;
  update(req: Request, res: Response, next: NextFunction): void;
  delete(req: Request, res: Response, next: NextFunction): void;
}

export default IController;
