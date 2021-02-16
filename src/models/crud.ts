import { Request, Response } from "express";
import IService from "@src/interfaces-types/service-interface";
import ICrudMessages from "@src/interfaces-types/crud-messages-interface";
import IDBDrive from "@src/interfaces-types/db-drive-interface";

abstract class Crud implements IService {
  private static Messages: ICrudMessages;
  private static DBDrive: IDBDrive;

  constructor(crudMessages: ICrudMessages, dbDrive: IDBDrive) {
    Crud.Messages = crudMessages;
    Crud.DBDrive = dbDrive;
  }

  create(req: Request, res: Response): void {
    res.status(200).json({ message: Crud.Messages.createMessage });
  }

  read(req: Request, res: Response): void {
    res.status(200).json({ message: "Test." });
  }

  readAll(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
  }

  update(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
  }

  delete(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
  }
}

export default Crud;
