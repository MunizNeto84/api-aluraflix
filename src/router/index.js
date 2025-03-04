import video from "./videoRouter.js";
import categoria from "./categoriaRouter.js";
import user from "./userRouter.js";
import canal from "./canalRouter.js";

const routers = (app) => {
  app.route("/api/v1").get((req, res) => {
    res.status(200).send({ titulo: "Api AluraFlix v1" });
  });
  app.use(video, categoria, user, canal);
};

export default routers;
