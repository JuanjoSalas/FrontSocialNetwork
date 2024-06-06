import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "./postsService";

const initialStage = {
    posts:[]
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
        builder
            .addCase(getPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
            })
    },
});

export default PostsSlice.reducer;