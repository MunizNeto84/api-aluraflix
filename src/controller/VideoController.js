import Controller from "./Controller.js";
import VideoService from "../service/VideoService.js";
import { Sequelize } from "sequelize";
import AppError from "../err/AppError.js";

const videoService = new VideoService();

class VideoController extends Controller {
  constructor() {
    super(videoService);
    this.entityName = "Video";
  }

  async searchVideo(req, res, next) {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 7;
    try {
      const { search } = req.query;
      const whereSearch = search
        ? {
            [Sequelize.Op.or]: [
              { titulo: { [Sequelize.Op.iLike]: `%${search}%` } },
            ],
          }
        : {};

      const videos = await videoService.searchVideo(whereSearch, page, limit);

      if (videos.length === 0) {
        return next(
          new AppError(
            `Não encontramos nenhum titulo com o termo: ${search}.`,
            404
          )
        );
      }

      return res.status(200).json({
        videos,
      });
    } catch (error) {
      next(error);
    }
  }

  async getFree(req, res, next) {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 7;

    try {
      const freeVideos = await videoService.getFree(page, limit);
      if (!freeVideos) {
        new AppError(`Não encontramos nenhum titulo com o gratuito.`, 404);
      }
      res.json(freeVideos);
    } catch (error) {
      next(error);
    }
  }
}

export default VideoController;
