import { createSlice } from "@reduxjs/toolkit";
import { getMeetAction, getMeetMemberIdAction, addMeetAction, editMeetAction, resetMeetAction, deleteMeetAction } from "../actions/MeetAction";

const initialState = {
    isLoading: false,
    isError: false,

    isGetMeet: [],
    isDetailMeet: [],
    isAddMeet: null,
    isEditMeet: null,
    isDetailMeet: false,
    isResetMeet: false,
    isDeleteMeet: false
}

const MeetSlice = createSlice({
    name: 'meetSlice',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMeetAction.fulfilled, (state, action) => {
                state.isGetMeet = action.payload;
                state.isLoading = false;
            })
            .addCase(getMeetAction.rejected, (state, action) => {
                state.isGetMeet = [];
                state.isLoading = false;
                state.isError = action.error.message;
            })
            .addCase(getMeetMemberIdAction.fulfilled, (state, action) => {
                state.isDetailMeet = action.payload;
                state.isLoading = false;
            })
            .addCase(getMeetMemberIdAction.rejected, (state, action) => {
                state.isDetailMeet = [];
                state.isLoading = false;
                state.isError = action.error.message;
            })
            .addCase(addMeetAction.fulfilled, (state, action) => {
                state.isAddMeet = action.payload;
                state.isGetMeet.push(action.payload);
                state.isLoading = false;
            })
            .addCase(addMeetAction.rejected, (state, action) => {
                state.isAddMeet = null;
                state.isLoading = false;
                state.isError = action.error.message;
            })
            .addCase(editMeetAction.fulfilled, (state, action) => {
                state.isEditMeet = action.payload;
                state.isLoading = false;
            })
            .addCase(editMeetAction.rejected, (state, action) => {
                state.isEditMeet = null;
                state.isLoading = false;
                state.isError = action.error.message;
            })
            .addCase(deleteMeetAction.fulfilled, (state, action) => { 
                state.isDeleteMeet = action.payload;
                state.isGetMeet = state.isGetMeet.filter(m => m.id_member !== action.payload);
                state.isLoading = false;
            })
            .addCase(deleteMeetAction.rejected, (state, action) => {
                state.isDeleteMeet = false;

            })
            .addCase(resetMeetAction.fulfilled, (state, action) => {
                state.isResetMeet = action.payload;
                state.isLoading = false;
                state.isError = action.error.message;
            })
            .addCase(resetMeetAction.rejected, (state, action) => {
                state.isResetMeet = false;
                state.isLoading = false;
                state.isError = action.error.message;
            })
    }
})

export default MeetSlice.reducer;