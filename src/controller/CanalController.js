import Controller from "./Controller.js";
import CanalService from "../service/CanalService.js";

const canalService = new CanalService();

class CategoriaController extends Controller {
  constructor() {
    super(canalService);
    this.entityName = "Canal";
  }
}

export default CategoriaController;
