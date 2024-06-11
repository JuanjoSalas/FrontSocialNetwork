import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../features/posts/postsSlice';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        const postData = { title, body};
        dispatch(createPost(postData));
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label>Body:</label>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
            </div>
            <button type="submit">Create Post</button>
        </form>
    );
};

export default CreatePost;