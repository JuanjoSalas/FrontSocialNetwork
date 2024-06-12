import React from 'react';
import { useSelector } from 'react-redux';

const Comment = () => {
  const { post } = useSelector(state => state.posts); 
  if (!post || !post.CommentIds ) {
    return <div>No comments yet</div>; 
  }

  return (
    <div>
      {post.CommentIds.map(comment => ( 
        <div key={comment._id}>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Comment;
