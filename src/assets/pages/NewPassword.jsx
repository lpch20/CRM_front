import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { recoveryPassword } from "../../../API/validarUser_RULE";
import Alert from "../components/Alert";

export default function NewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const params = useParams();
  const [alert, setAlert] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([password, confirmPassword].includes("")) {
      setAlert({
        msg: "Hay campos vacios, es necesario completar todos los campos",
        error: true,
      });
      return;
    }

    if (password !== confirmPassword) {
      setAlert({ msg: "Las contraseñas no coinciden", error: true });
      return;
    }

    if (password.length < 6) {
      setAlert({
        msg: "La contraseña debe ser mayor a 6 caracteres",
        error: true,
      });
      return;
    }

    setAlert({});

    const data = {
      password: password,
    };

    const token = params.token;

    console.log(token)

    try {
      await recoveryPassword(token, data);
      setAlert({
        msg: "Contraseña cambiada correctamente, ya puedes loguearte nuevamente",
        error: false,
      });
    } catch (error) {
        setAlert({ msg: error.toString(), error: true });
    }
  };

  const { msg } = alert;

  return (
    <>
      <main
        style={{ height: "100vh" }}
        className="container mx-auto md:grid md:grid-cols-2 flex flex-col justify-center items-center gap-20"
      >
        
        <div>
          <h1 className="text-indigo-600 font-black text-6xl text-center">
            Inicia sesion y administra tus{" "}
            <span className="text-black">pacientes</span>{" "}
          </h1>
        </div>
        <div className="shadow-lg px-5 py-10 rounded-xl bg-white">
        {msg && <Alert alert={alert}></Alert>}
          <form onSubmit={handleSubmit}>
            <div className="my-5">
              <label
                className="uppercase text-gray-600 block text-xl font-bold"
                htmlFor=""
              >
                Password
              </label>
              <input
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </div>
            <div className="my-5">
              <label
                className="uppercase text-gray-600 block text-xl font-bold"
                htmlFor=""
              >
                Confirmar Password
              </label>
              <input
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                placeholder="Confirmar Password"
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
            </div>
            <input
              value={"Cambiar contraseña"}
              className="bg-indigo-700 w-full rounded-xl py-3 uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto px-10"
              type="submit"
            />
          </form>
          <nav className="mt-5 lg:flex lg:justify-between">
            <Link
              className="block text-center my-5 text-gray-500"
              to="/register"
            >
              No tienes una cuenta, registrate
            </Link>
            <Link className="block text-center my-5 text-gray-500" to="/">
              Iniciar Sesion
            </Link>
          </nav>
        </div>
      </main>
    </>
  );
}
