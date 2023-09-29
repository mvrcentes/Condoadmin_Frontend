
import React from "react"

import View from "./View"

import services from "../../assets/services.svg"
import houses from "../../assets/houses.svg"
import announce from "../../assets/announce.svg"
import complaints from "../../assets/complaints.svg"
import logout from "../../assets/logout.svg"
import emergencies from "../../assets/emergency.png"

const ResidentMenu = [
  [announce, "Anuncios", "/resident/announce"],
  [complaints, "Quejas", "/resident/complaints"],
  [houses, "Habitantes", "/resident/house/1"],
  [emergencies, "Emergencias", "/resident/emergencies"],
  [logout, "Salir", "/login", () => {
    sessionStorage.removeItem('token')
  }],
]

const ResidentView = ({ children }) => {
  return (<View menuOptions={ResidentMenu} children={children} />)
}

export default ResidentView
