import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserById } from '../../features/auth/authSlice';
import wallpaper from "../../assets/img/wallpaper.png"

const UserDetail = () => {
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById(id));
  }, [id]);

  if (!user) return <p>cargando...</p>;


  return (
    <div className='container-card'>
      <div className='border-card'>
        <div className="card">
          <div className="card__img"><img className="wallpaper" src= {wallpaper}/></div>
          <div className="card__avatar"><img className="img__avatar" src="https://bit.ly/dan-abramov" alt="" /></div>
          <div className="card__title">{user.firstname} {user.lastname}</div>
          <div className="card__subtitle">{user.username}</div>
          <p className='icon-posts'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAOhJREFUSEvtltENgzAMRH2btJuUTcomHYVOUjYpm1xlRKQQShIFtxFS8hvHz2cncJBKC5W4sgsmeReRi0FhI4AxzLMBk1TYywjqeAOA3od/Ayv0ZqDUTzEBuKbAXAK0Rd2RAkiqABWiq/NbvlIcCywpwARM8rHAtSOp1zBfKCuwG0GO+Lmt5wbnyAxjTBQ3cE4HWqvP9eXKmWl7TqW3uqS7sTPZv8Vq4ElEnoZ0tT+ac14xI9ADGAzBq1QhWI3ee4nYGDTLIv5l9uKeS3d/ZG/TYA/uLK6Fqde0+5fLcoapXCm3mDpfvP8BmR/fH6KPn9UAAAAASUVORK5CYII="/></p>
          {user.PostIds && user.PostIds.length > 0 ? (
            user.PostIds.map(post => (
              <div className='container-profile-post'>
              <div key={post._id}>
                <p className="detail-post"> {post.title}</p>
                <img className="image" src="https://images.stockcake.com/public/2/6/a/26a3fd95-08ee-4b93-b506-d6dfc85c0414_large/mountain-biking-adventure-stockcake.jpg" alt="" />
                <p className="body">{post.body}</p>
                <p>{Comment}</p>
              </div>
              </div>
            ))
          ) : (
            <p className='no-post'>No posts available</p>
          )}
        </div>
      </div> 
    </div>
  );
};

export default UserDetail;
