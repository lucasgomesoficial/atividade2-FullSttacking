"use client";

import Link from "next/link";
import { LoginInputs } from "./hooks/types";
import { useFetch } from "./hooks/useFetch";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

export default function Login() {
  const { submitAccess, isLoading } = useFetch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    await submitAccess(data);
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full items-center gap-4"
      >
        <input
          className="w-72 h-12 border border-black rounded-3xl px-4"
          placeholder={
            errors.email ? "Esse campo é obrigatório" : "matilde@org.com.br"
          }
          type="email"
          {...register("email", { required: true })}
        />
        <input
          className="w-72 h-12 border border-black rounded-3xl px-4"
          placeholder={
            errors.password ? "Esse campo é obrigatório" : "Digite sua senha"
          }
          type="password"
          {...register("password", { required: true })}
        />
        <button
          type="submit"
          className="w-72 h-14 bg-purple-700 rounded-3xl flex items-center justify-center text-white font-medium text-lg"
        >
          {isLoading ? '...carregando' : 'Entrar'}
        </button>
        <Link
          href='/form'
          className="w-72 h-14 bg-gray-700 rounded-3xl flex items-center justify-center text-white font-medium text-lg"
        >
          Criar conta
        </Link>
      </form>
    </main>
  );
}
