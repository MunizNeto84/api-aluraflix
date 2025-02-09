import { Router } from "express";
import UserController from "../controller/UserController.js";

const router = Router();

router.post("/registro", (req, res, next) =>
  UserController.register(req, res, next)
);
router.post("/login", (req, res, next) => UserController.login(req, res, next));

export default router;
