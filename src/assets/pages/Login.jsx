import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../../API/login_RULE";
import Alert from "../components/Alert";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      setAlert({
        msg: "Hay campos vacios, es necesario completar todos los campos",
        error: true,
      });
      return;
    }

    setAlert({});

    const data = {
      password: password,
      email: email,
    };

    try {
      const response = await login(data);

      localStorage.setItem('token', response.token)
      
      navigate('/adminPacientes');
    } catch (error) {
      setAlert({ msg: error, error: true });
    }
  };

  const { msg } = alert;


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
            <div className="my-5">
              <label
                className="uppercase text-gray-600 block text-xl font-bold"
                htmlFor=""
              >
                Password
              </label>
              <input
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                onChange={(e)=> setPassword(e.target.value)}
                value={password}
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
