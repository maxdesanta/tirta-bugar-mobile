import { createSlice } from '@reduxjs/toolkit';
import { getPacketAction } from '../actions/PacketAction';

const initialState = {
    isLoading: false,
    isError: false,

    isGetPacket: []
}

const PacketSlice = createSlice({
    name: 'packetSlice',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getPacketAction.fulfilled, (state, action) => {
                state.isGetPacket = action.payload;
                state.isLoading = false;
            })
            .addCase(getPacketAction.rejected, (state, action) => {
                state.isGetPacket = [];
                state.isLoading = false;
                state.isError = action.error.message;
            })

    }
})

export default PacketSlice.reducer;