import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMemberApi, addMemberApi, deleteMemberApi, editMemberApi, detailMemberApi, searchMemberApi } from '../../services/memberApi';

// menampilkan data member
export const getMemberAction = createAsyncThunk('member/get', async () => {
    try {
        const resApi = await getMemberApi();

        return resApi;
    } catch (error) {
        console.log(error.message);
    }
});

// detail member
export const detailMemberAction = createAsyncThunk('member/detail', async({id}) => {
    try {
        const resApi = await detailMemberApi({ id });

        return resApi;
    } catch (err) {
        console.log(err.message);
        throw err;
    }
})

// manambahkan data member
export const addMemberAction = createAsyncThunk('member/post', async({name,codeMember,phoneNumber,expired,duration,noKwitansi}) => {
    try {
        const resApi = await addMemberApi({name,codeMember,phoneNumber,expired,duration,noKwitansi});
        return resApi;
    } catch (err) {
        console.log(err.message);
        throw err;
    }
})

// hapus data member
export const deleteMemberAction = createAsyncThunk('member/delete', async ({ id }) => {
    try{
        const resApi = await deleteMemberApi({id});

        return resApi;
    } catch (err) {
        console.log(err.message);
        throw err;
    }
})

// edit data member
export const editMemberAction = createAsyncThunk('member/edit', async ({ name, codeMember, phoneNumber, expired, duration, noKwitansi, id }) => {
    try {
        const resApi = await editMemberApi({ name, codeMember, phoneNumber, expired, duration, noKwitansi, id });

        return resApi;
    } catch (err) {
        console.log(err.message);
        throw err;
    }
})

//search data member
export const searchMemberAction = createAsyncThunk('member/search', async(val) => {
    try {
        const resApi = await searchMemberApi(val);
        return resApi;
    } catch(err) {
        console.log(err.message);
        throw err;
    }
});