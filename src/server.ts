import "./utils/module-alias";
import { Server } from "@overnightjs/core";
import { Application, json } from "express";
import ProductController from "./controllers/product";

class SetupServer extends Server {
  private port: number;

  constructor(port = 3000) {
    super();
    this.port = port;
  }

  private setupExpress(): void {
    this.app.use(json());
  }

  private setupController(): void {
    const productController = new ProductController();

    this.addControllers([productController]);
  }

  public init(): void {
    this.setupExpress();
    this.setupController();
  }

  public getApp(): Application {
    return this.app;
  }
}

export default SetupServer;
