import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users: [],
    isLoading: false,
    error: null,
};

const url = 'https://randomuser.me/api/?results=5';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (users, {rejectWithValue}) => {
    try {
        const response = await axios(url, users);
        console.log(response.data)
        return response.data;
    }
    catch (error) {
        rejectWithValue(error);
    }
})

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            const data = action.payload.results;
            // console.log(data)
            const newUsers = data.map((user) => (({
                id: user.cell,
                first: user.name.first,
                last: user.name.last,
            })))
            state.isLoading = false;
            state.users = newUsers;
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        })
    },
});

export default usersSlice.reducer;