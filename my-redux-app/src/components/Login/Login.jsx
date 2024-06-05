import "./Login.scss"
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../features/auth/authSlice"

const Login = () => {
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })
    
    const {email,password} = formData
    const {isSuccess, isError, msg} = useSelector((state)=>state.auth)

    useEffect(() => {
        if (isSuccess) {
            navigate("/");
        }
        dispatch(reset());
    }, [isSuccess, navigate, dispatch]);


    const onChange = (e)=>{
        setFormData((prevState)=> ({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
    }
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
        console.log('formData',formData)
        dispatch(login(formData))

        
    }
  return (
    <form onSubmit={onSubmit}>
        <input type="email" name="email" placeholder="Email" value={email} onChange={onChange}/>
        <input type="password" name="password" placeholder="Password" value={password} onChange={onChange}/>
        <button type="submit">Login</button>
    </form>
  )
}
export default Login
