import { createBrowserRouter, RouterProvider } from "react-router";
import { Layout } from "../Layout/Layout";
import { LoginPage } from "../Pages/Login";
import { PrivateRoute } from "./PrivateRoutes/PrivateRoutes";
import { HomePage } from "../Pages/HomePage";
import { CustomTypography } from "../components/CustomTypography";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/login", element: <LoginPage /> },

      {
        element: <PrivateRoute />,
        children: [
          {
            path: "/home",
            element: <HomePage />,
            // children: [{ path: "/home/:machineId", element: <OrderForm /> }],
          },
        ],
      },

      {
        path: "*",
        element: <CustomTypography variant="h1">404</CustomTypography>,
      },
    ],
  },
]);

const MyRoutes = () => <RouterProvider router={router} />;
export default MyRoutes;
