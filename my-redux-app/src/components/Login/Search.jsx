import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getUserByUserName } from '../../features/auth/authSlice';
import Profile from './Profile';


const Search = () => {
    const {username} = useParams();
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getUserByUserName(username))
    },[username]);
  return (
    <div><Profile/></div>
  )
}

export default Search