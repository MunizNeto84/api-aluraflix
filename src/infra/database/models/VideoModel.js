import { DataTypes } from "sequelize";
import sequelize from "../config/dbConnect.js";

const VideoModel = sequelize.define(
  "Video",
  {
    titulo: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 80],
      },
    },
    descricao: {
      type: DataTypes.STRING,
      validate: {
        len: [10, 500],
      },
    },
    codigoUrl: {
      type: DataTypes.STRING,
    },
  },
  {
    modelName: "Video",
    tableName: "videos",
    timestamps: true,
  }
);

export default VideoModel;
