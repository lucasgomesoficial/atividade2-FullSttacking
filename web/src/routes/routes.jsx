import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { ROUTER_CONFIG } from "../config/constants";
import { AuthProvider } from "../context/authProvider";
import { ErrorPage, Home, Login, CreatedUser, Profile } from "../pages/index";
import { getFromLocalStorage } from "../utils/localStorage";

function protectedRoute() {
  const { userAuth } = getFromLocalStorage("authESG");

  if (!userAuth.token) {
    return redirect(ROUTER_CONFIG.LOGIN);
  }

  return null;
}

const router = createBrowserRouter([
  {
    path: ROUTER_CONFIG.HOME,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTER_CONFIG.HOME,
        loader: protectedRoute,
        Component: Home,
      },
      {
        path: ROUTER_CONFIG.PROFILE,
        loader: protectedRoute,
        Component: Profile,
      },
      {
        path: ROUTER_CONFIG.CREATE_USER,
        Component: CreatedUser,
      },
      {
        path: ROUTER_CONFIG.LOGIN,
        Component: Login,
      },
    ],
  },
]);

export function Route() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
