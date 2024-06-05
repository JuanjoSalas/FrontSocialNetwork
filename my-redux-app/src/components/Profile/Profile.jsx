import React from 'react'
import { useSelector } from 'react-redux'

const formatBirthday = (isoDate) => {
  const date = new Date(isoDate);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};


const Profile = () => {
  const {user} = useSelector((state) => state.auth);
  
  return (
    <div>
      <p>Name: {user.firstname}</p>
      <p>Lastname: {user.lastname}</p>
      <p>Nick: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Birthdate: {formatBirthday(user.birthday)}</p>
    </div>
  )
}

export default Profile
