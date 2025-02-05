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
}

export default Controller;
