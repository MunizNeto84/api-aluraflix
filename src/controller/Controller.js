import AppError from "../err/AppError.js";

class Controller {
  constructor(entityService, entityName) {
    this.entityService = entityService;
    this.entityName = entityName;
  }

  async getAll(req, res, next) {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 7;
    try {
      const getAll = await this.entityService.getAll({}, page, limit);

      if (!getAll) {
        return next(new AppError(`${this.entityName}s não encontrados(as).`));
      }
      return res.status(200).json({ getAll });
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    let { id } = req.params;
    if (isNaN(id)) {
      return next(new AppError(`O id precisa ser um numero.`, 400));
    }
    try {
      const getById = await this.entityService.getById(Number(id));

      if (!getById) {
        return next(new AppError(`${this.entityName} não encontrado(a).`, 404));
      }

      return res.status(200).json(getById);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    const dados = req.body;

    try {
      const newVideo = await this.entityService.create(dados);

      if (!newVideo) {
        return next(new AppError("Dados inválidos ou incompletos.", 400));
      }

      return res.status(201).json({
        message: `${this.entityName} criado(a) com sucesso.`,
        conteudo: newVideo,
      });
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    let { id } = req.params;
    if (isNaN(id)) {
      return next(new AppError(`O id precisa ser um numero.`, 400));
    }
    const updatedData = req.body;

    try {
      const [updated] = await this.entityService.edit(updatedData, { id });
      if (!updated) {
        return next(new AppError(`${this.entityName} não encontrado(a).`, 404));
      }

      return res.status(200).json({
        message: `${this.entityName} atualizado(a) com sucesso!`,
        conteudo: updated,
      });
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    let { id } = req.params;
    if (isNaN(id)) {
      return next(new AppError(`O id precisa ser um numero.`, 400));
    }

    try {
      const deleted = await this.entityService.delete(Number(id));
      if (!deleted) {
        return next(new AppError(`${this.entityName} não encontrado(a).`, 404));
      } else {
        return res
          .status(200)
          .json({ message: `${this.entityName} deletado(a) com sucesso!` });
      }
    } catch (error) {
      next(error);
    }
  }
}

export default Controller;
