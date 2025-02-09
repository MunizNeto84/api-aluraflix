import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import * as dataSource from "../infra/database/models/index.js";
import AppError from "../err/AppError.js";

dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET_KEY;

class UserService {
  constructor() {
    this.UserModel = dataSource["UserModel"];
  }

  async register(nomeCompleto, email, senha) {
    const senhaCriptografada = await bcrypt.hash(senha, 10);
    const novoUsuario = await this.UserModel.create({
      nomeCompleto,
      email,
      senha: senhaCriptografada,
    });
    return {
      id: novoUsuario.id,
      mensagem: "Usuário criado com sucesso.",
    };
  }

  async login(email, senha) {
    const user = await this.UserModel.findOne({
      where: { email },
    });

    if (!user) {
      throw new AppError("Usuário não encontrado.", 404);
    }

    const senhaCorreta = await bcrypt.compare(senha, user.senha);
    if (!senhaCorreta) {
      throw new AppError("Senha inválida.", 403);
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      SECRET_KEY,
      {
        expiresIn: "8h",
      }
    );

    return { token: token };
  }
}

export default new UserService();
