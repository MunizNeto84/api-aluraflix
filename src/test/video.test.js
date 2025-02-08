import express from "express";
import request from "supertest";
import VideoController from "../controller/VideoController.js";

const videoController = new VideoController();

const app = express();
app.use(express.json());

app.get("/video", (req, res, next) =>
  videoController.searchVideo(req, res, next)
);
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
      descricao: "Estou criando um video para meus testes.",
      url: "https://youtu.be/testeID",
      categoriaId: "1",
    };
    const res = await request(app).post("/video").send(testeVideo);
    idVideo = res.body.conteudo.id;
    expect(res.status).toBe(201);
  });
  it("GET - Deve retornar todos os videos.", async () => {
    const res = await request(app).get("/video");
    expect(res.status).toBe(200);
  });

  it("GET - Deve retornar o video de teste no resultado da busca.", async () => {
    const res = await request(app).get("/video?search=teste");
    expect(res.status).toBe(200);
    expect(res.body.videos.conteudo[0].titulo).toBe("Video de teste");
  });

  it("GET - Deve retornar o video de teste.", async () => {
    const res = await request(app).get(`/video/${idVideo}`);
    expect(res.status).toBe(200);
    expect(res.body.titulo).toBe("Video de teste");
  });

  it("PACTH - Deve editar o video de teste.", async () => {
    const testeVideoEditado = {
      titulo: "Video de teste editado",
      descricao: "Estou editando o video para meus testes.",
    };
    const res = await request(app)
      .patch(`/video/${idVideo}`)
      .send(testeVideoEditado);
    expect(res.status).toBe(200);
  });

  it("Delete - Deve deletar o video de teste.", async () => {
    const res = await request(app).delete(`/video/${idVideo}`);
    expect(res.status).toBe(200);
  });
});
