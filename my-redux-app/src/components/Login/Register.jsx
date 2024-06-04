import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register, reset } from '../../features/auth/authSlice'
import { notification } from "antd";



//import './Register.scss'

const Register = () => {
    const [formData , setFormData] = useState({
        username:"",
        email:"",
        birthday:"",
        firstname:"",
        lastname:"",
        password:"",
        password2:""
    })
    const {username,email,password,birthday,firstname,lastname,password2} = formData
    const { isSuccess, msg, isError } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isSuccess) {
          notification.success({
            message: "Success",
            description: msg,
          });
        }
        if (isError) {
          notification.error({
            message: "Error!!!",
            description: msg,
          });
        }
        dispatch(reset())
      }, [isSuccess, msg, isError]);

    const dispatch = useDispatch()

    const onChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(register(formData))
    }    

   return (
    <form onSubmit={onSubmit}>
    <input
      type="text"
      name="firstname"
      value={firstname}
      onChange={onChange}
      placeholder="Insert your name"
    />
      <input
      type="text"
      name="lastname"
      value={lastname}
      onChange={onChange}
      placeholder="Insert your lastname"
    />
      <input
      type="text"
      name="username"
      value={username}
      onChange={onChange}
      placeholder="Insert your username"
    />
      <input
      type="date"
      name="birthday"
      value={birthday}
      onChange={onChange}
      placeholder="Insert your birthday"
    />
    <input
      type="email"
      name="email"
      value={email}
      onChange={onChange}
      placeholder="Insert your email"
    />
    <input
      type="password"
      name="password"
      value={password}
      onChange={onChange}
      placeholder="Insert your password"
    />
    <input
      type="password"
      name="password2"
      value={password2}
      onChange={onChange}
      placeholder="Insert your password"
    />
    <button type="submit">Register</button>
  </form>
    
  )
}


export default Register