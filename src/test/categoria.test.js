import express from "express";
import request from "supertest";
import CategoriaController from "../controller/CategoriaController.js";

const categoriaController = new CategoriaController();

const app = express();
app.use(express.json());

app.get("/categoria", (req, res, next) =>
  categoriaController.getAll(req, res, next)
);
app.get("/categoria/:id", (req, res, next) =>
  categoriaController.getById(req, res, next)
);
app.get("/categoria/:id/video", (req, res, next) =>
  categoriaController.getAllVideosByID(req, res, next)
);
app.post("/categoria", (req, res, next) =>
  categoriaController.create(req, res, next)
);
app.patch("/categoria/:id", (req, res, next) =>
  categoriaController.edit(req, res, next)
);
app.delete("/categoria/:id", (req, res, next) =>
  categoriaController.delete(req, res, next)
);

const testeCategoria = {
  titulo: "categoria-de-teste",
  cor: "#000000",
};

let testeCriacao;

describe("Testes do model Categoria: ", () => {
  it("GET - Deve retornar todas as categorias", async () => {
    const res = await request(app).get("/categoria");
    expect(res.status).toBe(200);
  });

  it("GET - Deve retornar a categoria livre.", async () => {
    const res = await request(app).get("/categoria/1");
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(1);
    expect(res.body.titulo).toBe("livre");
  });

  it("GET - Deve retornar bad request ao buscar os videos por categoria.", async () => {
    const res = await request(app).get("/categoria/a/video");
    expect(res.status).toBe(400);
  });

  it("POST - Deve criar uma categoria de teste.", async () => {
    testeCriacao = await request(app).post("/categoria").send(testeCategoria);
    expect(testeCriacao.status).toBe(201);
  });
});
