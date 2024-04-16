"use client";

import { api } from "../service/api";
import Image from "next/image";
import Link from "next/link";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTHVjYXMgR29tZXMiLCJpYXQiOjE3MTMyNDgzNDIsImV4cCI6MTcxMzI1MTk0Mn0.V3J_XStNdcJZNpdkWj5xyRGWq8-78r8VJxOnyuJkWjQ";

type User = {
  id: string;
  email: string;
  name: string;
  password: string;
  role: string;
  created_at: string;
  updated_at: string;
};

const getData = async () => {
  const user = {
    name: "Lucas Gomes",
    email: "lucasgomes@gmail.com",
    password: "batatinha",
    confirmPassword: "batatinha",
  };

  console.log(user);

  const response = await api.post("/user", user);

  return response;
};

export default function Login() {
  const sendUser = async () => {
    await getData();
  };

  return (
    <main className="h-screen flex flex-col items-center justify-center gap-10">
      <Image
        src="/group.png"
        alt="Login image"
        width={305}
        height={305}
        priority={false}
      />
      <h1 className="text-2xl font-medium">Acesse sua conta</h1>
      <div className="flex flex-col w-full items-center gap-4">
        <input
          className="w-72 h-12 border border-black rounded-3xl px-4"
          placeholder="E-mail"
        />
        <input
          className="w-72 h-12 border border-black rounded-3xl px-4"
          placeholder="Digite sua senha"
        />
      </div>
      <button onClick={sendUser} type="button">
        cadastrar
      </button>
      <Link
        href="/home"
        className="w-72 h-14 bg-purple-700 rounded-3xl flex items-center justify-center"
      >
        <span className="text-white font-medium text-lg">Entrar</span>
      </Link>
    </main>
  );
}
