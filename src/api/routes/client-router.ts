import { Router } from "express";
import { body } from "express-validator";
import ClientController from "../controllers/client-controller";

const clientRouter = Router();
const controller = new ClientController();

clientRouter.post(
  "/create-client",
  body(["name", "cpf"]).trim().escape(),
  controller.create.bind(controller)
);

clientRouter.get("/all-clients", controller.readAll.bind(controller));
clientRouter.get("/:id", controller.read.bind(controller));
clientRouter.patch("/:id", controller.update.bind(controller));
clientRouter.delete("/:id", controller.delete.bind(controller));

export default clientRouter;
