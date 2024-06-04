import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: user,
    token: token
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {}
})



export default authSlice.reducer;