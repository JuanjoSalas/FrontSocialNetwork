import React, { useEffect } from "react"
import Post from "../Post/Post"
import { useDispatch } from "react-redux"
import { getPosts } from "../../features/posts/postsSlice"
import "./Posts.scss"

const Posts = () => {
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
            <Post/>
        </div>
    )
}

export default Posts