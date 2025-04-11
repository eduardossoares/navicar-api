import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface PayLoad {
  sub: string;
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authToken = req.headers.authorization;
  if (!authToken) {
    res.status(401).json({ message: "Token is missing!" });
    return;
  }

  const token = authToken.split(" ")[1];

  const secretToken = process.env.JWT_SECRET;
  if (!secretToken) {
    throw new Error("Invalid JWT Secret");
  }

  try {
    const { sub } = verify(token, secretToken) as PayLoad;
    req.user_id = sub;
    return next();
  } catch {
    res.status(401).json({
      message: "Invalid token!",
    });
  }
};
