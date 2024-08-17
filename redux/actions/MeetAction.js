import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMeetApi, getMeetMemberIdApi, addMeetApi, editMeetApi, resetMeetApi, deleteMeetApi } from "../../services/meetApi";

// menampilkan data meet action
export const getMeetAction = createAsyncThunk("meet/get", async () => {
    try {
        const resApi = await getMeetApi();
        return resApi;
    } catch (err) {
        console.log(err.message);
    }
});

// menampilkan data meet action berdasakarkan id member
export const getMeetMemberIdAction = createAsyncThunk("meet/getMemberId", async ({ id }) => {
    try {
        const resApi = await getMeetMemberIdApi({ id });
        console.log("Data API :", resApi);

        return resApi;
    } catch (err) {
        console.log(err.message);
    }
})

// menambahkan data meet
export const addMeetAction = createAsyncThunk("meet/add", async({ id }) => {
    try {
        const resApi = await addMeetApi({ id });
        return resApi;
    } catch (err) {
        console.log(err.message);
    }
})

// mengedit data meet
export const editMeetAction = createAsyncThunk("meet/edit", async ({ x1, x2, x3, x4, x5, x6, x7, x8, id }) => {
    try {
        const resApi = await editMeetApi({ x1, x2, x3, x4, x5, x6, x7, x8, id });
        
        return resApi;
    } catch(err){
        console.log(err.message);
    }
});

// menghapus data meet
export const deleteMeetAction = createAsyncThunk("meet/delete", async ({ id }) => {
    try {
        const resApi = await deleteMeetApi({ id });
        return resApi;
    } catch (err) {
        console.log(err.message);
    }
});

// mereset data meet
export const resetMeetAction = createAsyncThunk("meet/reset", async ({ id }) => {
    try {
        const resApi = await resetMeetApi({ id });
        return resApi;
    } catch (err) {
        console.log(err.message);
        
    }
});