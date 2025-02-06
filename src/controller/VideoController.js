import Controller from "./Controller.js";
import VideoService from "../service/VideoService.js";

const videoService = new VideoService();

class VideoController extends Controller {
  constructor() {
    super(videoService);
    this.entityName = "Video";
  }
}

export default VideoController;
