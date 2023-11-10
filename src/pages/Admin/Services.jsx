import React, { useEffect, useState } from "react"
import AdminView from "../../components/View/AdminView"
import { Card } from "../../components/Card/Card"
import { Header } from "../../components/Header/Header"
import style from "../../components/Card/Card.module.css"
import { servicesContainer } from "./Services.module.css"
import { FaSpinner } from 'react-icons/fa'
import { getEquipment, addEquipment } from "../../components/FetchData/FetchData"

export const Services = () => {
    const [services, setServices] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [search, setSearch] = useState("")
    const [service, setService] = useState({
        nombre: "",
        descripcion: "",
        estado: "",
        condominio: 0,
    })
    const [refreshCount, setRefreshCount] = useState(0) // Nuevo estado para controlar la actualización

    async function fetchData() {
        try {
            const result = await getEquipment()
            setServices(result)
            setIsLoading(false)
        } catch (error) {
            console.error("Error fetching services:", error)
            setIsLoading(false)
        }
    }

    console.log(sessionStorage.getItem("token"))

    useEffect(() => {
        fetchData()
    }, [refreshCount]) // Agregar refreshCount como dependencia

    const useSearch = (e) => {
        setSearch(e.target.value)
    }

    const generateServicesCards = () => {
        if (search === "") {
            return (
                services.map((service, index) => (
                    <Card key={index} to={"services/" + service.id}>
                        <h3 className={style.Code}>{service.nombre}</h3>
                        <p className={style.Direccion}>{service.descripcion}</p>
                        <p className={style.Direccion}>Estado: {service.estado}</p>
                    </Card>
                ))
            )
        } else {
            const arrayServicesFiltradas = services.filter(objeto => (objeto.nombre.toLowerCase().startsWith(search.toLowerCase())))
            return (
                arrayServicesFiltradas.map((service, index) => (
                    <Card key={index} to={"services/" + service.id}>
                        <h3 className={style.Code}>{service.nombre}</h3>
                        <p className={style.Direccion}>{service.descripcion}</p>
                        <p className={style.Direccion}>Estado: {service.estado}</p>
                    </Card>
                ))
            )
        }
    }

    const valoresParaLosInputs = [
        { type: "text", name: "nombre", placeholder: "Bomba de agua", title: "Nombre" },
        { type: "text", name: "descripcion", placeholder: "Modelo XX", title: "Descripción" },
        { type: "text", name: "estado", placeholder: "Activo/Inactivo", title: "Estado" },
        { type: "number", name: "condominio", placeholder: " # 1 ", title: "Condominio" }
    ]

    const agregarServicio = async () => {
        try {
            const addedService = await addEquipment(service.nombre, service.descripcion, service.estado, service.condominio)
            console.log(`Service added successfully: ${JSON.stringify(addedService)}`)
            // Incrementa el contador para forzar la actualización
            setRefreshCount(refreshCount + 1)
        } catch (error) {
            console.error(`Error adding columnas: ${error}`)
        }
    }

    return (
        <AdminView>
            <Header
                search={search}
                useSearch={useSearch}
                valoresParaLosInputs={valoresParaLosInputs}
                columnas={service}
                setColumnas={setService}
                funcionAgregadora={agregarServicio}
                plusButtonVisible={true}
                title={"Añadir servicio"}
            />
            <div className={servicesContainer}>
                {isLoading ? (
                    <div className="flex justify-center items-center h-screen">
                        <FaSpinner className="animate-spin text-blue-500 text-4xl" />
                    </div>
                ) : (
                        generateServicesCards()
                    )}
            </div>
        </AdminView>
    )
}
