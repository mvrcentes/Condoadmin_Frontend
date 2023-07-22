import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// Components
import { Register } from "../../components/Register/Register"
import { NewView } from "../../components/NewView/NewView"

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

    console.log(announcements)

    if (isLoading) {
        return <div>Loading...</div>
    } else {
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
                    <Link to={`/admin/announce/${item.id}`} key={index}  style={{ textDecoration: 'none', color: 'black' }}>
                        <Register key={index} props={item} />
                    </Link>
                ))}
            </div>
        )
    }
}
