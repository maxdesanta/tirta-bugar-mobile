import { api } from "./api";
import { checkIdPacket } from "../Helper/checkIdPacket";
import moment from "moment";

// menampilkan data member
export const getMemberApi = async() => {
    try {
        const response = await api.get('/members');

        return response.data.message;
    } catch (error) {
        console.log(error.message);
    }
}

// detail member
export const detailMemberApi = async ({ id }) => {
    try{
        const response = await api.get(`/member/${id}`);
        console.log(response.data.message);

        return response.data.message;
    } catch(err) {
        console.log(err.message);
        throw err;
    }
}

// manambahkan data member
export const addMemberApi = async({name,codeMember,phoneNumber,expired,duration,namePacket}) => {
    try {
        const check = await checkIdPacket({ duration, namePacket });
        const converDate = moment(expired).format('YYYY-MM-DD');

        const response = await api.post('/member/add', {
            nama: name,
            kode_member: codeMember,
            nomor_telepon: phoneNumber,
            masa_berlaku:  converDate,
            id_member: check,
        });

        return response.data.message;
    } catch (err) {
        console.log(err.message);
        throw err;
    }
}

// hapus data member
export const deleteMemberApi = async({ id }) => {
    try{
        const response = await api.delete(`/member/delete/${id}`);

        console.log(response.data.message);
        return response.data.message;
    } catch (err) {
        console.log(err.message);
        throw err;
    }
}

// edit data member
export const editMemberApi = async({name,codeMember,phoneNumber,expired,duration,namePacket,id}) => {
    try {
        const check = await checkIdPacket({ duration, namePacket });
        const converDate = moment(expired).format('YYYY-MM-DD');

        const response = await api.put(`/member/edit/${id}`, {
            nama: name,
            kode_member: codeMember,
            nomor_telepon: phoneNumber,
            masa_berlaku:  converDate,
            id_member: check,
        });

        return response.data.message;
    } catch (err) {
        console.log(err.message);
        throw err;
    }
}

// search member
export const searchMemberApi = async (val) => {
    try {
        const response = await api.get(`/searchMember?nama=${val}`);

        return response.data.message;
    } catch (err) {
        console.log(err.message);
        throw err;
    }
}