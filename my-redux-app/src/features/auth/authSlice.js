import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import authService from "./authService";

const token = localStorage.getItem("token") || "";
const user = JSON.parse(localStorage.getItem("user")) || null;

const initialState = {
    user: user,
    token: token,
    isSuccess: false,
    isError: false,
    msg: "",
};


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) =>{
            state.isSuccess = false;
            state.isError = false; 
            state.msg = "";
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(register.fulfilled, (state, action) => {
            state.isSuccess = true;
            state.message = action.payload.msg;
          })
        .addCase(register.rejected, (state, action) => {
            state.isSuccess = false;
            state.isError = true;
            state.message = action.payload;
          });
    } 

})



export const register = createAsyncThunk(
    "auth/register",
    async (user, thunkAPI) => {
      try {
        console.log('1');
        return await authService.register(user);
      } catch (error) {
        console.error(error);
        console.log('2');

        const msgError = error.response.data.messages[0]
        return thunkAPI.rejectWithValue(msgError); 
      }
    }
  );



export default authSlice.reducer;
export const { reset } = authSlice.actions;