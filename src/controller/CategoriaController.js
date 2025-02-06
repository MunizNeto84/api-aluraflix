import Controller from "./Controller.js";
import CategoriaService from "../service/CategoriaService.js";

const categoriaService = new CategoriaService();

class CategoriaController extends Controller {
  constructor() {
    super(categoriaService);
    this.entityName = "Categoria";
  }
}

export default CategoriaController;
