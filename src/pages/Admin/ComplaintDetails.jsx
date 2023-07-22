import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

// Data
import { getComplaintsByID } from "../../components/FetchData/FetchData"

// View
import AdminView from "../../components/View/AdminView"

// Components
import style from "./ComplaintDetails.module.css"

export const ComplaintDetails = () => {
  const { id } = useParams()
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  async function fetchData() {
    try {
      const result = await getComplaintsByID(id)
      setData(result)
      setIsLoading(false)
    } catch (error) {
      console.error("Error fetching house by id:", error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  //se chequea si el search esta vacio, si lo esta se muestran todas las casas, si no, se filtran las casas que contengan el numero de casa que se esta buscando
  const generateServiceCards = () => {
    console.log(data[0])
    return (
      data.map((info) => (
        <div className={style.container}>
            <div className={style.post}>
            <h3 className={style.title}>{info.titulo}</h3>
            <h3 className={style.contenido}>{info.contenido}</h3> <br/>
            <h3 className={style.fechaComplaint}>Fecha: {info.fecha}</h3>
            <h3 className={style.upvotes}>Upvote: {info.upvotes}</h3>
            <h3 className={style.downvotes}>Downvote: {info.downvotes}</h3>
            <h3 className={style.autor}>Autor: {info.autor}</h3>
          </div>
        </div>
      )))

  }

  return (
    <AdminView>
      <div className={style.residentsContainer}>
        {generateServiceCards()}
      </div>
    </AdminView>
  )
}
