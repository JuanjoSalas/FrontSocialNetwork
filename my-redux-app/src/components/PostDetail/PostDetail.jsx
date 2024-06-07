import React, { useEffect } from "react";
import { useSelector, useDispatch  } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostById } from "../../features/posts/postsSlice";

const PostDetail = () => {
    const { _id } = useParams();
    const dispatch = useDispatch();
    const { post } = useSelector((state) => state.posts);
    useEffect(() => {
        dispatch(getPostById(_id));
    }, []);

    return ( 
    <div>
    <h1>PostDetail</h1>
    <p>{post.tittle}</p>
    <p>{post.body}</p>
    </div>
    );
};

export default PostDetail;