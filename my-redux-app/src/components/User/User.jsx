import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";


const User = () => {
    const {users, isLoading } = useSelector((state)=> state.auth);
    return (
        <div>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <Link to={"/userdetail/"+ user._id}>
              <p>{user.username}</p>
              </Link>
            </div>
          );
        })}
      </div>
  )
}


export default User