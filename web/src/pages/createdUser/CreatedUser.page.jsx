import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { ROUTER_CONFIG } from "../../config/constants";
import { useCreatedUser } from "../../hook/useFetchUser";

export function CreatedUser() {
  const navigate = useNavigate();
  const createdUser = useCreatedUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createdUser(data, () => {
      navigate(ROUTER_CONFIG.LOGIN, { replace: true });
    });
  };

  return (
    <main className="h-screen flex flex-col items-center justify-center gap-10">
      <img src="/group.png" alt="icon do login" />
      <h1 className="text-2xl font-medium">Crie sua conta</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full items-center gap-4"
      >
        <input
          className="w-72 h-12 border border-black rounded-3xl px-4"
          placeholder={
            errors.name ? "Esse campo é obrigatório" : "Matilde Jon Doe"
          }
          type="text"
          {...register("name", { required: true })}
        />
        <input
          className="w-72 h-12 border border-black rounded-3xl px-4"
          placeholder={errors.nickname ? "Esse campo é obrigatório" : "Matilde"}
          type="text"
          {...register("nickname", { required: true })}
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
            errors.confirmPassword
              ? "Esse campo é obrigatório"
              : "Confirme a senha"
          }
          type="password"
          {...register("confirmPassword", { required: true })}
        />
        <input
          className="w-72 h-12 border border-black rounded-3xl px-4"
          placeholder={
            errors.image
              ? "Esse campo é obrigatório"
              : "https://avatar.com/image.png"
          }
          type="text"
          {...register("image", { required: true })}
        />
        <button
          type="submit"
          className="w-72 h-14 bg-purple-700 rounded-3xl flex items-center justify-center text-white font-medium text-lg"
        >
          Criar Conta
        </button>
        <button
          onClick={() => navigate(ROUTER_CONFIG.LOGIN)}
          className="w-72 h-14 bg-gray-600 rounded-3xl flex items-center justify-center text-white font-medium text-lg"
        >
          voltar
        </button>
      </form>
    </main>
  );
}
