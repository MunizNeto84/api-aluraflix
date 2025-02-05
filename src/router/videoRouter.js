import { Router } from "express";
import VideoController from "../controller/VideoController.js";

const videoController = new VideoController();
const routers = Router();

routers.get("/api/v1/video", (req, res) => videoController.getAll(req, res));

export default routers;
