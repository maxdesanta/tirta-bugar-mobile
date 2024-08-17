import { configureStore } from '@reduxjs/toolkit';

// import slice
import PacketSlice from './slices/PacketSlice';
import MemberSlice from './slices/MemberSlice';
import MeetSlice from './slices/MeetSlice';

const store = configureStore({
    reducer: {
        packet: PacketSlice,
        member: MemberSlice,
        meet: MeetSlice
    },
});

export default store;