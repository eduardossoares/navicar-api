import { createAdService } from "../../services/Ads/CreateAdService";
import { Request, Response } from "express";
import { CreateAdRequest } from "../../@types/AdRequest";

import { v2 as cloudinary } from "cloudinary";
import { cloudinaryConfig } from "../../config/cloudinary";

cloudinary.config(cloudinaryConfig);

class CreateAdController {
  async handle(req: Request, res: Response) {
    res.set("Cache-Control", "no-cache");
    const {
      model,
      brand,
      city,
      color,
      description,
      milage,
      phone,
      price,
      year,
    }: CreateAdRequest = req.body;
    const user_id = req.user_id;
    const files = req.files as Express.Multer.File[];

    if (!user_id) {
      throw new Error("Você precisa estar logado para criar um anúncio");
    }

    if (!files || files.length === 0) {
      throw new Error("O upload de uma imagem é obrigatório");
    }

    if (files.length > 5) {
      throw new Error("O upload de no máximo 5 imagens é permitido");
    }

    if (!brand) {
      throw new Error("Marca é obrigatória");
    }

    if (!color) {
      throw new Error("Cor é obrigatória");
    }

    if (!description) {
      throw new Error("Descrição é obrigatória");
    }

    if (!milage) {
      throw new Error("Quilometragem é obrigatória");
    }

    if (!phone) {
      throw new Error("Telefone é obrigatório");
    }

    if (!price) {
      throw new Error("Preço é obrigatório");
    }

    if (!year) {
      throw new Error("Ano é obrigatório");
    }

    if (!brand) {
      throw new Error("Marca é obrigatória");
    }

    if (!city) {
      throw new Error("Cidade é obrigatória");
    }

    if (!model) {
      throw new Error("Modelo é obrigatório");
    }

    try {
      const imageUrls = await Promise.all(
        files.map((file) => {
          return new Promise<string>((resolve, reject) => {
            cloudinary.uploader
              .upload_stream({ resource_type: "image" }, (error, result) => {
                if (error) {
                  reject(new Error("Erro ao fazer upload da imagem!"));
                }
                resolve((result?.secure_url as string) || "");
              })
              .end(file.buffer);
          });
        })
      );

      const ad = await createAdService.execute({
        model,
        brand,
        city,
        color,
        description,
        milage,
        phone,
        price,
        year,
        user_id,
        images: imageUrls,
      });

      res.status(201).json(ad);
    } catch (error: Error | any) {
      console.log(error);
      res.status(500).json({
        message: "Erro ao criar anúncio",
      });
    }
  }
}

const createAdController = new CreateAdController();
export { createAdController };
