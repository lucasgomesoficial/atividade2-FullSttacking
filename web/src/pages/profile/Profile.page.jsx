import { useNavigate } from "react-router";
import { ROUTER_CONFIG } from "../../config/constants";
import { useFindUser } from "../../hook/useFetchUser";

export function Profile() {
  const navigate = useNavigate();
  const user = useFindUser();

  return (
    <main className="h-screen flex flex-col items-center justify-center gap-10">
      <img
        className="rounded-full"
        src={user && user.image}
        alt="icon do usuário"
      />
      <div className="w-1/3 flex text-center flex-col items-center gap-4">
        <h1 className="text-2xl font-medium">{user && user.name}</h1>
        <p className="font-thin">Email: {user && user.email}</p>
      </div>
      <button
        onClick={() => navigate(ROUTER_CONFIG.HOME)}
        className="w-72 h-14 bg-gray-600 rounded-3xl flex items-center justify-center text-white font-medium text-lg"
      >
        Home
      </button>
    </main>
  );
}
