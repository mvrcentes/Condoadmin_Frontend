import axios from "axios"

const server = "http://127.0.0.1:4000"

export const getHouses = async () => {
    try {
        return (await axios.get(`${server}/api/houses`)).data
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

export const getServices = async () => {
    try {
        return (await axios.get(`${server}/api/services`)).data
    } catch (error) {
        console.error({ error })
    }
}

export const addHouse = async (num_casa, direccion, condominio, cuota_mensual) => {
    try {
        return (await axios.post(`${server}/api/houses/`,
            {
                num_casa, 
                direccion, 
                condominio, 
                cuota_mensual
            })).data
    } catch (error) {
        console.error(error)
    }
}

export const addResident = async (num_casa, cui, nombre, telefono, correo, tipo_residente) => {
    try {
        return (await axios.post(`${server}/api/houses/${num_casa}`,
            {
                num_casa, 
                cui, nombre, 
                telefono, correo, 
                tipo_residente
            })).data
    } catch (error) {
        console.error(error)
    }
}
