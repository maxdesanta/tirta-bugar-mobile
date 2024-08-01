import { getPacketApi } from "../../services/packetApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

// get packet action
export const getPacketAction = createAsyncThunk('packets/get', async() => {
    try {
        const resApi = await getPacketApi();

        return resApi;
    } catch (err) {
        console.log(err.message);
    }
})