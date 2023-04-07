import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
    users: [],
    isloading: true,
    error: null,
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: {},
});

export default usersSlice.reducer;