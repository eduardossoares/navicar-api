import { UserRequest } from "../../@types/UserRequest";
import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

class SignInUserService {
  async execute({ email, password }: UserRequest) {
    const credentialError = "Invalid credentials";

    // Verificando se o usuário existe
    const alreadyUserExists = await prismaClient.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!alreadyUserExists) {
      throw new Error(credentialError);
    }

    // Verificando se a senha está correta
    const passwordMatch = await compare(password, alreadyUserExists.password);
    if (!passwordMatch) {
      throw new Error(credentialError);
    }

    // Se tudo estiver correto, geramos o token
    const secretToken = process.env.JWT_SECRET;
    if (!secretToken) {
      throw new Error("JWT Secret not found");
    }

    const token = sign(
      {
        email: alreadyUserExists.email,
      },
      secretToken,
      {
        subject: alreadyUserExists.id,
        expiresIn: "30d",
      }
    );

    return {
      id: alreadyUserExists.id,
      email: alreadyUserExists.email,
      token: token,
    };
  }
}

const signInUserService = new SignInUserService();
export { signInUserService };
