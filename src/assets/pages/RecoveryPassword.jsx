import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { sendTokenPassword } from "../../../API/validarUser_RULE";
import Alert from "../components/Alert";

function RecoveryPassword() {
  const [alert, setAlert] = useState({});
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
    };

    setAlert({});
    try {
      await sendTokenPassword(data);
      setAlert({ msg: "Correo enviado, porfavor revisa tu casilla", error: false });
    } catch (error) {
      setAlert({ msg: error, error: true });
    }
  };

  const { msg } = alert;

  return (
    <main
      style={{ height: "100vh" }}
      className="container mx-auto md:grid md:grid-cols-2 flex flex-col justify-center items-center gap-20"
    >
 
      <div>
        <h1 className="text-indigo-600 font-black text-6xl text-center">
          Recupera tu contraseña y continua con tus{" "}
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
              Email
            </label>
            <input
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              placeholder="Email de registro"
              onChange={(e)=> setEmail(e.target.value)}
              value={email}
              type="email"
            />
          </div>
          <input
            value={"Enviar Instrucciones"}
            className="bg-indigo-700 w-full rounded-xl py-3 uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto px-10"
            type="submit"
          />
        </form>
        <nav className="mt-5 lg:flex lg:justify-between">
          <Link className="block text-center my-5 text-gray-500" to="/register">
            No tienes una cuenta, registrate
          </Link>
          <Link className="block text-center my-5 text-gray-500" to="/">
            Ya tienes una cuenta, Iniciar Sesion.
          </Link>
        </nav>
      </div>
    </main>
  );
}

export default RecoveryPassword;
