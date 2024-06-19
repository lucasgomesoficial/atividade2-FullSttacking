import { useNavigate } from "react-router";
import { ROUTER_CONFIG } from "../../config/constants";
import { useAuth } from "../../hook/useAuth";

export function Home() {
  const auth = useAuth();
  const navigate = useNavigate();

  return (
    <main className="h-screen flex flex-col items-center justify-center gap-10">
      <img src="/logo.png" alt="icon da home" />
      <div className="w-1/3 flex text-center flex-col items-center gap-4">
        <h1 className="text-2xl font-medium">😊 Bem-vindo(a) {auth.user}!</h1>
        <p className="font-thin">
          Este app foi criado para ajudar você a ser mais sustentável e
          responsável em sua vida pessoal e profissional.
        </p>
      </div>
      <button
        onClick={() => {
          auth.signout(() => navigate(ROUTER_CONFIG.LOGIN));
        }}
        className="w-72 h-14 bg-red-700 rounded-3xl flex items-center justify-center text-white font-medium text-lg"
      >
        Fechar seção
      </button>
    </main>
  );
}