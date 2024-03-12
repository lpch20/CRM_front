import React from "react";
import { Link } from "react-router-dom";

function Login() {
  


  return (
    <>
      <main style={{height: '100vh'}} className="container mx-auto md:grid md:grid-cols-2 flex flex-col justify-center items-center gap-20">
        <div>
          <h1 className="text-indigo-600 font-black text-6xl text-center">
            Inicia sesion y administra tus{" "}
            <span className="text-black">pacientes</span>{" "}
          </h1>
        </div>
        <div className="shadow-lg px-5 py-10 rounded-xl bg-white">
          <form>
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
                type="email"
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
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                placeholder="Password"
                type="password"
              />
            </div>
            <input
              value={"Iniciar Sesion"}
              className="bg-indigo-700 w-full rounded-xl py-3 uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto px-10"
              type="submit"
            />
          </form>
          <nav className="mt-5 lg:flex lg:justify-between">
            <Link className="block text-center my-5 text-gray-500" to="/register">No tienes una cuenta, registrate</Link>
            <Link className="block text-center my-5 text-gray-500" to="/recoveryPassword/:id">Olvide mi contrase;a</Link>
          </nav>
        </div>
      </main>
    </>
  );
}

export default Login;
