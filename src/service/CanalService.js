import Service from "./Service.js";

class CanalService extends Service {
  constructor() {
    super("CanalModel");
    this.videoServices = new Service("VideoModel");
  }

  async getAllVideosById(canalId, page, limit) {
    return this.videoServices.getAll({ canalId }, page, limit);
  }
}

export default CanalService;
