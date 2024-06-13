import React from 'react';
import { useSelector } from 'react-redux';

const Comment = () => {
  const { post } = useSelector(state => state.posts); 
  if (post.CommentIds && post.CommentIds.length === 0 ) {
    return <div>No comments yet</div>; 
  }
  return (
    <div>
      {post.CommentIds && post.CommentIds.map(comment => ( 
        <div key={comment._id}>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Comment;
