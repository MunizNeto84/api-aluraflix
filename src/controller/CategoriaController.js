import Controller from "./Controller.js";
import CategoriaService from "../service/CategoriaService.js";

const categoriaService = new CategoriaService();

class CategoriaController extends Controller {
  constructor() {
    super(categoriaService);
    this.entityName = "Categoria";
  }

  async getAllVideosByID(req, res, next) {
    let { id } = req.params;
    id = Number(id);
    try {
      const videos = await categoriaService.getAllVideosById(id);
      return res.status(200).json(videos);
    } catch (error) {
      next(error);
    }
  }
}

export default CategoriaController;
