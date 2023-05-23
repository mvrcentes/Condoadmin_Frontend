import React, { useEffect, useState } from "react"

// Data
import { getHouses } from "../../components/FetchData/FetchData"

// View
import AdminView from "../../components/View/AdminView"

// Components
import { Card } from "../../components/Card/Card"
import { Header } from "../../components/Header/Header"

// Style
import style from "../../components/Card/Card.module.css"
import { container } from "./Houses.module.css"

export const Houses = () => {
    const [houses, setHouses] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    async function fetchData() {
        try {
            const result = await getHouses()
            setHouses(result)
            console.log("error", result)
            setIsLoading(false)
        } catch (error) {
            console.error("Error fetching houses:", error)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(houses)

    // Haciendo el search bar funcional, necesitamos obtener el valor que ingresa el usuario, procesarlo y luego filtrar los resultados con la funcion map

    const [search, setSearch] = useState("")

    const useSearch = (e) => {
        setSearch(e.target.value)
        console.log(search)
    }

    //se chequea si el search esta vacio, si lo esta se muestran todas las casas, si no, se filtran las casas que contengan el numero de casa que se esta buscando
    const generateHouseCards = () => {
        if (search == "") {
            return (
                houses.map((house) => (
                <Card key={house.code} to={house.num_casa}>
                    <h3 className={style.Code}>{house.num_casa}</h3>
                    <p className={style.Direccion}>{house.direccion}</p>
                </Card>
            )))
        } else {
            const arrayCasasFiltradas = houses.filter(objeto => (objeto.num_casa.toString().startsWith(search)))
            return (
                arrayCasasFiltradas.map((house) => (
                <Card key={house.code} to={house.num_casa}>
                    <h3 className={style.Code}>{house.num_casa}</h3>
                    <p className={style.Direccion}>{house.direccion}</p>
                </Card>
            )))
        }        
    }

    return (
        <AdminView>
            <Header search={search} useSearch={useSearch}/>
            <div className={container}>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    generateHouseCards()
                )}
            </div>
        </AdminView>
    )
}
