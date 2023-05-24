import axios from "axios"

const server = "http://127.0.0.1:4000"

export const getHouses = async () => {
    try {
        return (await axios.get(`${server}/api/houses`)).data
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
            await axios.post(`${server}/api/houses/`, {
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
        return (await axios.get(`${server}/api/houses/${id}`)).data
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
    tipo_residente
) => {
    try {
        return (
            await axios.post(`${server}/api/houses/${num_casa}`, {
                num_casa,
                cui,
                nombre,
                telefono,
                correo,
                tipo_residente,
            })
        ).data
    } catch (error) {
        console.error(error)
    }
}

export const getEquipment = async () => {
    try {
        return (await axios.get(`${server}/api/services`)).data
    } catch (error) {
        console.error({ error })
    }
}

export const addEquipment = async (nombre, descripcion, estado, condominio) => {
    try {
        return (
            await axios.post(`${server}/api/services/`, {
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
        return (await axios.get(`${server}/api/services/${id}`)).data
    } catch (error) {
        console.error(error)
    }
}

export const addService = async (equipo, fecha, descripcion, estado, costo) => {
    try {
        return (
            await axios.post(`${server}/api/services/${equipo}`, {
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
        return (await axios.get(`${server}/api/complaints`)).data
    } catch (error) {
        console.error(error)
    }
}
