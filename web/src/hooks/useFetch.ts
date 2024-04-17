import { useRouter } from "next/navigation";
import React, { useCallback } from "react";
import toast from "react-hot-toast";
import { api } from "../service/api";
import { Inputs, Users } from "./types";
import { useCookies } from "react-cookie";

const oneDay = 24 * 60 * 60 * 1000;
const expires = new Date(Date.now() - oneDay);

export const useFetch = () => {
  const [user, setUser] = React.useState<Users>();
  const [isLoading, setIsLoading] = React.useState(false);

  const [cookies, setCookie, removeCookie] = useCookies(["cookieConfig"]);

  const router = useRouter();

  const submitAccess = async ({ email, password }: Inputs) => {
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

  const findUser = useCallback(async () => {
    setIsLoading(true);
    try {
      const { cookieConfig: user } = cookies;

      if (user) {
        const response = await api.get(`/user/${user.emailUser}`, {
          headers: {
            token: user.token,
          },
        });

        setUser(response.data);
      } else {
        router.push("/");
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
  };
};
