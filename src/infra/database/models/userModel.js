import { DataTypes } from "sequelize";
import sequelize from "../config/dbConnect.cjs";

const UserModel = sequelize.define(
  "User",
  {
    nomeCompleto: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 70],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 245],
      },
    },
  },
  {
    modelName: "User",
    tableName: "users",
    timestamps: true,
  }
);

export default UserModel;
