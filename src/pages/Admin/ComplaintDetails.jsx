import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComplaintsByID } from "../../components/FetchData/FetchData";
import AdminView from "../../components/View/AdminView";
import { FaSpinner } from 'react-icons/fa';

export const ComplaintDetails = ( ) => {
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
    return data.map((info, index) => (
      <div
        key={index}
        className="bg-white rounded-lg shadow-lg p-6 mb-4"
      >
        <h2 className="text-2xl font-semibold mb-4">{info.titulo}</h2>
        <p className="text-gray-700 mb-4">{info.contenido}</p>
        <div className="flex space-x-4">
          <div className="text-sm text-gray-600">Fecha: {info.fecha}</div>
          <div className="text-sm text-gray-600">Upvotes: {info.upvotes}</div>
          <div className="text-sm text-gray-600">Downvotes: {info.downvotes}</div>
          <div className="text-sm text-gray-600">Autor: {info.autor}</div>
        </div>
      </div>
    ));
  };

  return (
    <>
    {}
    <AdminView>
      <div className="container mx-auto p-4">
        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <FaSpinner className="animate-spin text-blue-500 text-4xl" />
          </div>
        ) : (
          <div className="space-y-4">
            {generateServiceCards()}
          </div>
        )}
      </div>
    </AdminView>
    </>
  );
};
