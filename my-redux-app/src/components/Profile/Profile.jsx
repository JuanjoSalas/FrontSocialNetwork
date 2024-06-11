import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo } from '../../features/auth/authSlice';
import { useParams } from 'react-router-dom';
import './Profile.scss'

const formatBirthday = (isoDate) => {
  const date = new Date(isoDate);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};


const Profile = () => {
  const {id} = useParams();
  const {user} = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getUserInfo(id));
},[])
  if(!user) return <p>Loading...</p>
  
  return (
    <div>
      <p>{user.firstname}</p>
      <p>{user.lastname}</p>
      <p>{user.username}</p>
      <p>{user.email}</p>
      <p>{user.birthday ? formatBirthday(user.birthday) : ''}</p>
      {user.PostIds && user.PostIds.length > 0 ? (
        user.PostIds.map(post => (
          <div key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
}

export default Profile
