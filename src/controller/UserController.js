import UserService from "../service/UserService.js";
import AppError from "../err/AppError.js";

class UserController {
  async register(req, res, next) {
    const { nomeCompleto, email, senha } = req.body;
    try {
      const newUser = await UserService.register(nomeCompleto, email, senha);
      if (!newUser) {
        return next(new AppError("Erro ao criar usuário.", 400));
      }
      return res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    const { email, senha } = req.body;
    try {
      const login = await UserService.login(email, senha);
      if (!login) {
        return next(new AppError("Erro ao realizar login.", 400));
      }
      return res.status(200).json(login);
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
