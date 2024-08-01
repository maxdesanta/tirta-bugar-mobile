import { createSlice } from '@reduxjs/toolkit';
import { addMemberAction, deleteMemberAction, getMemberAction, editMemberAction, detailMemberAction, searchMemberAction } from '../actions/MemberAction';

const initialState = {
    isLoading: false,
    isError: false,

    isGetMember: [],
    isAddMember: null,
    isDeleteMember: false,
    isEditMember: null,
    isDetailMember: [],
    isSearchMember: []
}

const MemberSlice = createSlice({
    name: 'memberSlice',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMemberAction.fulfilled, (state, action) => {
                state.isGetMember = action.payload;
                state.isLoading = false;
            })
            .addCase(getMemberAction.rejected, (state, action) => {
                state.isMemberPacket = [];
                state.isLoading = false;
                state.isError = action.error.message;
            })
            .addCase(detailMemberAction.fulfilled, (state, action) => {
                state.isDetailMember = action.payload;
                state.isLoading = false;
            })
            .addCase(detailMemberAction.rejected, (state, action) => {
                state.isDetailMember = [];
                state.isLoading = false;
                state.isError = action.error.message;
            })
            .addCase(addMemberAction.fulfilled, (state, action) => {
                state.isAddMember = action.payload;
                state.isGetMember.push(action.payload);
                state.isLoading = false;
            })
            .addCase(addMemberAction.rejected, (state, action) => {
                state.isAddMember = null;
                state.isLoading = false;
                state.isError = action.error.message;
            })
            .addCase(deleteMemberAction.fulfilled, (state, action) => {
                state.isDeleteMember = action.payload;
                state.isGetMember = state.isGetMember.filter(m => m.id_produk !== action.payload);
                state.isLoading = false;
            })
            .addCase(deleteMemberAction.rejected, (state, action) => {
                state.isDeleteMember = false;
                state.isLoading = false;
                state.isError = action.error.message;
            })
            .addCase(editMemberAction.fulfilled, (state, action) => {
                state.isEditMember = action.payload;
                state.isLoading = false;
            })
            .addCase(editMemberAction.rejected, (state, action) => {
                state.isEditMember = null;
                state.isLoading = false;
                state.isError = action.error.message;
            })
            .addCase(searchMemberAction.fulfilled, (state, action) => {
                state.isSearchMember = action.payload;
                state.isLoading = false;
            })
            .addCase(searchMemberAction.rejected, (state, action) => {
                state.isSearchMember = [];
                state.isLoading = false;
                state.isError = action.error.message;
            })
    }
})

export default MemberSlice.reducer;