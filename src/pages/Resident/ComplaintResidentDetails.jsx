import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaArrowUp, FaArrowDown, FaSpinner } from 'react-icons/fa'; // Importa los íconos de flecha y el ícono de carga

// Data
import { getComplaintsByID } from "../../components/FetchData/FetchData";

// View
import ResidentView from "../../components/View/ResidentView";

// Components
import style from "./ComplaintResidentDetails.module.css";

export const ComplaintResidentDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    try {
      const result = await getComplaintsByID(id);
      setData(result);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching house by id:", error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const generateServiceCards = () => {
    // Mapea los datos y utiliza clases de Tailwind CSS
    return (
      data.map((info, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-4 m-4">
          <h3 className="text-xl font-semibold">{info.titulo}</h3>
          <p className="text-gray-600 text-sm mt-2">{info.contenido}</p>
          <div className="flex justify-between mt-4">
            <p className="text-gray-500 text-sm">Fecha: {info.fecha}</p>
          </div>
          <p className="text-gray-500 text-sm mt-2">Autor: {info.autor}</p>
          <div className="flex space-x-4 items-center mt-4">
            <div className="flex items-center">
              <FaArrowUp className="text-green-600 text-lg" />
              <span className="text-green-600 text-sm ml-1">{info.upvotes}</span>
            </div>
            <div className="flex items-center">
              <FaArrowDown className="text-red-600 text-lg" />
              <span className="text-red-600 text-sm ml-1">{info.downvotes}</span>
            </div>
          </div>
        </div>
      ))
    );
  }

  return (
    <ResidentView>
      <div className={style.residentsContainer}>
        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            {/* Ícono de carga */}
            <FaSpinner className="animate-spin text-blue-500 text-4xl" />
          </div>
        ) : (
          generateServiceCards()
        )}
      </div>
    </ResidentView>
  );
};
