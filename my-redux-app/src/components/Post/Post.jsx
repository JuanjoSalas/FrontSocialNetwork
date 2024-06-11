import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Post.scss"
import CreatePost from "../CreatePost/CreatePosts";

const Post = () => {
    const { posts } = useSelector((state) => state.posts);
    const post = posts?.map((post) => {
        return (
            <div className="post" key={post._id}>
                <Link to={"/post/" + post._id}>
                    <p>{post.title}</p>
                </Link>
            </div>
        );
    });
    return <div>{post}</div>;
};

    
export default Post