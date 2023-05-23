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
import { getServices } from "../../components/FetchData/FetchData"

export const Services = () => {
    const [services, setServices] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    async function fetchData() {
        try {
            const result = await getServices()
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
    return (
        <AdminView>
            <Header/>
            <div className={servicesContainer}>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                services.map((service, index) => (
                    <Card key={index} to={service.id}>
                        <h3 className={style.Code}>{service.nombre}</h3>
                        <p className={style.Direccion}>{service.descripcion}</p>
                        <p className={style.Direccion}>Estado: {service.estado}</p>

                    </Card>
                ))
            )}
            </div>
        </AdminView>
    )
}
