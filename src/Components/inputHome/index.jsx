import React from "react";
import { InputHomeWrapper } from "./styles/InputHomeWrapper";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function InputHome({ metodo, codigoRastreio, setCodigoRastreio }) {

  const buscarPacote = async () => {
    //refirect to the page with the code
    window.location.href = "/rastreio/" + codigoRastreio;
  }

  return (
    <InputHomeWrapper>
      <input
        placeholder="Digite seu código de rastreio"
        value={codigoRastreio}
        onChange={(e) => setCodigoRastreio(e.target.value)}
        className="pl-4"
      />
      <button className="cursor-pointer  " onClick={buscarPacote}>
        <FaSearch className="searchIcon mx-auto" />
      </button>
    </InputHomeWrapper>
  );
}
