export interface IUser {
  email: string;
  name: string;
  nickname: string;
  password: string;
  description?: string;
  image: string;
  job?: string;
  birthday?: Date;
  role?: "USER" | "ADMIN";
}
