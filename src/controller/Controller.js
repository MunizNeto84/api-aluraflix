class Controller {
  constructor(entityService) {
    this.entityService = entityService;
  }

  async getAll(req, res) {
    try {
      const getAll = await this.entityService.getAll();
      return res.status(200).json(getAll);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: error.message,
      });
    }
  }

  async create(req, res) {
    const dados = req.body;

    try {
      const newVideo = await this.entityService.create(dados);
      return res.status(201).json(newVideo);
    } catch (error) {
      return res.status(500).json({
        erro: error.message,
      });
    }
  }

  async edit(req, res) {
    const { id } = req.params;
    const updatedData = req.body;

    try {
      const [updated] = await this.entityService.edit(updatedData, { id });
      if (updated) {
        return res.status(200).json({
          message: "Registro atualizado com sucesso!",
        });
      } else {
        return res.status(404).json({
          erro: "Registro não encontrado.",
        });
      }
    } catch (error) {
      return res.status(500).json({
        erro: error.message,
      });
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    try {
      const deleted = await this.entityService.delete(Number(id));
      if (deleted) {
        return res.status(200).json({
          message: "Registro delado com sucesso!",
        });
      } else {
        return res.status(404).json({
          erro: "Registro não encontrado",
        });
      }
    } catch (error) {
      return res.status(500).json({
        erro: error.message,
      });
    }
  }
}

export default Controller;
