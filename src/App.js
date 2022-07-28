import React from "react";
import Home from "./container/layout/index";
import { Navigate, useRoutes } from "react-router-dom";
import { RegisterUserForm } from "./components/register/register";
import { Authentication } from "./components/auth/auth";
import { LoginForm } from "./components/login/login";
import { Admin } from "./components/admin/admin";
import { ProtectedRoute } from "./components/protected/protectedRoutes";
import { ROUTES } from "./router/router";

const token = localStorage.getItem("token") || null;
export const routes = [
  { path: `${ROUTES.HOME}`, element: <Home /> },
  { path: `${ROUTES.AUTH}`, element: <Authentication /> },
  {
    path: `${ROUTES.REGISTER}`,
    element: !!token ? (
      <Navigate to={`${ROUTES.ADMIN}`} />
    ) : (
      <RegisterUserForm />
    ),
  },
  {
    path: `${ROUTES.LOGIN}`,
    element: !!token ? <Navigate to={`${ROUTES.ADMIN}`} /> : <LoginForm />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: `${ROUTES.ADMIN}`,
        element: <Admin />,
        children: [
          {
            path: `${ROUTES.ACCOUNT}`,
            element: <p>AccountDetails</p>,
            index: true,
          },
          {
            path: `${ROUTES.ACCOUNT_SETTING}`,
            element: <p>ACCOUNT_SETTING</p>,
          },
          {
            path: `${ROUTES.CHANGE_PASSWORD}`,
            element: <p>CHANGE_PASSWORD</p>,
          },
          { path: `${ROUTES.ORDERS}`, element: <p>Order</p> },
          { path: `${ROUTES.ADDRESS}`, element: <p>ADDRESS</p> },
          { path: `${ROUTES.PAYMENT}`, element: <p>PAYMENT</p> },
          { path: `${ROUTES.HELP_CENTER}`, element: <p>HELP_CENTER</p> },
          { path: `${ROUTES.LEGAL_NOTICE}`, element: <p>LEGAL_NOTICE</p> },
          { path: `${ROUTES.NOTIFICATION}`, element: <p>NOTIFICATION</p> },
          { path: `${ROUTES.WISHLIST}`, element: <p>WishList</p> },
        ],
      },
    ],
  },
];
const App = () => {
  const element = useRoutes(routes);
  return <>{element}</>;
};

export default App;
