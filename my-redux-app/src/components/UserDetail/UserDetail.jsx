import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getUserById } from '../../features/auth/authSlice';

const UserDetail = () => {
    const {id} = useParams();
    const {user} = useSelector((state)=> state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserById(id));
      }, []);
      if(!user) return <p>cargando...</p>

    return (
    <div>
        <h3>UserDetail</h3>
      <p>Nombre: {user.firstname}</p>
      <p>Apellido: {user.lastname}</p>
      <p>Usuario: {user.username}</p>
    </div>
  )
}

export default UserDetail