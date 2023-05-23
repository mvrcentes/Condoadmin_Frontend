import React from "react"
import { useState } from "react"
import { SearchBar } from "../SearchBar/SearchBar"
import { PlusButton } from "../PlusButton/PlusButton"
import "./Header.css"
import ModalAddHouse from "../ModalAddHouse/ModalAddHouse"
import CardForm from "../CardFormReusable/CardForm"
import { addHouse } from "../FetchData/FetchData"


export const Header = ( {search, useSearch} ) => {
    const valoresParaLosInputs = [
        {type: "number", name: "num_casa", placeholder: "65789", title: "Num. Casa"},
        {type: "text", name: "direccion", placeholder: "Calle A, 2a avenida", title: "Dirección"},
        {type: "number", name: "cuota_mensual", placeholder: "Q 1000", title: "Cuota Mensual"},
        {type: "number", name: "condominio", placeholder: " # 1 ", title: "Condominio"}
    ]

    const [modal, setModal] = useState(false)
    const [house, setHouse] = useState({
        num_casa: 0,
        direccion: "",
        condominio: 0,
        cuota_mensual: 0,
    })

    const onChange = (e) => {
        setHouse({
            ...house,
            [e.target.name]: e.target.value,
        })
    }

    const toggleModal = () => {
        setModal(!modal)
    }

    const agregarCasa = async () => {
        console.log("agregar doctor")

        try {
            const addedDoctor = await addHouse(house.num_casa, house.direccion, house.condominio, house.cuota_mensual);

            console.log(`House added successfully: ${JSON.stringify(addedDoctor)}`);
          } catch (error) {
            console.error(`Error adding house: ${error}`);
          }

    }
    
    return (
        <div className="Header">
            <SearchBar className="searchBar" value={search} onChange={useSearch} />
            <PlusButton className="plusButton" onClick={toggleModal}></PlusButton>
            <ModalAddHouse modal={modal} handleClose={toggleModal} onClick={agregarCasa}>
                <CardForm 
                    onChange={onChange} 
                    arrayDatosInput={valoresParaLosInputs}
                    titulo={"Añadir Casa"}
                />
            </ModalAddHouse>
        </div>
    )
}

