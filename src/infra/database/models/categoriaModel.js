import { DataTypes } from "sequelize";
import sequelize from "../config/dbConnect.cjs";

const CategoriaModel = sequelize.define(
  "Categoria",
  {
    titulo: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 80],
      },
    },
    cor: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 500],
      },
    },
  },
  {
    modelName: "Categoria",
    tableName: "categorias",
    timestamps: true,
  }
);

CategoriaModel.associations = (models) => {
  CategoriaModel.hasMany(models.VideoModel, { foreignKey: "categoriaId" });
};

export default CategoriaModel;
