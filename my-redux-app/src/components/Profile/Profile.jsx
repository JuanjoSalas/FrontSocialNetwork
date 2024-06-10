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
  if(!user) return <p>cargando...</p>
  
  return (
    <div class="card">
      <div class="bg"></div>
      <div class="blob"></div>
      <div class="content">
        <p><strong>Name:</strong> {user.firstname}</p>
        <p><strong>Lastname:</strong> {user.lastname}</p>
        <p><strong>Nick:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Birthdate:</strong> {user.birthday ? formatBirthday(user.birthday) : ''}</p>
      </div>
    </div>
  );
  
}

export default Profile
