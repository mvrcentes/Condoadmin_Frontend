import axios from "axios"

const server = "http://127.0.0.1:4000"

export const getHouses = async () => {
    try {
        return (await axios.get(`${server}/api/houses`)).data
    } catch (error) {
        console.error(error)
    }
}

export const getHouseByID = async (id) => {
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
