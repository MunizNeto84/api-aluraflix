import video from "./videoRouter.js";

const routers = (app) => {
  app.route("/api/v1").get((req, res) => {
    res.status(200).send({ titulo: "Api AluraFlix v1" });
  });
  app.use(video);
};

export default routers;
