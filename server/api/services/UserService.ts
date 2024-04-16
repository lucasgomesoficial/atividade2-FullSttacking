import { prismaClient } from "../prisma";
import { IUser } from "../types";
import { createdHashPassword } from "../utils/bcrypt";

export class FindUserService {
  async execute(email: string) {
    return await prismaClient.user.findUnique({
      where: { email },
    });
  }
}

export class CreateUserService {
  async execute({ email, name, password, role }: IUser) {
    const user = {
      email,
      name,
      password: await createdHashPassword(password),
      role: role ?? "USER",
    };

    await prismaClient.user.create({
      data: user,
    });
  }
}

export class EditUserService {
  async execute(userEmail: string, user: IUser) {
    const newUser = {
      email: user.email,
      name: user.name,
      password: await createdHashPassword(user.password),
      role: user.role ?? "USER",
      updated_at: new Date(),
    };

    await prismaClient.user.update({
      where: {
        email: userEmail,
      },
      data: newUser,
    });
  }
}

export class DeleteUserService {
  async execute(email: string) {
    await prismaClient.user.delete({
      where: {
        email,
      },
    });
  }
}
