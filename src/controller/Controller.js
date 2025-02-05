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
}

export default Controller;
