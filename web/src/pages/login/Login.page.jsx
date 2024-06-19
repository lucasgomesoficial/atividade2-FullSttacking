import { useForm } from "react-hook-form";
import { useAuth } from "../../hook/useAuth";
import { useNavigate } from "react-router";
import { ROUTER_CONFIG } from "../../config/constants";

export function Login() {
  const auth = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ email }) => {
    console.log("passou");
    auth.signin(email, () => {
      navigate(ROUTER_CONFIG.HOME, { replace: true });
    });
  };

  return (
    <main className="h-screen flex flex-col items-center justify-center gap-10">
      <img src="/group.png" alt="icon do login" />
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
          Entrar
        </button>
      </form>
    </main>
  );
}
