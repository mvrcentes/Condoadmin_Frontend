import React, { useEffect, useState } from "react"

import { Register } from "../../components/Register/Register"

import { getComplaints } from "../../components/FetchData/FetchData"

import style from "./Complaints.module.css"

export const Complaints = ({ search }) => {
  const [complaints, setComplaints] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  async function fetchData() {
    try {
      const result = await getComplaints()
      setComplaints(result)
      console.log("error", result)
      setIsLoading(false)
    } catch (error) {
      console.error("Error fetching complaints:", error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  //se chequea si el search esta vacio, si lo esta se muestran todas las casas, si no, se filtran las casas que contengan el numero de casa que se esta buscando
  const generateComplaints = () => {
    if (search == "") {
      return (
        complaints.map((complaint, index) => (
          // console.log(complaint)
           <Register key={index} props={complaint} to={"complaints/"+complaint.id}/>
        )))
    } else {
      const arrayQuejasFiltradas = complaints.filter(objeto => (objeto.titulo.toLowerCase().startsWith(search.toLowerCase())))
      return (
        
        arrayQuejasFiltradas.map((complaint, index) => (
          <Register key={index} props={complaint} to={"complaints/"+complaint.id}/>
        )))
    }
  }

  return (
    <div className={style.Complaints}>
      <Register props={{ titulo: "Titulo", residente: "Residente", fecha: "Fecha", upvotes: "Upvotes" }} />
      {isLoading ? (
        <h1>Loading...</h1>
      ) :
        (
          // complaints.map((complaint, index) => <Register key={index} props={complaint} />)
          generateComplaints()
        )}
    </div>
  )
}
