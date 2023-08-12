
import React from "react"

import View from "./View"

import services from "../../assets/services.svg"
import houses from "../../assets/houses.svg"
import announce from "../../assets/announce.svg"
import complaints from "../../assets/complaints.svg"

const ResidentMenu = [
  [announce, "Anuncios", "/resident/announce"],
  [complaints, "Quejas", "/resident/complaints"],
  [houses, "Habitantes", "/resident/house/1"],
  [services, "Emergencias", "/resident/emergencies"],
]

const ResidentView = ({ children }) => {
  return (<View menuOptions={ResidentMenu} children={children} />)
}

export default ResidentView