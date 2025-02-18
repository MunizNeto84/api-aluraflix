import { DataTypes } from "sequelize";
import sequelize from "../config/dbConnect.cjs";

const CanalModel = sequelize.define(
  "Canal",
  {
    nickName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 25],
      },
    },
    urlLogo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
    urlCapa: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
    urlPerfil: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
    urlCarrossel: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
    views: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
      },
    },
  },
  {
    modelName: "Canal",
    tableName: "canais",
    timestamps: true,
  }
);

export default CanalModel;
