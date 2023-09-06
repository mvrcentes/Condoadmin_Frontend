import React from "react"

import ResidentView from "../../components/View/ResidentView"

//components
import { Annoucements } from "../../CreateViews/Annoucements/Annoucements"
import { Header } from "../../components/Header/Header"

export const AnnouncementResident = ( {admin} ) => {
    return (
        <ResidentView>
            <Header />
            <Annoucements admin={admin}/>
        </ResidentView>
    )
}
