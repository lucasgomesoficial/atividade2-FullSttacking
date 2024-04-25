"use client";

import Link from "next/link";
import { FormInputs } from "../hooks/types";
import { useFetch } from "../hooks/useFetch";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

export default function Form() {
  const { createdUser, isLoading } = useFetch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    await createdUser(data);
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
      <h1 className="text-2xl font-medium">Crie sua conta</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full items-center gap-4"
      >
        <input
          className="w-72 h-12 border border-black rounded-3xl px-4"
          placeholder={
            errors.name ? "Esse campo é obrigatório" : "Matilde Doe"
          }
          type="text"
          {...register("name", { required: true })}
        />
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
        <input
          className="w-72 h-12 border border-black rounded-3xl px-4"
          placeholder={
            errors.confirmPassword ? "Esse campo é obrigatório" : "Confirme sua senha"
          }
          type="password"
          {...register("confirmPassword", { required: true })}
        />
        <button
          type="submit"
          className="w-72 h-14 bg-purple-700 rounded-3xl flex items-center justify-center text-white font-medium text-lg"
        >
          {isLoading ? '...carregando' : 'Criar conta'}
        </button>
        <Link
          href='/'
          className="w-72 h-14 bg-gray-700 rounded-3xl flex items-center justify-center text-white font-medium text-lg"
        >
          Voltar
        </Link>
      </form>
    </main>
  );
}
