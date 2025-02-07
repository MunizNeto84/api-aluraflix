import Service from "./Service.js";

class VideoService extends Service {
  constructor() {
    super("VideoModel");
  }

  async searchVideo(where, page, limit) {
    return super.getAll(where, page, limit);
  }
}

export default VideoService;
