import Service from "./Service.js";

class CategoriaService extends Service {
  constructor() {
    super("CategoriaModel");
    this.videoServices = new Service("VideoModel");
  }
  async getAllVideosById(categoriaId, page, limit) {
    return this.videoServices.getAll({ categoriaId }, page, limit);
  }
}

export default CategoriaService;
