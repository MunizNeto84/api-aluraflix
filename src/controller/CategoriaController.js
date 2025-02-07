import Controller from "./Controller.js";
import CategoriaService from "../service/CategoriaService.js";
import AppError from "../err/AppError.js";

const categoriaService = new CategoriaService();

class CategoriaController extends Controller {
  constructor() {
    super(categoriaService);
    this.entityName = "Categoria";
  }

  async getAllVideosByID(req, res, next) {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 7;

    let { id } = req.params;
    id = Number(id);

    if (isNaN(id)) {
      return next(new AppError(`O id precisa ser um numero.`, 400));
    }
    try {
      const videos = await categoriaService.getAllVideosById(id, page, limit);
      if (videos.length === 0) {
        return next(
          new AppError(
            `Não encontramos nenhum video com a categoriaId: ${id}.`,
            404
          )
        );
      }
      return res.status(200).json(videos);
    } catch (error) {
      next(error);
    }
  }
}

export default CategoriaController;
