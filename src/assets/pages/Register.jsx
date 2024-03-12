import React, { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../components/Alert";

function Register() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repitPassword, setRepitPassword] = useState("");
  const [alert, setAlert] = useState({});

  const handleSubmit = (e) =>{
    e.preventDefault();

    if([nombre, email, password, repitPassword].includes('')){
      setAlert({msg:'Hay campos vacios, es necesario completar todos los campos', error: true})
      return;
    }

    if(password !== repitPassword){
      setAlert({msg:'Las contraseñas no coinciden', error: true})
      return;
    }

    if(password.length < 6){
      setAlert({msg:'La contraseña debe ser mayor a 6 caracteres', error: true})
      return;
    }

    setAlert({})

  }

  const {msg} = alert;

  return (
    <main
      style={{ height: "100vh" }}
      className="container mx-auto md:grid md:grid-cols-2 flex flex-col mt-40 mb-40 md:mb-0 md:mt-0 justify-center items-center gap-20"
    >
      <div>
        <h1 className="text-indigo-600 font-black text-6xl text-center">
          Crea tu cuenta y administra tus{" "}
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
              Nombre
            </label>
            <input
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={nombre}
              placeholder="Nombre"
              type="text"
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label
              className="uppercase text-gray-600 block text-xl font-bold"
              htmlFor=""
            >
              Email
            </label>
            <input
              value={email}
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              placeholder="Email de registro"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label
              className="uppercase text-gray-600 block text-xl font-bold"
              htmlFor=""
            >
              Password
            </label>
            <input
              value={password}
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label
              className="uppercase text-gray-600 block text-xl font-bold"
              htmlFor=""
            >
              Repetir Password
            </label>
            <input
              value={repitPassword}
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              placeholder="Password"
              type="password"
              onChange={(e) => setRepitPassword(e.target.value)}
            />
          </div>
          <input
            value={"Iniciar Sesion"}
            className="bg-indigo-700 w-full rounded-xl py-3 uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto px-10"
            type="submit"
          />
        </form>
        <nav className="mt-5 lg:flex lg:justify-between">
          <Link className="block text-center my-5 text-gray-500" to="/login">
            Ya tienes una cuenta, Iniciar Sesion.
          </Link>
          <Link
            className="block text-center my-5 text-gray-500"
            to="/recoveryPassword/:id"
          >
            Olvide mi contrase;a
          </Link>
        </nav>
      </div>
    </main>
  );
}

export default Register;
