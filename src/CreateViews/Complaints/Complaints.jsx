import React, { useEffect, useState } from "react"

import { Register } from "../../components/Register/Register"

import { getComplaints } from "../../components/FetchData/FetchData"

import style from "./Complaints.module.css"

export const Complaints = () => {
    const [complaints, setComplaints] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    async function fetchData() {
        try {
            const result = await getComplaints()
            setComplaints(result)
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

    const data = [
        {
            Title: "Title",
            User: "User",
            Date: "Date",
            Upvotes: "Upvotes",
        },
        {
            Title: "Title",
            User: "User",
            Date: "Date",
            Upvotes: "Upvotes",
        },
        {
            Title: "Title",
            User: "User",
            Date: "Date",
            Upvotes: "Upvotes",
        },
    ]

    return (
        <div className={style.Complaints}>
            <Register props={{titulo: "Titulo", residente: "Residente", fecha: "Fecha", upvotes: "Upvotes"}} />
            {isLoading ? (
                <h1>Loading...</h1>
            ) : 
            (
                complaints.map((complaint, index) => <Register key={index} props={complaint} />)
            )}
        </div>
    )
}
