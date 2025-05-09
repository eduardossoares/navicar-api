import { Request, Response } from "express";
import { removeAdService } from "../../services/Ads/RemoveAdService";

class RemoveAdController {
  async handle(req: Request, res: Response) {
    res.set("Cache-Control", "no-cache");
    const user_id = req.user_id;
    if (!user_id) throw new Error("Usuário não encontrado");
    const { id } = req.params;
    if (!id) throw new Error("ID do anúncio não encontrado");
    await removeAdService.execute({ id, user_id });
    res.status(200).json({
      message: "Anúncio removido com sucesso",
    });
  }
}

const removeAdController = new RemoveAdController();
export { removeAdController };
