import React from "react";

function Formulario() {
  return (
    <>
      <p className="text-lg text-center mb-5 pt-20">
        Añade tu pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form action="" className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-md">
        <div className="flex flex-col p-10">
          <label
            htmlFor="mascota"
            className="text-heay-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
          />
        </div>

        <div className="flex flex-col p-10 pt-0">
          <label
            htmlFor="propietario"
            className="text-heay-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="propietario"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
          />
        </div>

        <div className="flex flex-col p-10 pt-0">
          <label htmlFor="email" className="text-heay-700 uppercase font-bold">
            Nombre Mascota
          </label>
          <input
            id="email"
            placeholder="Email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email"
          />
        </div>

        <div className="flex flex-col p-10 pt-0">
          <label
            htmlFor="fecha_de_alta"
            className="text-heay-700 uppercase font-bold"
          >
            Fecha Alta
          </label>
          <input
            id="fecha"
            placeholder="Fecha de Alta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date"
          />
        </div>
        <div className="flex flex-col p-10 pt-0">
          <label
            htmlFor="sintomas"
            className="text-heay-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            placeholder="Coloca aqui los Sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type=""
          />
        </div>
        <div className="flex flex-col p-10 pt-0">
          <input
            type="
        submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors text-center rounded-md"
            value={"Agregar Paciente"}
          />
        </div>
      </form>
    </>
  );
}

export default Formulario;
