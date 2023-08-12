import React from "react";
import { useState } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { PlusButton } from "../PlusButton/PlusButton";
import "./Header.css";
import ModalAddHouse from "../ModalAddHouse/ModalAdd";
import CardForm from "../CardFormReusable/CardForm";

export const Header = ({
  search,
  useSearch,
  valoresParaLosInputs,
  columnas,
  setColumnas,
  funcionAgregadora,
  title,
  plusButtonVisible // Nuevo parámetro
}) => {
  const [modal, setModal] = useState(false);

  const onChange = (e) => {
    setColumnas({
      ...columnas,
      [e.target.name]: e.target.value,
    });
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  console.log(columnas);

  return (
    <div className="Header">
      <SearchBar className="searchBar" value={search} onChange={useSearch} />
      {plusButtonVisible && <PlusButton className="plusButton" onClick={toggleModal}></PlusButton>}
      <ModalAddHouse modal={modal} handleClose={toggleModal} onClick={funcionAgregadora}>
        <CardForm
          onChange={onChange}
          arrayDatosInput={valoresParaLosInputs}
          titulo={title}
        />
      </ModalAddHouse>
    </div>
  );
};
