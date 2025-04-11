import { Request, Response } from "express";
import { signInUserService } from "../../services/Users/SignInUserService";

class SignInUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await signInUserService.execute({ email, password });
    res.status(200).json(user);
  }
}

const signInUserController = new SignInUserController();
export { signInUserController };
