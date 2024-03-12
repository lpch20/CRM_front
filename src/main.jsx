import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './assets/pages/Home'
import Register from './assets/pages/Register'
import ConfirmAccount from './assets/pages/ConfirmAccount'
import Login from './assets/pages/Login'
import RecoveryPassword from './assets/pages/RecoveryPassword'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/confirm_account",
    element: <ConfirmAccount></ConfirmAccount>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/recoveryPassword/:id",
    element: <RecoveryPassword></RecoveryPassword>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);