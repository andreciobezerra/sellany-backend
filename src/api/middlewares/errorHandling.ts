import { NextFunction, Request, Response } from "express";

function errorHandler(
  err: Record<string, number | string>,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (!err.statusCode) {
    res.status(500).json({ error: "Ops, there are something wrong!" });
    return;
  }

  res.status(Number(err.statusCode)).json({ error: err.message });
}

export default errorHandler;
