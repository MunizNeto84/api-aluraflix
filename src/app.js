import express from "express";
import routers from "./router/index.js";

const app = express();
app.use(express.json());
routers(app);

export default app;
