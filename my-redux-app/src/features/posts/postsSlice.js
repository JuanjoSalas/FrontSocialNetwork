import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "./postsService";

const initialStage = {
    posts:[],
    isLoading: false,
    post:{}
};

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
    try {
        return await postsService.getPosts();
    } catch (error) {
        console.error(error);
    }
});

export const PostsSlice = createSlice({
    name: "posts",
    initialstage,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.isLoading =  false;
        });
        builder.addCase(getPosts.pending, (state) => {
            state.isLoading = true;
        })          
    },
});

export const { reset } = PostsSlice.actions;
export default PostsSlice.reducer;