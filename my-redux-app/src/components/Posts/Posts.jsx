import React, { useEffect } from "react"
import Post from "../Post/Post"
import { useDispatch, useSelector } from "react-redux"
import { getPosts, reset } from "../../features/posts/postsSlice"
import "./Posts.scss"
import CreatePost from "../CreatePost/CreatePosts"


const Posts = () => {
    const { isLoading } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, []);
    if (isLoading) {
        return <h1>Cargando posts...</h1>;
    }
    return (
        <div>
            <h1>Posts</h1>
            <CreatePost/>
            <Post/>
        </div>
    )
}

export default Posts