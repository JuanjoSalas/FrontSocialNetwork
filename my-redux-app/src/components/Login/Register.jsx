import React, { useState } from 'react'
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
    const onChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log('formData',formData)
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