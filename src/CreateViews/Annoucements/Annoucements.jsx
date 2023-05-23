import React from "react"

// Components
import { Register } from "../../components/Register/Register"

import style from "./Annoucements.module.css"

export const Annoucements = () => {
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

            {data.map((item, index) => (
                <Register key={index} props={item} />
            ))}
        </div>
    )
}
