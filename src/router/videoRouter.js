import { Router } from "express";
import VideoController from "../controller/VideoController.js";

const videoController = new VideoController();
const routers = Router();

routers.get("/api/v1/video", (req, res, next) =>
  videoController.getAll(req, res, next)
);
routers.get("/api/v1/video", (req, res, next) =>
  videoController.searchVideo(req, res, next)
);
routers.get("/api/v1/video/free", (req, res, next) =>
  videoController.getFree(req, res, next)
);
routers.get("/api/v1/video/:id", (req, res, next) =>
  videoController.getById(req, res, next)
);

routers.post("/api/v1/video", (req, res, next) =>
  videoController.create(req, res, next)
);
routers.patch("/api/v1/video/:id", (req, res, next) =>
  videoController.edit(req, res, next)
);
routers.delete("/api/v1/video/:id", (req, res, next) =>
  videoController.delete(req, res, next)
);

export default routers;
