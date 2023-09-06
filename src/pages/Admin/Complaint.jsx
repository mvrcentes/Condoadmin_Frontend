import React, { useEffect, useState } from "react"

import AdminView from '../../components/View/AdminView'
import { Complaints } from '../../CreateViews/Complaints/Complaints'
import { Header } from '../../components/Header/Header'
import { getComplaints } from "../../components/FetchData/FetchData"


export const Complaint = ( {admin} ) => {

  const [search, setSearch] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [complaint, setComplaint] = useState({
  })

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
        valoresParaLosInputs={null}
        columnas={complaint}
        setColumnas={setComplaint}
        funcionAgregadora={null}
        title={"Añadir queja"}
      />
      <Complaints search={search} admin={admin} />
    </AdminView>
  )
}
