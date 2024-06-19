import React, {
  createContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from 'react';
import api from '../Services/api';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);
  const [user, setUser] = useState(null);

  const signin = useCallback(async (access, callback) => {
    try {
      const { data } = await api.post('/login', access);

      if (data.data) {
        setAuth(data.data);
        callback();
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const findUser = useCallback(async () => {
    try {
      const { data } = await api.get(`/user/${auth && auth.email}`, {
        headers: { token: auth && auth.token },
      });

      setUser(data);
    } catch (error) {
      console.log(error);
    }
  }, [auth]);

  const createdUser = useCallback(async (newUser, callback) => {
    try {
      const { data } = await api.post('/user', newUser);

      if (data.statusCode === 201) {
        alert('Usuário criado com sucesso!');
        callback();
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const signout = useCallback((callback) => {
    setAuth(null);
    callback();
  }, []);

  useEffect(() => {
    findUser();
  }, [findUser]);

  const value = useMemo(
    () => ({
      user,
      createdUser,
      signin,
      signout,
    }),
    [signin, signout, user, createdUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
