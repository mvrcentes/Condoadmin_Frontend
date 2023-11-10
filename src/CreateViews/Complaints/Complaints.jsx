import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getComplaints } from "../../components/FetchData/FetchData";
import { FaSpinner } from 'react-icons/fa';


export const Complaints = ({ search, admin }) => {
  const [complaints, setComplaints] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    try {
      const result = await getComplaints();
      setComplaints(result);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching complaints:", error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Función para generar el contenido de las quejas en formato de tabla
  const generateComplaints = () => {
    if (search === "") {
      return (
        <table className="table-auto w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Titulo</th>
              <th className="px-4 py-2 text-left">Residente</th>
              <th className="px-4 py-2 text-left">Fecha</th>
              <th className="px-4 py-2 text-left">Upvotes</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((complaint, index) => (
              <tr
                key={index}
                className="cursor-pointer hover:bg-blue-200"
                onClick={() => {
                  // Redirigir a la ruta correspondiente al hacer clic en cualquier dato de la fila
                  const route = admin
                    ? `/admin/complaints/${complaint.id}`
                    : `/resident/complaints/${complaint.id}`;
                  window.location.href = route;
                }}
              >
                <td className="border px-4 py-2">
                  <Link
                    to={admin ? `/admin/complaints/${complaint.id}` : `/resident/complaints/${complaint.id}`}
                  >
                    {complaint.titulo}
                  </Link>
                </td>
                <td className="border px-4 py-2">{complaint.residente}</td>
                <td className="border px-4 py-2">{complaint.fecha}</td>
                <td className="border px-4 py-2">{complaint.upvotes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else {
      const arrayQuejasFiltradas = complaints.filter((objeto) =>
        objeto.titulo.toLowerCase().startsWith(search.toLowerCase())
      );
      return (

        <div className="container mx-auto py-8">
          {isLoading ? (
            <div className="flex justify-center items-center h-screen">
              <FaSpinner className="animate-spin text-blue-500 text-4xl" />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Titulo</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Residente</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Fecha</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Upvotes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {arrayQuejasFiltradas.map((complaint, index) => (
                    <tr
                      key={index}
                      className="transition-colors cursor-pointer hover:bg-blue-50"
                      onClick={() => {
                        const route = admin
                          ? `/admin/complaints/${complaint.id}`
                          : `/resident/complaints/${complaint.id}`;
                        window.location.href = route;
                      }}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link
                          to={admin ? `/admin/complaints/${complaint.id}` : `/resident/complaints/${complaint.id}`}
                          className="text-blue-600 hover:underline"
                        >
                          {complaint.titulo}
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{complaint.residente}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{complaint.fecha}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{complaint.upvotes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>



      );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8" style={
      {
        width: "100%",
        overflowY: "auto",
        overflowX: "hidden",
      }
    }>
      {isLoading ? <div className="flex justify-center items-center h-screen">
        <FaSpinner className="animate-spin text-blue-500 text-4xl" />
      </div> : generateComplaints()}
    </div>
  );
};
