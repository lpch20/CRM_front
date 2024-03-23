import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Formulario from "../components/Formulario";
import ListadoPacientes from "../components/ListadoPacientes";

function AdministrarPacientes() {
  const navigate = useNavigate();
  const auth = localStorage.getItem("token");
  const [buttonOpen, setButtonOpen] = useState(false);

  const handleButton = () => {
    if (!buttonOpen) {
      setButtonOpen(true);
    } else {
      setButtonOpen(false);
    }
  };

  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main className="flex flex-col md:flex-row lg:pl-10 lg:pr-10">
        <button className="block lg:hidden" onClick={handleButton}>
          NAHSEEEEEEEEEEEEEEEEEEEEEEEEEE
        </button>
        <div
          className={buttonOpen ? "block" : "hidden lg:block md:w-1/2 lg:w-2/5"}
        >
          <Formulario></Formulario>
        </div>
        <div className="md:w-1/2 lg:w-3/5 ">
          <ListadoPacientes></ListadoPacientes>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default AdministrarPacientes;
