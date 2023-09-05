import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import AdminView from "../../components/View/AdminView"
import { Card } from "../../components/Card/Card"
import { Header } from "../../components/Header/Header"
import style from "./HouseDetails.module.css"
import { getResidentsByHouseID, addResident } from "../../components/FetchData/FetchData"

export const HouseDetails = () => {
    const { id } = useParams()
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [conteo_residentes, setConteo_residentes] = useState(0)
    const [search, setSearch] = useState("")
    const [residente, setResidente] = useState({
        num_casa: id,
        cui: "",
        nombre: "",
        telefono: "",
        correo: "",
        tipo_residente: "",
        admin: "",
    })
    const [refreshCount, setRefreshCount] = useState(0) // Nuevo estado para controlar la actualización

    async function fetchData() {
        try {
            const result = await getResidentsByHouseID(id)
            setData(result)
            setIsLoading(false)
            setConteo_residentes(result.length)
        } catch (error) {
            console.error("Error fetching house by id:", error)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [refreshCount])

    const useSearch = (e) => {
        setSearch(e.target.value)
    }

    const generateResidentCards = () => {
        if (search === "") {
            return (
                data.map((info) => (
                    <Card key={info.code}>
                        <h3 className={style.resName}>{info.nombre}</h3>
                        <p className={style.CUI}>CUI: {info.cui}</p>
                        <p className={style.phoneNum}>Tel: {info.telefono}</p>
                        <p className={style.mail}>Mail: {info.correo}</p>
                    </Card>
                ))
            )
        } else {
            const arrayResidentesFiltrados = data.filter(objeto => objeto.nombre.toLowerCase().startsWith(search.toLowerCase()))
            return (
                arrayResidentesFiltrados.map((info) => (
                    <Card key={info.code}>
                        <h3 className={style.resName}>{info.nombre}</h3>
                        <p className={style.CUI}>CUI: {info.cui}</p>
                        <p className={style.phoneNum}>Tel: {info.telefono}</p>
                        <p className={style.mail}>Mail: {info.correo}</p>
                    </Card>
                ))
            )
        }
    }

    const valoresParaLosInputs = [
        { type: "text", name: "cui", placeholder: "0000000000000000", title: "CUI" },
        { type: "text", name: "nombre", placeholder: "Nombre Apellido", title: "Nombre y Apellido" },
        { type: "text", name: "telefono", placeholder: " 44444444 ", title: "Telefono" },
        { type: "text", name: "correo", placeholder: " correo@email.com ", title: "Correo" },
        { type: "text", name: "tipo_residente", placeholder: " Propietario - Inquilino ", title: "Propietario/Inquilino" },
        { type: "text", name: "admin", placeholder: " Si/No ", title: "Permisos de administrador" }
    ]

    const agregarResidente = async () => {
        try {
            const addedResident = await addResident(
                residente.num_casa,
                residente.cui,
                residente.nombre,
                residente.telefono,
                residente.correo,
                residente.tipo_residente,
                conteo_residentes,
                residente.admin
            )
            console.log(`Resident added successfully: ${JSON.stringify(addedResident)}`)
            // Incrementa el contador para forzar la actualización
            setRefreshCount(refreshCount + 1)
        } catch (error) {
            console.error(`Error adding columnas: ${error}`)
        }
    }

    return (
        <AdminView>
            <Header
                search={search}
                useSearch={useSearch}
                valoresParaLosInputs={valoresParaLosInputs}
                columnas={residente}
                setColumnas={setResidente}
                funcionAgregadora={agregarResidente}
                title={"Añadir residente"}
                plusButtonVisible={true}
            />
            <div className={style.residentsContainer}>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    generateResidentCards()
                )}
            </div>
        </AdminView>
    )
}
