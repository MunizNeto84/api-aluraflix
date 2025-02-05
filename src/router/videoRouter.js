import { Router } from "express";
import VideoController from "../controller/VideoController.js";

const videoController = new VideoController();
const routers = Router();

routers.get("/api/v1/video", (req, res) => videoController.getAll(req, res));
routers.get("/api/v1/video/:id", (req, res) =>
  videoController.getById(req, res)
);
routers.post("/api/v1/video", (req, res) => videoController.create(req, res));
routers.patch("/api/v1/video/:id", (req, res) =>
  videoController.edit(req, res)
);
routers.delete("/api/v1/video/:id", (req, res) =>
  videoController.delete(req, res)
);

export default routers;
