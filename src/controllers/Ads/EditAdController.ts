import e, { Request, Response } from "express";
import { editAdService } from "../../services/Ads/EditAdService";
import { UpdateAdRequest } from "../../@types/AdRequest";

interface AdItem {
  item: string;
  error: string;
}

const adItems: AdItem[] = [
  {
    item: "brand",
    error: "Marca é obrigatória",
  },
  {
    item: "model",
    error: "Modelo é obrigatório",
  },
  {
    item: "year",
    error: "Ano é obrigatório",
  },
  {
    item: "price",
    error: "Preço é obrigatório",
  },
  {
    item: "description",
    error: "Descrição é obrigatória",
  },
  {
    item: "milage",
    error: "Quilometragem é obrigatória",
  },
  {
    item: "phone",
    error: "Telefone é obrigatório",
  },
  {
    item: "city",
    error: "Cidade é obrigatória",
  },
  {
    item: "color",
    error: "Cor é obrigatória",
  },
];

export class EditAdController {
  async handle(req: Request, res: Response) {
    res.set("Cache-Control", "no-cache");
    const { id } = req.params;
    const {
      brand,
      model,
      year,
      price,
      description,
      milage,
      phone,
      city,
      color,
      images,
    }: UpdateAdRequest = req.body;

    const user_id = req.user_id;

    adItems.map((item) => {
      if (!req.body[item.item]) {
        throw new Error(item.error);
      }
    });

    const ad = await editAdService.execute({
      id,
      user_id,
      brand,
      model,
      year,
      price,
      description,
      milage,
      phone,
      city,
      color,
      images,
    });

    res.status(200).json(ad);
  }
}

const editAdController = new EditAdController();
export { editAdController };
