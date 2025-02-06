import Service from "./Service.js";

class CategoriaService extends Service {
  constructor() {
    super("CategoriaModel");
    this.videoServices = new Service("VideoModel");
  }
  async getAllVideosById(categoriaId) {
    return this.videoServices.getAll({ categoriaId });
  }
}

export default CategoriaService;
