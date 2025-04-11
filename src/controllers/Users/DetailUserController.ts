import { Request, Response } from "express";
import { detailUserService } from "../../services/Users/DetailUserService";

class DetailUserController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id; // Obtido do middleware de autenticação

    const detailUser = await detailUserService.execute(user_id);
    res.json(detailUser);
  }
}

const detailUserController = new DetailUserController();
export { detailUserController };
