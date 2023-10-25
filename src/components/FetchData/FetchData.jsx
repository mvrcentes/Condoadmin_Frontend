import axios from "axios"

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  }
});

export const getHouses = async () => {
  try {
    return (await axiosInstance.get(`https://condoadmin.azurewebsites.net/api/houses`)).data
  } catch (error) {
    console.error(error)
  }
}

export const addHouse = async (
  num_casa,
  direccion,
  condominio,
  cuota_mensual
) => {
  try {
    return (
      await axiosInstance.post(`https://condoadmin.azurewebsites.net/api/houses/`, {
        num_casa,
        direccion,
        condominio,
        cuota_mensual,
      })
    ).data
  } catch (error) {
    console.error(error)
  }
}

export const getResidentsByHouseID = async (id) => {
  try {
    return (await axiosInstance.get(`https://condoadmin.azurewebsites.net/api/houses/${id}`)).data
  } catch (error) {
    console.error(error)
  }
}

export const addResident = async (
  num_casa,
  cui,
  nombre,
  telefono,
  correo,
  tipo_residente,
  conteo_residentes,
  admin
) => {
  try {
    return (
      await axiosInstance.post(`https://condoadmin.azurewebsites.net/api/houses/${num_casa}`, {
        num_casa,
        cui,
        nombre,
        telefono,
        correo,
        tipo_residente,
        conteo_residentes,
        admin,
      })
    ).data
  } catch (error) {
    console.error(error)
  }
}

export const getEquipment = async () => {
  try {
    return (await axiosInstance.get(`https://condoadmin.azurewebsites.net/api/services`)).data
  } catch (error) {
    console.error({ error })
  }
}

export const addEquipment = async (nombre, descripcion, estado, condominio) => {
  try {
    return (
      await axiosInstance.post(`https://condoadmin.azurewebsites.net/api/services/`, {
        nombre,
        descripcion,
        estado,
        condominio,
      })
    ).data
  } catch (error) {
    console.error(error)
  }
}

export const getServicesByEquipmentID = async (id) => {
  try {
    return (await axiosInstance.get(`https://condoadmin.azurewebsites.net/api/services/${id}`)).data
  } catch (error) {
    console.error(error)
  }
}

export const addService = async (equipo, fecha, descripcion, estado, costo) => {
  try {
    return (
      await axiosInstance.post(`https://condoadmin.azurewebsites.net/api/services/${equipo}`, {
        equipo,
        fecha,
        descripcion,
        estado,
        costo,
      })
    ).data
  } catch (error) {
    console.error(error)
  }
}

export const getComplaints = async () => {
  try {
    return (await axiosInstance.get(`https://condoadmin.azurewebsites.net/api/complaints`)).data
  } catch (error) {
    console.error(error)
  }
}

export const getComplaintsByID = async (id) => {
  try {
    return (await axiosInstance.get(`https://condoadmin.azurewebsites.net/api/complaints/${id}`)).data
  } catch (error) {
    console.error(error)
  }
}

export const addComplaint = async (
  titulo,
  contenido,
  fecha,
  autor,
  residente,
) => {
  try {
    return (
      await axiosInstance.post(`https://condoadmin.azurewebsites.net/api/complaints/`, {
        titulo,
        contenido,
        fecha,
        autor,
        residente,
      })
    ).data
  } catch (error) {
    console.error(error)
  }
}

export const getAnnouncements = async () => {
  try {
    return (await axiosInstance.get(`https://condoadmin.azurewebsites.net/api/announcements`)).data
  } catch (error) {
    console.error(error)
  }
}

export const getAnnouncementByID = async (id) => {
  console.log({ id })
  try {
    return (await axiosInstance.get(`https://condoadmin.azurewebsites.net/api/announcements/${id}`)).data
  } catch (error) {
    console.error(error)
  }
}

export const logIn = async (email, password) => {

  try {
    return (
      await axiosInstance.post(`https://condoadmin.azurewebsites.net/login`, {
        email, password
      })
    ).data
  } catch (error) {
    console.error(error)
  }

}
