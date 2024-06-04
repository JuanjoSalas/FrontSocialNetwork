import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: user,
    token: token
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {}
})

const register = createAsyncThunk('auth/register', async(user)=>{
    console.log(user);
})

export default authSlice.reducer;