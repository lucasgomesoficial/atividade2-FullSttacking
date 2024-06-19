import vine from "@vinejs/vine";
import { IUser } from "../types";

export const userSchema = async (body: IUser) => {
  const bodySchema = vine.object({
    email: vine.string().email(),
    name: vine.string(),
    nickname: vine.string(),
    password: vine.string().confirmed({
      confirmationField: "confirmPassword",
    }),
    description: vine.string().optional(),
    image: vine.string().url({
      require_protocol: true,
      protocols: ["http", "https"],
    }),
    job: vine.string().optional(),
    birthday: vine.date().optional(),
    role: vine.string().in(["USER", "ADMIN"]).optional(),
  });

  const validator = vine.compile(bodySchema);
  const userBody = await validator.validate(body);

  return { userBody };
};

export const loginSchema = async (email: string, password: string) => {
  const bodySchema = vine.object({
    email: vine.string().email(),
    password: vine.string(),
  });

  const body = {
    email,
    password,
  };

  const validator = vine.compile(bodySchema);
  const auth = await validator.validate(body);

  return { auth };
};
