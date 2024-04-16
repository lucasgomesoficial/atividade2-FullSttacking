export interface IUser {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
  role?: "USER" | "ADMIN" | undefined;
}
