import { createContext, useCallback, useMemo } from "react";
import { api } from "../service/api";
import {
  clearFromLocalStorage,
  setToLocalStorage,
} from "../utils/localStorage";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const signin = useCallback(async (user, callback) => {
    try {
      const { data } = await api.post("/login", user);

      if (data.data) {
        setToLocalStorage("authESG", data.data);
        callback();
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const signout = useCallback((callback) => {
    clearFromLocalStorage();
    callback();
  }, []);

  const value = useMemo(
    () => ({
      signin,
      signout,
    }),
    [signin, signout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
