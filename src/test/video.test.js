import express from "express";
import request from "supertest";
import VideoController from "../controller/VideoController.js";

const videoController = new VideoController();

const app = express();
app.use(express.json());

app.get("/video", (req, res, next) => videoController.getAll(req, res, next));
app.get("/video/:id", (req, res, next) =>
  videoController.getById(req, res, next)
);
app.post("/video", (req, res, next) => videoController.create(req, res, next));
app.patch("/video/:id", (req, res, next) =>
  videoController.edit(req, res, next)
);
app.delete("/video/:id", (req, res, next) =>
  videoController.delete(req, res, next)
);

let idVideo;

describe("Testes do model Video: ", () => {
  it("POST - Deve criar um video de teste.", async () => {
    const testeVideo = {
      titulo: "Video de teste",
      descricao: "Estou criando um video para meus testes",
      url: "https://youtu.be/testeID",
      categoriaId: "1",
    };
    const res = await request(app).post("/video").send(testeVideo);
    idVideo = res.body.conteudo.id;
    expect(res.status).toBe(201);
  });
});
