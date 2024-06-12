import React, { useEffect } from "react";
import { useSelector, useDispatch  } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostById } from "../../features/posts/postsSlice";
import Comment from "../Comment/Comment";
import Comments from "../Comments/Comments";



const PostDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { post } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(getPostById(id));
    }, [id]);

    return ( 
    <div>
    <h1>PostDetail</h1>
    <p>Titulo: {post.title}</p> 
    <p>Body: {post.body}</p>
    <div>
        <Comments/>
    </div>
    </div>

    
    );
};

export default PostDetail;