import express from "express";
import cors from "cors";
import router from "./routes/router";
import errorHandler from "./middlewares/errorHandling";
import sqliteDrive from "@database/sqlite3DB";

class Server {
  private port: number;
  private app: express.Application;

  constructor(port = 3000) {
    this.port = port;
    this.app = express();
  }

  private setupExpress(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
  }

  private setupRouter(): void {
    this.app.use(router);
  }

  public init(): void {
    this.setupExpress();
    this.setupRouter();
    this.app.use(errorHandler);
    new sqliteDrive();
  }

  public getApp(): express.Application {
    return this.app;
  }

  public listen(): void {
    this.app.listen(this.port, () => console.info(`The server listening at port ${this.port}`));
  }
}

export default Server;
