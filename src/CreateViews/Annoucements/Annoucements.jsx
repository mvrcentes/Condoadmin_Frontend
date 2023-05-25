import React, { useEffect, useState } from "react"

// Components
import { Register } from "../../components/Register/Register"

import { getAnnouncements } from "../../components/FetchData/FetchData"

import style from "./Annoucements.module.css"

export const Annoucements = () => {
    const [announcements, setAnnouncements] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    async function fetchData() {
        try {
            const result = await getAnnouncements()
            setAnnouncements(result)
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
        <div className={style.Annoucements}>
            <Register
                props={{
                    Title: "Title",
                    User: "User",
                    Date: "Date",
                    Upvotes: "Upvotes",
                }}
            />

            {announcements.map((item, index) => (
                <Register key={index} props={item} />
            ))}
        </div>
    )
}
