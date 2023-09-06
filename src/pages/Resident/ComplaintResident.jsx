import React, { useEffect, useState } from "react"

import ResidentView from '../../components/View/ResidentView'
import { Complaints } from '../../CreateViews/Complaints/Complaints'
import { Header } from '../../components/Header/Header'
import { getComplaints, addComplaint } from "../../components/FetchData/FetchData"


export const ComplaintResident = () => {

  const [search, setSearch] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  //titulo
  //contenido
  //fecha
  //autor: Usuario1
  //residente
  const valoresParaLosInputs = [
    { type: "text", name: "titulo", placeholder: "Ingrese el titulo", title: "Titulo" },
    { type: "text", name: "contenido", placeholder: "Ingrese el contenido", title: "Contenido" },
    { type: "date", name: "fecha", placeholder: "Ingrese la fecha", title: "Fecha" },
  ]

  const [complaint, setComplaint] = useState({
    titulo: "",
    contenido: "",
    fecha: "",
    autor: "",
    residente: "",
  })

  const agregarQueja = async () => {
    // console.log("agregar queja")
    const token = JSON.parse(sessionStorage.getItem("token"))
    try {
      const addedComplaint = await addComplaint(complaint.titulo, complaint.contenido, complaint.fecha, token.user.user_metadata.username, token.user.user_metadata.cui);

      console.log(`complaint added successfully: ${JSON.stringify(addedComplaint)}`);
    } catch (error) {
      console.error(`Error adding columnas: ${error}`);
    }

  }

  const useSearch = (e) => {
    setSearch(e.target.value)
    console.log(search)
  }

  async function fetchData() {
    try {
      const result = await getComplaints()
      setComplaint(result)
      setIsLoading(false)
    } catch (error) {
      console.error("Error fetching complaint:", error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <ResidentView >
      <Header
        search={search}
        useSearch={useSearch}
        valoresParaLosInputs={valoresParaLosInputs}
        columnas={complaint}
        setColumnas={setComplaint}
        funcionAgregadora={agregarQueja}
        plusButtonVisible={true}
        title={"Añadir queja"}
      />
      <Complaints search={search} />
    </ResidentView>
  )
}
