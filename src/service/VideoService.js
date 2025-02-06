import Service from "./Service.js";

class VideoService extends Service {
  constructor() {
    super("VideoModel");
  }

  async searchVideo(where) {
    return super.getAll(where);
  }
}

export default VideoService;
