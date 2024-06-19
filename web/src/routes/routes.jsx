import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { ROUTER_CONFIG } from "../config/constants";
import { AuthProvider } from "../context/authProvider";
import { ErrorPage, Home, Login } from "../pages/index";
import { fakeAuthProvider } from "../auth/auth";

function protectedRoute() {
  if (!fakeAuthProvider.isAuthenticated) {
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
