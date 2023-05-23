import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

// Data
import { getResidentsByHouseID, addResident } from "../../components/FetchData/FetchData"

// View
import AdminView from "../../components/View/AdminView"

// Components
import style from "./HouseDetails.module.css"
import { Card } from "../../components/Card/Card"
import { Header } from "../../components/Header/Header"


export const HouseDetails = () => {
    const { id } = useParams()
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    async function fetchData() {
        try {
            const result = await getResidentsByHouseID(id)
            setData(result)
            setIsLoading(false)
        } catch (error) {
            console.error("Error fetching house by id:", error)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(data)

    // Haciendo el search bar funcional, necesitamos obtener el valor que ingresa el usuario, procesarlo y luego filtrar los resultados con la funcion map
    const [search, setSearch] = useState("")
    const useSearch = (e) => {
        setSearch(e.target.value)
        console.log(search)
    }

    //se chequea si el search esta vacio, si lo esta se muestran todas las casas, si no, se filtran las casas que contengan el numero de casa que se esta buscando
    const generateResidentCards = () => {
        if (search == "") {
            return (
                data.map((info) => (
                        <Card key={info.code}>
                            <h3>{info.nombre}</h3>
                            <p>CUI: {info.cui}</p>
                            <p>Tel: {info.telefono}</p>
                            <p>Mail: {info.correo}</p>
                        </Card>
                )))
        } else {
            const arrayResidentesFiltrados = data.filter(objeto => objeto.nombre.toLowerCase().startsWith(search.toLowerCase()));
            return (
                arrayResidentesFiltrados.map((info) => (
                    <Card key={info.code}>
                            <h3>{info.nombre}</h3>
                            <p>CUI: {info.cui}</p>
                            <p>Tel: {info.telefono}</p>
                            <p>Mail: {info.correo}</p>
                        </Card>
                )))
        }
    }

    //[{"num_casa":1,"cui":"1234567890123","nombre":"Andrés Quezada","telefono":"1234567890","correo":"residente1@example.com","tipo_residente":"Propietario"}]
    const valoresParaLosInputs = [
        {type: "number", name: "num_casa", placeholder: "65789", title: "Num. Casa"},
        {type: "text", name: "cui", placeholder: "0000000000000000", title: "CUI"},
        {type: "text", name: "nombre", placeholder: "Nombre Apellido", title: "Nombre y Apellido"},
        {type: "text", name: "telefono", placeholder: " 44444444 ", title: "Telefono"},
        {type: "text", name: "correo", placeholder: " correo@email.com ", title: "Correo"},
        {type: "text", name: "tipo_residente", placeholder: " Propietario - Inquilino ", title: "Propietario/Inquilino"}, 
    ]

    const [residente, setResidente] = useState({
        num_casa: 0,
        cui: "",
        nombre: "",
        telefono: "",
        correo: "",
        tipo_residente: "",
    })

    const agregarResidente = async () => {
        console.log("agregar residente")

        try {
            const addedResident = await addResident(residente.num_casa, residente.cui, residente.nombre, residente.telefono, residente.correo, residente.tipo_residente);

            console.log(`Resident added successfully: ${JSON.stringify(addedResident)}`);
        } catch (error) {
            console.error(`Error adding columnas: ${error}`);
        }

    }

    return (
        <AdminView>
            <Header 
                search={search} 
                useSearch={useSearch} 
                valoresParaLosInputs={valoresParaLosInputs}
                columnas={residente}
                setColumnas={setResidente}
                funcionAgregadora={agregarResidente}
                title={"Añadir residente"}/>
            <div className={style.residentsContainer}>
                {generateResidentCards()}
            </div>
        </AdminView>
    )
}
