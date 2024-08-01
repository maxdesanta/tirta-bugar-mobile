import { configureStore } from '@reduxjs/toolkit';

// import slice
import PacketSlice from './slices/PacketSlice';
import MemberSlice from './slices/MemberSlice';

const store = configureStore({
    reducer: {
        packet: PacketSlice,
        member: MemberSlice
    },
});

export default store;