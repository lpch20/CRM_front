import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Register from './assets/pages/Register'
import ConfirmAccount from './assets/pages/ConfirmAccount'
import Login from './assets/pages/Login'
import RecoveryPassword from './assets/pages/RecoveryPassword'
import NewPassword from "./assets/pages/NewPassword";
import AdministrarPacientes from "./assets/pages/AdministrarPacientes";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/confirm_account/:id",
    element: <ConfirmAccount></ConfirmAccount>,
  },
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/recoveryPassword",
    element: <RecoveryPassword></RecoveryPassword>
  },
  {
    path: "/newPassword/:token",
    element: <NewPassword></NewPassword>
  },
  {
    path: "/adminPacientes",
    element: <AdministrarPacientes></AdministrarPacientes>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);