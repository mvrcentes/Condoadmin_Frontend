import React, { useEffect, useState } from 'react';

import AdminView from '../../components/View/AdminView';

//functions
import { getAnnouncements, addAnnouncement } from "../../components/FetchData/FetchData"


//components
import { Annoucements } from '../../CreateViews/Annoucements/Annoucements';
import { Header } from '../../components/Header/Header';
import { Card } from "../../components/Card/Card"

export const Announcement = ({ admin, email }) => {
  const [announcements, setAnnouncements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [service, setService] = useState({
    titulo: '',
    contenido: '',
    fecha: '',
    autor: email,
  });

  const [refreshCount, setRefreshCount] = useState(0); // Nuevo estado para controlar la actualización

  async function fetchData() {
    try {
      const result = await getAnnouncements();
      setAnnouncements(result);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching announcements:', error);
      setIsLoading(false);
    }
  }

  console.log(sessionStorage.getItem('token'));

  useEffect(() => {
    fetchData();
  }, [refreshCount]); // Agregar refreshCount como dependencia

  const useSearch = (e) => {
    setSearch(e.target.value);
  };

  const generateannouncementsCards = () => {
    if (search === '') {
      return announcements.map((service, index) => (
        <Card key={index} to={'announcements/' + service.id}>
          <h3 className={style.Code}>{service.nombre}</h3>
          <p className={style.Direccion}>{service.descripcion}</p>
          <p className={style.Direccion}>Estado: {service.estado}</p>
        </Card>
      ));
    } else {
      const arrayannouncementsFiltradas = announcements.filter((objeto) =>
        objeto.nombre.toLowerCase().startsWith(search.toLowerCase())
      );
      return arrayannouncementsFiltradas.map((service, index) => (
        <Card key={index} to={'announcements/' + service.id}>
          <h3 className={style.Code}>{service.nombre}</h3>
          <p className={style.Direccion}>{service.descripcion}</p>
          <p className={style.Direccion}>Estado: {service.estado}</p>
        </Card>
      ));
    }
  };

  const valoresParaLosInputs = [
    {
      type: 'text',
      name: 'titulo',
      placeholder: 'Titulo',
      title: 'Titulo',
    },
    {
      type: 'text',
      name: 'contenido',
      placeholder: 'Contenido',
      title: 'Contenido',
    },
    {
      type: 'date',
      name: 'fecha',
      placeholder: 'Fecha',
      title: 'Fecha',
    },
  ]

  const agregarAnuncio = async () => {
    try {
      const addedService = await addAnnouncement(
        service.titulo,
        service.contenido,
        service.fecha,
        service.autor,
      );
      console.log(
        `Service added successfully: ${JSON.stringify(addedService)}`
      );
      // Incrementa el contador para forzar la actualización
      setRefreshCount(refreshCount + 1);
    } catch (error) {
      console.error(`Error adding columnas: ${error}`);
    }
  };

  return (
    <AdminView>
      <Header
        search={search}
        useSearch={useSearch}
        valoresParaLosInputs={valoresParaLosInputs}
        columnas={service}
        setColumnas={setService}
        funcionAgregadora={agregarAnuncio}
        plusButtonVisible={true}
        title={"Añadir anuncio"}
      />
      <Annoucements admin={admin} />
    </AdminView>
  );
};
