import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.clear();
    navigate('/')
  };

  return (
    <header className="py-10 bg-indigo-600">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <h1 className="font-bold text-2xl text-indigo-200 text-center">
          Administrador de Pacientes de {""}{" "}
          <span className="text-white font-black"> Veterinaria</span>
        </h1>
        <nav className="flex flex-col items-center lg:flex-row gap-4 mt-5 lg:mt-0">
          <Link to="" className="text-white text-xl uppercase">
            Pacientes{" "}
          </Link>
          <Link to="" className="text-white text-xl uppercase">
            Perfil
          </Link>

          <button
            onClick={handleClick}
            type="button"
            className="text-white text-xl uppercase"
          >
            Cerrar Sesion
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
