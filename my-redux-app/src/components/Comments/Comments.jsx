import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createComment } from '../../features/comment/commentSlice';
import Comment from '../Comment/Comment';
import { useNavigate } from "react-router-dom";
import "./Comments.scss"

const Comments = () => {
	const { user } = useSelector((state) => state.auth);
	const { post } = useSelector((state) => state.posts);
	const [body, setBody] = useState('');

	const dispatch = useDispatch();
	const navigate = useNavigate(); 

	const onSubmit = (e) => {
		e.preventDefault();
		const comment = { body, PostId: post._id };
		dispatch(createComment(comment));
		setBody('');
		setTimeout(() => {
			
			navigate("/post/" + post._id );
		}, 1000);
	};

	return (
		<div>
			<div className='comment-box'><Comment /></div>
			<form onSubmit={onSubmit}>
				<div>
					<label>Comment:</label>
					<input
						type="text"
						value={body}
						onChange={(e) => setBody(e.target.value)}
					/>
				</div>
				<button className="button-comment" type="submit">Create Comment</button>
			</form>
		</div>
	);
};

export default Comments;
