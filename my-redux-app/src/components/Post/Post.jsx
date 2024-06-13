import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Post.scss"
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import CreatePost from "../CreatePost/CreatePosts";
import { dislike, getPosts, like } from "../../features/posts/postsSlice";

const Post = () => {
    const { posts } = useSelector((state) => state.posts);
    const {user} = useSelector ((state)=> state.auth); 
    const dispatch = useDispatch();
    const post = posts?.map((post) => {
        const isAlreadyLiked = post.LikeIds?.includes(user._id);
        return (
            <div className="post" key={post._id}>
                <Link to={"/post/" + post._id}>
                    <p>{post.title}</p>
                </Link>
                <span className="wish">{post.likes?.length}</span>
       {isAlreadyLiked ? (
          <HeartFilled  onClick={async()=>  {
           await dispatch(dislike(post._id))
        dispatch(getPosts())
        } 
         } />
        ) : (
          <HeartOutlined onClick={async()=> {
           await dispatch(like(post._id))
        dispatch(getPosts()) 
        }
         } />
        )}

            </div>
        );
    });
    return <div>{post}</div>;
};

    
export default Post