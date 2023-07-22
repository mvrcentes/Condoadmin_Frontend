import React, { useEffect, useState } from "react"

import AdminView from '../../components/View/AdminView'
import { Complaints } from '../../CreateViews/Complaints/Complaints'
import { Header } from '../../components/Header/Header'
import { getComplaints } from "../../components/FetchData/FetchData"


export const Complaint = () => {

  const [search, setSearch] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  const valoresParaLosInputs = [
    { type: "number", name: "num_casa", placeholder: "NOOOOO RELLENEEEE PLSS", title: "ESTO NO SIRVE" },
  ]

  const [complaint, setComplaint] = useState({
    // num_casa: 0,
    // direccion: "",
    // condominio: 0,
    // cuota_mensual: 0,
  })

  const agregarCasa = async () => {
    console.log("agregar doctor")

    // try {
    //   const addedDoctor = await addHouse(house.num_casa, house.direccion, house.condominio, house.cuota_mensual);

    //   console.log(`House added successfully: ${JSON.stringify(addedDoctor)}`);
    // } catch (error) {
    //   console.error(`Error adding columnas: ${error}`);
    // }

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
    <AdminView >
      <Header
        search={search}
        useSearch={useSearch}
        valoresParaLosInputs={valoresParaLosInputs}
        columnas={complaint}
        setColumnas={setComplaint}
        funcionAgregadora={agregarCasa}
        title={"Añadir queja"}
      />
      <Complaints search={search} />
    </AdminView>
  )
}
