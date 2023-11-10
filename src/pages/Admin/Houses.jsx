import React, { useEffect, useState } from "react"
import AdminView from "../../components/View/AdminView"
import { Card } from "../../components/Card/Card"
import { Header } from "../../components/Header/Header"
import style from "../../components/Card/Card.module.css"
import { container } from "./Houses.module.css"
import { FaSpinner } from 'react-icons/fa'
import { getHouses, addHouse } from "../../components/FetchData/FetchData"

export const Houses = () => {
    const [houses, setHouses] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [search, setSearch] = useState("")
    const [house, setHouse] = useState({
        num_casa: 0,
        direccion: "",
        condominio: 0,
        cuota_mensual: 0,
    })
    const [refreshCount, setRefreshCount] = useState(0) // Nuevo estado para controlar la actualización

    async function fetchData() {
        try {
            const result = await getHouses()
            setHouses(result)
            setIsLoading(false)
        } catch (error) {
            console.error("Error fetching houses:", error)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [refreshCount]) // Agregar refreshCount como dependencia

    const useSearch = (e) => {
        setSearch(e.target.value)
    }

    const generateHouseCards = () => {
        if (search === "") {
            return (
                houses.map((house) => (
                    <Card key={house.code} to={"house/" + house.num_casa}>
                        <h3 className={style.Code}>{`Casa # ${house.num_casa}`}</h3>
                        <p className={style.Direccion}>{house.direccion}</p>
                    </Card>
                ))
            )
        } else {
            const arrayCasasFiltradas = houses.filter(objeto => (objeto.num_casa.toString().startsWith(search)))
            return (
                arrayCasasFiltradas.map((house) => (
                    <Card key={house.code} to={"house/" + house.num_casa}>
                        <h3 className={style.Code}>{`Casa # ${house.num_casa}`}</h3>
                        <p className={style.Direccion}>{house.direccion}</p>
                    </Card>
                ))
            )
        }
    }

    const valoresParaLosInputs = [
        { type: "number", name: "num_casa", placeholder: "65789", title: "Num. Casa" },
        { type: "text", name: "direccion", placeholder: "Calle A, 2a avenida", title: "Dirección" },
        { type: "number", name: "cuota_mensual", placeholder: "Q 1000", title: "Cuota Mensual" },
        { type: "number", name: "condominio", placeholder: " # 1 ", title: "Condominio" }
    ]

    const agregarCasa = async () => {
        try {
            const addedHouse = await addHouse(house.num_casa, house.direccion, house.condominio, house.cuota_mensual)
            console.log(`House added successfully: ${JSON.stringify(addedHouse)}`)
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
                columnas={house}
                setColumnas={setHouse}
                funcionAgregadora={agregarCasa}
                title={"Añadir casa"}
                plusButtonVisible={true}
            />
            <div className={container}>
                {isLoading ? (
                    <div className="flex justify-center items-center h-screen">
                        <FaSpinner className="animate-spin text-blue-500 text-4xl" />
                    </div>
                ) : (
                    generateHouseCards()
                )}
            </div>
        </AdminView>
    )
}
