import React from "react"

import AdminView from "../../components/View/AdminView"

//components
import { Annoucements } from "../../CreateViews/Annoucements/Annoucements"
import { Header } from "../../components/Header/Header"



export const Announcement = ( {admin} ) => {
    return (
        <AdminView>
            <Header 
            plusButtonVisible={true}
            />
            <Annoucements admin={admin} />
        </AdminView>
    )
}
