import React from "react"

import AdminView from "../../components/View/AdminView"

//components
import { NewView } from "../../components/NewView/NewView"
import { Header } from "../../components/Header/Header"



export const AnnoucementByID = () => {
    return (
        <AdminView>
            <Header />
            <NewView />
        </AdminView>
    )
}
