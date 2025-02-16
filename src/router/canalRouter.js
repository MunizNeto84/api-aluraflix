import { Router } from "express";
import CanalController from "../controller/CanalController.js";
import authMiddleware from "../middleware/AuthMiddleware.js";

const canalController = new CanalController();
const routers = Router();

routers.get("/api/v1/canal/", authMiddleware, (req, res, next) =>
  canalController.getAll(req, res, next)
);

routers.get("/api/v1/canal/:id", authMiddleware, (req, res, next) =>
  canalController.getById(req, res, next)
);

routers.post("/api/v1/canal", authMiddleware, (req, res, next) =>
  canalController.create(req, res, next)
);

export default routers;
