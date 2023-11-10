import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAnnouncements } from "../../components/FetchData/FetchData";
import { FaSpinner } from 'react-icons/fa';


export const Annoucements = ({ admin }) => {
  const [announcements, setAnnouncements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    try {
      const result = await getAnnouncements();
      setAnnouncements(result);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching announcements:", error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FaSpinner className="animate-spin text-blue-500 text-4xl" />
      </div>
    );
  } else {
    return (
      <div className="mx-auto px-4 py-8" style={
        {
          width: "100%",
          overflowY: "auto",
          overflowX: "hidden",
        }
      }>
        <div
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4"
          style={{
            gridGap: "10px",
            gridRowGap: "10px",
            padding: "5px",
            width: "100%",
            overflowY: "auto",
            overflowX: "hidden",
            maxHeight: "100%",
          }}
        >
          {announcements.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-4 rounded-lg transition-transform hover:scale-105 duration-300"
              style={{ maxHeight: "400px", overflowY: "auto" }}
            >
              <h2 className="text-xl mb-2">{item.titulo}</h2>
              <p className="text-gray-600 mb-2">{item.contenido}</p>
              <div className="text-gray-500 text-sm">
                Author: {item.autor} | Date: {item.fecha_creacion.slice(0, 10)}
              </div>
              {admin ?
                <Link
                  to={`/admin/announce/${item.id}`}
                  className="block mt-4 text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                >
                  Read More
                </Link>
                :
                <Link
                  to={`/resident/announce/${item.id}`}
                  className="block mt-4 text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                >
                  Read More
                </Link>
              }
            </div>
          ))}
        </div>
      </div>
    );
  }
};
