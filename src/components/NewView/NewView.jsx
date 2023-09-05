import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import arrow from "../../assets/arrow.svg"
import { getAnnouncementByID } from "../FetchData/FetchData"
import { useParams } from "react-router-dom"
import React from "react"

export const Comment = ({ props }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div className="ml-2">
                    <div className="text-gray-700 font-semibold">{props.author}</div>
                </div>
            </div>
            <div className="text-gray-800">{props.body}</div>
        </div>
    )
}

export const NewView = () => {
    const [announce, setAnnouncement] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { id } = useParams()

    async function fetchData() {
        try {
            const result = await getAnnouncementByID(id)
            setAnnouncement(result[0])
            console.log("result", result)
            setIsLoading(false)
        } catch (error) {
            console.error("Error fetching houses:", error)
            setIsLoading(false)
        }
    }

    // console.log({ announce })

    useEffect(() => {
        fetchData()
    }, [])

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg mb-4 ml-4 ">
            <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div className="ml-2">
                    <div className="text-gray-700 font-semibold">{announce.autor}</div>
                    <div className="text-gray-600">{announce.titulo}</div>
                </div>
            </div>
            <div className="text-gray-800">{announce.contenido}</div>
            <div className="mt-4">
                <div className="text-gray-700 font-semibold">Comentarios:</div>
                <div className="mt-2">
                    <input
                        className="w-full bg-gray-200 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                        type="text"
                        placeholder="Escribe un comentario..."
                    />
                </div>
            </div>
            {/* Renderizar comentarios */}
            {/* {comments.map((item, index) => (
                <Comment key={index} props={item} />
            ))} */}
        </div>
    )
}

NewView.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }),
    onLogin: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    onCreateAccount: PropTypes.func.isRequired,
}

NewView.defaultProps = {
    user: null,
}
