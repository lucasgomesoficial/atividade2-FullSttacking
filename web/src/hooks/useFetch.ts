"use client";

import { useRouter } from "next/navigation";
import React, { useCallback } from "react";
import toast from "react-hot-toast";
import { api } from "../service/api";
import { LoginInputs, Users, FormInputs } from "./types";
import { useCookies } from "react-cookie";

const oneDay = 24 * 60 * 60 * 1000;
const expires = new Date(Date.now() - oneDay);

export const useFetch = () => {
  const [user, setUser] = React.useState<Users>();
  const [isLoading, setIsLoading] = React.useState(false);

  const [cookies, setCookie, removeCookie] = useCookies(["cookieConfig"]);

  const router = useRouter();

  const submitAccess = async ({ email, password }: LoginInputs) => {
    setIsLoading(true);
    try {
      const user = {
        email,
        password,
      };

      const response = await api.post("/login", user);

      setCookie("cookieConfig", response.data.data, { expires });
      toast.success("Olá 👋!");
      setIsLoading(false);
      router.push("/home");
    } catch (err) {
      toast.error("Error ao efetuar o login, tente novamente mais tarde");
      setIsLoading(false);
    }
  };

  const createdUser = async ({
    name,
    email,
    password,
    confirmPassword,
  }: FormInputs) => {
    setIsLoading(true);
    try {
      const user = {
        name,
        email,
        password,
        confirmPassword,
      };

      if(password === confirmPassword) {
        await api.post("/user", user);
  
        toast.success("Usuário criado com sucesso 🧑‍🚀!");
        router.push("/");
      } else {
        toast.error("Senhas não são iguais, tente novamente!");
      }

      setIsLoading(false);
    } catch (err) {
      toast.error("Error ao criar o usuário, tente novamente mais tarde");
      setIsLoading(false);
    }
  };

  const findUser = useCallback(async () => {
    setIsLoading(true);
    try {
      const { cookieConfig: user } = cookies;

      if (user) {
        const response = await api.get(`/user/${user.email}`, {
          headers: {
            token: user.token,
          },
        });

        setUser(response.data);
      }

      setIsLoading(false);
    } catch (err) {
      toast.error(`Algo deu errado. Error: ${err}`);
      setIsLoading(false);
    }
  }, [router, cookies]);

  React.useEffect(() => {
    findUser();
  }, [findUser]);

  return {
    submitAccess,
    user,
    isLoading,
    findUser,
    removeCookie,
    cookies,
    createdUser,
  };
};
