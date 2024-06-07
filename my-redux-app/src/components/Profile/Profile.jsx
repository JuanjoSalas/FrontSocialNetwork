import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo } from '../../features/auth/authSlice';
import { useParams } from 'react-router-dom';

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
    <div>
      <p>Name: {user.firstname}</p>
      <p>Lastname: {user.lastname}</p>
      <p>Nick: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Birthdate:{user.birthday ? formatBirthday(user.birthday) : ''}</p>
    </div>
  )
}

export default Profile
