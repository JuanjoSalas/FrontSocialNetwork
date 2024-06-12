import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo } from '../../features/auth/authSlice';
import { useParams } from 'react-router-dom';
import wallpaper from "../../assets/img/wallpaper.png"
import "./Profile.scss"

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
    <div className='container-card'>
      <div className='border-card'>
        <div class="card">
          <div className="card__img"><img className="wallpaper" src= {wallpaper}/></div>
          <div className="card__avatar"><img className="img__avatar" src="https://images.stockcake.com/public/f/8/c/f8c9ddb6-a4aa-4025-b071-643ab3a359da/stylish-urban-fashion-stockcake.jpg" alt="" /></div>
          <div className="card__title">{user.firstname} {user.lastname}</div>
          <div className="card__subtitle">{user.username}</div>
          <div className="card__subtitle">{user.email}</div>
          <div className="card__subtitle">{user.birthday ? formatBirthday(user.birthday) : ''}</div>
          {user.PostIds && user.PostIds.length > 0 ? (
            user.PostIds.map(post => (
              <div key={post._id}>
                <h3>{post.title}</h3>
                <img className="image" src="https://images.stockcake.com/public/2/6/a/26a3fd95-08ee-4b93-b506-d6dfc85c0414_large/mountain-biking-adventure-stockcake.jpg" alt="" />
                <p>{post.body}</p>
              </div>
            ))
          ) : (
            <p>No posts available</p>
          )}
        </div>
      </div>
    </div>

  )
}

export default Profile
