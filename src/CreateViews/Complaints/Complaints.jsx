import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getComplaints } from "../../components/FetchData/FetchData";

export const Complaints = ({ search }) => {
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
        <table className="table-auto w-full bg-blue-100">
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
                  window.location.href = `/admin/complaints/${complaint.id}`;
                }}
              >
                <td className="border px-4 py-2">
                  <Link to={`/admin/complaints/${complaint.id}`}>
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
        <table className="table-auto w-full bg-blue-100">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Titulo</th>
              <th className="px-4 py-2 text-left">Residente</th>
              <th className="px-4 py-2 text-left">Fecha</th>
              <th className="px-4 py-2 text-left">Upvotes</th>
            </tr>
          </thead>
          <tbody>
            {arrayQuejasFiltradas.map((complaint, index) => (
              <tr
                key={index}
                className="cursor-pointer hover:bg-blue-200"
                onClick={() => {
                  // Redirigir a la ruta correspondiente al hacer clic en cualquier dato de la fila
                  window.location.href = `/admin/complaints/${complaint.id}`;
                }}
              >
                <td className="border px-4 py-2">
                  <Link to={`/admin/complaints/${complaint.id}`}>
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
      {isLoading ? <h1>Loading...</h1> : generateComplaints()}
    </div>
  );
};
