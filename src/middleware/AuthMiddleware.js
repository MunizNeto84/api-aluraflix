import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import AppError from "../err/AppError.js";

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET_KEY;

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return next(new AppError(`Token não forncecido.`, 403));
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return next(new AppError(`Token inválido ou expirado.`, 401));
  }
};

export default authMiddleware;
