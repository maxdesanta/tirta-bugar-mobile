import { api } from "./api";

// menampilkan data paket
export const getPacketApi = async() => {
    try {
        const response = await api.get('/packets')

        return response.data.message;
    } catch (error) {
        console.log(error.message)
    }
}