import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Post.scss"
import CreatePost from "../CreatePost/CreatePosts";

const Post = () => {
    const { posts } = useSelector((state) => state.posts);
    const post = posts?.map((post) => {
        return (
            <div className='container-post'>
                <div className='border-post'>
                    <div className="post" key={post._id}>
                        <Link className="link" to={"/post/" + post._id}>                    
                            <p className="detail-post">{post.title}</p>
                            <img className="image" src="https://images.stockcake.com/public/2/6/a/26a3fd95-08ee-4b93-b506-d6dfc85c0414_large/mountain-biking-adventure-stockcake.jpg" alt="" />
                            <p>{post.UserId}</p>
                        </Link>
                    </div>
                </div>
            </div>
        );
    });
    return <div>{post}</div>;
};

    
export default Post