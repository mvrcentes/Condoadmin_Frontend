import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

// Data
import { getServicesByEquipmentID, addService } from "../../components/FetchData/FetchData"

// View
import AdminView from "../../components/View/AdminView"

// Components
import style from "./ServiceDetails.module.css"
import { Card } from "../../components/Card/Card"
import { Header } from "../../components/Header/Header"

export const ServiceDetails = () => {
    const { id } = useParams()
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    async function fetchData() {
        try {
            const result = await getServicesByEquipmentID(id)
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
    const generateServiceCards = () => {
        if (search == "") {
            return (
                data.map((info) => (
                    <Card key={info.code}>
                        {/* fecha, descripcion, estado, costo */}
                        <h3 className={style.fecha}>{info.fecha}</h3>
                        <p className={style.desc}>{info.descripcion}</p>
                        <p className={style.estado}>Estado: {info.estado}</p>
                        <p className={style.costo}>Costo: {info.costo}</p>
                    </Card>
                )))
        } else {
            const arrayResidentesFiltrados = data.filter(objeto => objeto.fecha.startsWith(search));
            return (
                arrayResidentesFiltrados.map((info) => (
                    <Card key={info.code}>
                        <h3 className={style.fecha}>{info.fecha}</h3>
                        <p className={style.desc}>{info.descripcion}</p>
                        <p className={style.estado}>Estado: {info.estado}</p>
                        <p className={style.costo}>Costo: {info.costo}</p>
                    </Card>
                )))
        }
    }

    //[{"num_casa":1,"cui":"1234567890123","nombre":"Andrés Quezada","telefono":"1234567890","correo":"residente1@example.com","tipo_residente":"Propietario"}]
    const valoresParaLosInputs = [
        // {type: "number", name: "equipo", placeholder: " 12345 ", title: "ID Equipo a mantener"},
        {type: "text", name: "fecha", placeholder: "2023-06-01", title: "Fecha"},
        {type: "text", name: "descripcion", placeholder: " Limpieza de piscina ", title: "Descripción"},
        {type: "text", name: "estado", placeholder: " Completado/Pendiente ", title: "Estado"},
        {type: "number", name: "costo", placeholder: " Q 1000 ", title: "Costo"}, 
    ]

    const [mantenimiento, setMantenimiento] = useState({
        id_equipo: id, 
        fecha: "", 
        descripcion: "",
        estado: "",
        costo: 0
    })

    const agregarMantenimiento = async () => {
        console.log("agregar mantenimiento")

        try {
            const addedResident = await addService(mantenimiento.equipo, mantenimiento.fecha, mantenimiento.descripcion, mantenimiento.estado, mantenimiento.costo);

            console.log(`mantenimiento added successfully: ${JSON.stringify(addedResident)}`);
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
                columnas={mantenimiento}
                setColumnas={setMantenimiento}
                funcionAgregadora={agregarMantenimiento}
                title={"Añadir mantenimiento"}
                plusButtonVisible={true}
                />
            <div className={style.residentsContainer}>
                {generateServiceCards()}
            </div>
        </AdminView>
    )
}
