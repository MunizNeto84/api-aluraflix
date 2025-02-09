import { Router } from "express";
import CategoriaController from "../controller/CategoriaController.js";
import authMiddleware from "../middleware/AuthMiddleware.js";

const categoriaController = new CategoriaController();
const routers = Router();

routers.get("/api/v1/categoria", authMiddleware, (req, res, next) =>
  categoriaController.getAll(req, res, next)
);
routers.get("/api/v1/categoria/:id", authMiddleware, (req, res, next) =>
  categoriaController.getById(req, res, next)
);
routers.get("/api/v1/categoria/:id/video", authMiddleware, (req, res, next) =>
  categoriaController.getAllVideosByID(req, res, next)
);
routers.post("/api/v1/categoria", authMiddleware, (req, res, next) =>
  categoriaController.create(req, res, next)
);
routers.patch("/api/v1/categoria/:id", authMiddleware, (req, res, next) =>
  categoriaController.edit(req, res, next)
);
routers.delete("/api/v1/categoria/:id", authMiddleware, (req, res, next) =>
  categoriaController.delete(req, res, next)
);

export default routers;
