import React, { useEffect, useState } from "react";
import { useParams, Link, Await } from "react-router-dom";
import Alert from "../components/Alert";
import {confirmar} from "../../../API/validarUser_RULE";

function ConfirmAccount() {
  const [alert, setAlert] = useState({});
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
  const [cargando, setCargando] = useState(true);
  const params = useParams();

  useEffect(() => {
    const handleSubmit = async () => {
      const token = params.id;
  
      try {
        const tokenOfServer = await confirmar(token);
        setCuentaConfirmada(true);
        setAlert({ msg: "Cuenta confirmada correctamente", error: false });
      } catch (error) {
        setCuentaConfirmada(false);
        setAlert({ msg: error, error: true });
      } finally {
        setCargando(false); // Esto asegura que el estado de carga se actualice independientemente del resultado
      };
    };
  
    handleSubmit();
  }, []);
  

  return (
    <main
      style={{ height: "100vh" }}
      className="container mx-auto md:grid md:grid-cols-2 flex flex-col  md:mb-0 md:mt-0 justify-center items-center gap-20"
    >
      <div>
        <h1 className="text-indigo-600 font-black text-6xl text-center">
          Confirma tu cuenta y administra tus{" "}
          <span className="text-black">pacientes</span>{" "}
        </h1>
      </div>
      <div className="shadow-lg px-5 py-10 rounded-xl bg-white">
        {!cargando && <Alert alert={alert}></Alert>}
      </div>
    </main>
  );
}

export default ConfirmAccount;
