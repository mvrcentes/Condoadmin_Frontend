import React, { useEffect, useState } from "react"

// View
import AdminView from "../../components/View/AdminView"

// Components
import { Card } from "../../components/Card/Card"
import { Header } from "../../components/Header/Header"

// Style
import style from "../../components/Card/Card.module.css"
import { servicesContainer } from "./Services.module.css"

// Data
import { getEquipment, addEquipment } from "../../components/FetchData/FetchData"

export const Services = () => {
    const [services, setServices] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    async function fetchData() {
        try {
            const result = await getEquipment()
            setServices(result)
            setIsLoading(false)
            console.log(services)
        } catch (error) {
            console.error("Error fetching services:", error)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    // Haciendo el search bar funcional, necesitamos obtener el valor que ingresa el usuario, procesarlo y luego filtrar los resultados con la funcion map

    const [search, setSearch] = useState("")

    const useSearch = (e) => {
        setSearch(e.target.value)
        console.log(search)
    }

    //se chequea si el search esta vacio, si lo esta se muestran todas las casas, si no, se filtran las casas que contengan el numero de casa que se esta buscando
    const generateServicesCards = () => {
        if (search == "") {
            return (
                services.map((service, index) => (
                    <Card key={index} to={"services/"+service.id}>
                        <h3 className={style.Code}>{service.nombre}</h3>
                        <p className={style.Direccion}>{service.descripcion}</p>
                        <p className={style.Direccion}>Estado: {service.estado}</p>
                    </Card>
                )))
        } else {
            const arrayServicesFiltradas = services.filter(objeto => (objeto.nombre.toLowerCase().startsWith(search.toLowerCase())));
            return (
                arrayServicesFiltradas.map((service, index) => (
                    <Card key={index} to={"services/"+service.id}>
                        <h3 className={style.Code}>{service.nombre}</h3>
                        <p className={style.Direccion}>{service.descripcion}</p>
                        <p className={style.Direccion}>Estado: {service.estado}</p>
                    </Card>
                )))
        }
    }

    const valoresParaLosInputs = [
        { type: "text", name: "nombre", placeholder: "Bomba de agua", title: "Nombre" },
        { type: "text", name: "descripcion", placeholder: "Modelo XX", title: "Descripción" },
        { type: "text", name: "estado", placeholder: "Activo/Inactivo", title: "Estado" },
        { type: "number", name: "condominio", placeholder: " # 1 ", title: "Condominio" }
    ]

    const [service, setService] = useState({
        nombre: "",
        descripcion: "",
        estado: "",
        condominio: 0,
    })

    const agregarServicio = async () => {
        console.log("agregar service")

        try {
            const addedService = await addEquipment(service.nombre, service.descripcion, service.estado, service.condominio);

            console.log(`Service added successfully: ${JSON.stringify(addedService)}`);
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
                columnas={service}
                setColumnas={setService}
                funcionAgregadora={agregarServicio}
                title={"Añadir servicio"}
            />
            <div className={servicesContainer}>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                generateServicesCards()
            )}
            </div>
        </AdminView>
    )
}
