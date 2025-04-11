import prismaClient from "../../prisma";
import { hash } from "bcryptjs";
import { UserRequest } from "../../@types/UserRequest";

class CreateUserService {
  async execute({ email, password }: UserRequest) {
    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    const userAlreadyExists = await prismaClient.user.findUnique({
      where: {
        email: email,
      },
    });

    if (userAlreadyExists) {
      throw new Error("Email already registered");
    }

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        email: email,
        password: passwordHash,
      },
      select: {
        id: true,
        email: true,
        createdAt: true,
      },
    });

    return user;
  }
}

const createUserService = new CreateUserService();
export { createUserService };
