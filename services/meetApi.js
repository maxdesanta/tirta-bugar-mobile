import { api } from "./api";
import { convertDateApi } from "../Helper/converDateApi";

// memnampilkan data meet
export const getMeetApi = async() => {
    try {
        const response = await api.get("/meets");
        console.log(response.data.message);
        return response.data.message;
    } catch (error) {
        console.log(error.message);
    }
}

// menampilkan data meet berdasarkan id member
export const getMeetMemberIdApi = async({ id }) => {
    try {
        const response = await api.get(`/meet/${id}`);
        
        return response.data.message;
    } catch (error) {
        console.log(error.message);
    }
}

// menambahkan data meet 
export const addMeetApi = async({ id }) => {
    try {
        const response = await api.post(`/meet/add/${id}`, {
            x1: convertDateApi(new Date()),
            x2: null,
            x3: null,
            x4: null,
            x5: null,
            x6: null,
            x7: null,
            x8: null
        });

        return response.data.message;

    } catch (error) {
        console.log(error.message);
    }
}

// edit meet 
export const editMeetApi = async({ x1, x2, x3, x4, x5, x6, x7, x8, id }) => {
    try {  
        const response = await api.put(`/meet/edit/${id}`, {
            x1: convertDateApi(x1),
            x2: convertDateApi(x2),
            x3: convertDateApi(x3),
            x4: convertDateApi(x4),
            x5: convertDateApi(x5),
            x6: convertDateApi(x6),
            x7: convertDateApi(x7),
            x8: convertDateApi(x8)
        });
        
        console.log(response.data.message);
        return response.data.message;
    } catch(error){
        console.log(error.message)
    }
}

export const resetMeetApi = async({id}) => {
    try {
        const response = await api.put(`/meet/reset/${id}`);

        console.log(response.data.message);
        return response.data.message;
    } catch (err) {
        console.log(err.message)
    }
}

export const deleteMeetApi = async({id}) => {
    try {
        const response = await api.delete(`/meet/delete/${id}`);

        return response.data.message;
    } catch (err) {
        console.log(err.message)
    }
}