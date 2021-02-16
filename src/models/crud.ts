import { Request, Response } from "express";
import IService from "@src/interfaces-types/service-interface";
import ICrudMessages from "@src/interfaces-types/crud-messages-interface";
import IDBDrive from "@src/interfaces-types/db-drive-interface";
import { Entity } from "@src/interfaces-types/types";

abstract class Crud implements IService {
  private static Messages: ICrudMessages;
  private static DBDrive: IDBDrive;

  constructor(crudMessages: ICrudMessages, dbDrive: IDBDrive) {
    Crud.Messages = crudMessages;
    Crud.DBDrive = dbDrive;
  }

  create(req: Request, res: Response): void {
    const elem = req.body as Entity;
    try {
      Crud.DBDrive.create(elem);
      res.status(200).json({ message: Crud.Messages.createMessage });
    } catch (error) {
      console.error(error);
    }
  }

  read(req: Request, res: Response): void {
    const { id } = req.params;
    try {
      const data = Crud.DBDrive.read(id);

      res.status(200).json({ data });
    } catch (error) {
      console.error(error);
    }
  }

  readAll(req: Request, res: Response): void {
    try {
      const data = Crud.DBDrive.readAll();
      res.status(200).json({ data });
    } catch (error) {
      console.error(error);
    }
  }

  update(req: Request, res: Response): void {
    const { id } = req.params;
    try {
      Crud.DBDrive.update(id, req.body);
      res.status(200).json({ message: Crud.Messages.updateMessage });
    } catch (error) {
      console.log(error);
    }
  }

  delete(req: Request, res: Response): void {
    const { id } = req.params;
    try {
      Crud.DBDrive.delete(id);
      res.status(200).json({ message: Crud.Messages.deleteMessage });
    } catch (error) {
      console.log(error);
    }
  }
}

export default Crud;
