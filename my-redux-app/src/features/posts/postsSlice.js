import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "./postsService";
import post from "../../components/Post/Post"

const initialState = {
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

export const getPostById = createAsyncThunk("posts/getPostById", async (_id) => {
    try {
        return await postsService.getPostById(_id);
    } catch (error) {
        console.error(error);
        }
    })

export const PostsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.posts = action.payload.posts;
            state.isLoading =  false;
        });
        builder.addCase(getPosts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getPostById.fulfilled, (state, action) => {
            state.post = action.payload;
        });          
    },
});

export const { reset } = PostsSlice.actions;
export default PostsSlice.reducer;