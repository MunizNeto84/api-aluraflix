import { DataTypes } from "sequelize";
import sequelize from "../config/dbConnect.cjs";
import CategoriaModel from "./categoriaModel.js";
import CanalModel from "./canalModel.js";
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
    url: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
    categoriaId: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      references: {
        model: CategoriaModel,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    canalId: {
      type: DataTypes.INTEGER,
      references: {
        model: CanalModel,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  },
  {
    modelName: "Video",
    tableName: "videos",
    timestamps: true,
  }
);

VideoModel.associations = (models) => {
  VideoModel.belongsTo(models.CategoriaModel, { foreignKey: "categoriaId" });
  VideoModel.belongsTo(models.CanalModel, { foreignKey: "canalId" });
};

export default VideoModel;
