import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

// Data
import { getHouseByID } from "../../components/FetchData/FetchData"

// View
import AdminView from "../../components/View/AdminView"

// Components
import { Card } from "../../components/Card/Card"

export const HouseDetails = () => {
    const { id } = useParams()
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    async function fetchData() {
        try {
            const result = await getHouseByID(id)
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

    return (
        <AdminView>
            {data.map((info) => {
                return (
                    <Card key={info.code}>
                        <h3>{info.nombre}</h3>
                        <p>CUI: {info.cui}</p>
                        <p>Tel: {info.telefono}</p>
                        <p>Mail: {info.correo}</p>
                    </Card>
                )
            })}
        </AdminView>
    )
}
