import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    isLoading: false,
    error: null,
};

const url = 'https://randomuser.me/api/?results=5';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, {rejectWithValue}) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (error) {
        return rejectWithValue("Couldn't fetch data");
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
            const newUsers = data.map((user) => (({
                id: user.cell,
                first: user.name.first,
                last: user.name.last,
            })))
            state.isLoading = false;
            state.users = newUsers;
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    },
});

export default usersSlice.reducer;