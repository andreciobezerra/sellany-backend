import "./util/module-alias";
import { Server } from "@overnightjs/core";
import { Application, json } from "express";

export class SetupServer extends Server {
  private port: number;

  constructor(port = 3000) {
    super();
    this.port = port;
  }

  private setupExpress(): void {
    this.app.use(json());
  }

  private setupController(): void {
    console.log("aqui vão os controllers");
  }

  public init(): void {
    this.setupExpress();
    this.setupController();
  }

  public getApp(): Application {
    return this.app;
  }
}
