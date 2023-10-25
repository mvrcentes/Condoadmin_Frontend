import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "https://condoadmin.azurewebsites.net", // URL base de tu servidor
});

export const getHouses = async () => {
  try {
    return (await axiosInstance.get(`/api/houses`)).data
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
      await axiosInstance.post(`/api/houses/`, {
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
    return (await axiosInstance.get(`/api/houses/${id}`)).data
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
      await axiosInstance.post(`/api/houses/${num_casa}`, {
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
    return (await axiosInstance.get(`/api/services`)).data
  } catch (error) {
    console.error({ error })
  }
}

export const addEquipment = async (nombre, descripcion, estado, condominio) => {
  try {
    return (
      await axiosInstance.post(`/api/services/`, {
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
    return (await axiosInstance.get(`/api/services/${id}`)).data
  } catch (error) {
    console.error(error)
  }
}

export const addService = async (equipo, fecha, descripcion, estado, costo) => {
  try {
    return (
      await axiosInstance.post(`/api/services/${equipo}`, {
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
    return (await axiosInstance.get(`/api/complaints`)).data
  } catch (error) {
    console.error(error)
  }
}

export const getComplaintsByID = async (id) => {
  try {
    return (await axiosInstance.get(`/api/complaints/${id}`)).data
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
      await axiosInstance.post(`/api/complaints/`, {
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
    return (await axiosInstance.get(`/api/announcements`)).data
  } catch (error) {
    console.error(error)
  }
}

export const getAnnouncementByID = async (id) => {
  console.log({ id })
  try {
    return (await axiosInstance.get(`/api/announcements/${id}`)).data
  } catch (error) {
    console.error(error)
  }
}

export const logIn = async (email, password) => {

  try {
    return (
      await axiosInstance.post(`/login`, {
        email, password
      })
    ).data
  } catch (error) {
    console.error(error)
  }

}
