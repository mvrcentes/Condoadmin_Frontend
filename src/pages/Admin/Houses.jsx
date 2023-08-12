import React, { useEffect, useState } from "react"

// Data
import { getHouses, addHouse } from "../../components/FetchData/FetchData"

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
                    <Card key={house.code} to={"house/"+house.num_casa}>
                        <h3 className={style.Code}>{`Casa # ${house.num_casa}`}</h3>
                        <p className={style.Direccion}>{house.direccion}</p>
                    </Card>
                )))
        } else {
            const arrayCasasFiltradas = houses.filter(objeto => (objeto.num_casa.toString().startsWith(search)))
            return (
                arrayCasasFiltradas.map((house) => (
                    <Card key={house.code} to={"house/"+house.num_casa}>
                        <h3 className={style.Code}>{`Casa # ${house.num_casa}`}</h3>
                        <p className={style.Direccion}>{house.direccion}</p>
                    </Card>
                )))
        }
    }

    const valoresParaLosInputs = [
        { type: "number", name: "num_casa", placeholder: "65789", title: "Num. Casa" },
        { type: "text", name: "direccion", placeholder: "Calle A, 2a avenida", title: "Dirección" },
        { type: "number", name: "cuota_mensual", placeholder: "Q 1000", title: "Cuota Mensual" },
        { type: "number", name: "condominio", placeholder: " # 1 ", title: "Condominio" }
    ]

    const [house, setHouse] = useState({
        num_casa: 0,
        direccion: "",
        condominio: 0,
        cuota_mensual: 0,
    })

    const agregarCasa = async () => {
        console.log("agregar doctor")

        try {
            const addedDoctor = await addHouse(house.num_casa, house.direccion, house.condominio, house.cuota_mensual);

            console.log(`House added successfully: ${JSON.stringify(addedDoctor)}`);
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
                columnas={house}
                setColumnas={setHouse}
                funcionAgregadora={agregarCasa}
                title={"Añadir casa"}
                plusButtonVisible={true}
            />
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
