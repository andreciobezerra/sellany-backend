import { NextFunction, Request, Response } from "express";
import { checkSchema, Schema, ValidationChain, validationResult } from "express-validator";

export function validationRules(validatorSchema: Schema): Array<ValidationChain> {
  return checkSchema(validatorSchema);
}

export function validate(req: Request, res: Response, next: NextFunction): void {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    next();
    return;
  }

  next({
    statusCode: 422,
    message: errors
      .array()
      .map((err) => err.msg)
      .join(" "),
  });
}
