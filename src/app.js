import express from "express";
import routers from "./router/index.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
app.use(express.json());
routers(app);

app.use(errorHandler);
export default app;
