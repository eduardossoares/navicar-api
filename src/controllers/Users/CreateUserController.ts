import { Request, Response } from "express";
import { createUserService } from "../../services/Users/CreateUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await createUserService.execute({ email, password });
    res.json(user);
  }
}

export const createUserController = new CreateUserController();
