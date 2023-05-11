import React, { useEffect, useState } from "react"

// Data
import { getHouses } from "../../components/FetchData/FetchData"

// View
import AdminView from "../../components/View/AdminView"

// Components
import { Card } from "../../components/Card/Card"

// Style
import style from "../../components/Card/Card.module.css"

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

    return (
        <AdminView>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                houses.map((house) => (
                    <Card key={house.code} to={house.num_casa}>
                        <h3 className={style.Code}>{house.num_casa}</h3>
                        <p className={style.Direccion}>{house.direccion}</p>
                    </Card>
                ))
            )}
        </AdminView>
    )
}
