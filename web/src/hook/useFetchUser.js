import { useCallback, useEffect, useState } from "react";
import { api } from "../service/api";
import { getFromLocalStorage } from "../utils/localStorage";

export function useFindUser() {
  const [user, setUser] = useState(null);
  const { userAuth } = getFromLocalStorage("authESG");

  const findUser = useCallback(async () => {
    try {
      const { data } = await api.get(`/user/${userAuth.email}`, {
        headers: { token: userAuth.token },
      });

      setUser(data);
    } catch (error) {
      console.log(error);
    }
  }, [userAuth.email, userAuth.token]);

  useEffect(() => {
    findUser();
  }, [findUser]);

  return user;
}

export function useCreatedUser() {
  const createdUser = useCallback(async (newUser, callback) => {
    try {
      const { data } = await api.post("/user", newUser);

      if (data.statusCode === 201) {
        alert("Usuário criado com sucesso!");
        callback();
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return createdUser;
}
