import React from "react"

import { Register } from "../../components/Register/Register"

import style from "./Complaints.module.css"

export const Complaints = () => {
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
            {data.map((item, index) => (
                <Register key={index} props={item} />
            ))}
        </div>
    )
}
