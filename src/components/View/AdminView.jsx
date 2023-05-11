import React from "react"

import View from "./View"

import MenuOptions from "../Menu/AdminMenu"

const AdminView = ({ children }) => {
    
    return (<View menuOptions={MenuOptions} children={children}/>)
    
}

export default AdminView