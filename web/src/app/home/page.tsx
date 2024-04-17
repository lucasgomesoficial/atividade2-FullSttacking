"use client";

import { useFetch } from "@/hooks/useFetch";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const router = useRouter();

  const { user, cookies, removeCookie, isLoading } = useFetch();

  const { cookieConfig } = cookies;

  if (!cookieConfig) {
    router.replace("/");
  }

  const logoutSession = () => {
    removeCookie("cookieConfig");
  };

  if (isLoading) return <span>...carregando</span>;

  return (
    <main className="h-screen flex flex-col items-center justify-center gap-10">
      <Image
        src="/logo.png"
        alt="Home image"
        width={305}
        height={305}
        priority
      />
      <div className="w-1/3 flex text-center flex-col items-center gap-4">
        <h1 className="text-2xl font-medium">😊 Bem-vindo(a) {user?.name}!</h1>
        <p className="font-thin">
          Este app foi criado para ajudar você a ser mais sustentável e
          responsável em sua vida pessoal e profissional.
        </p>
      </div>
      <button
        onClick={logoutSession}
        className="w-72 h-14 bg-red-700 rounded-3xl flex items-center justify-center text-white font-medium text-lg"
      >
        Fechar seção
      </button>
    </main>
  );
}
