import React from 'react'
import "./Login.css"
import axios from 'axios'
import { useState , useEffect  } from 'react'
import {Link , useNavigate} from "react-router-dom"

const Login = () => {
    const navigate = useNavigate();
    const [username , setUsername] = useState("")
    const [pwd , setPwd] = useState("")
 
    const loginHandler = async(e) => {
      e.preventDefault()
      try{
         const {data} =  await axios.post("/api/auth/login" , {
          username : username , 
          pwd : pwd
         })
         console.log(data)
      }catch(err){
        console.error(err)
      }

    }
   
    const handleGuestLogin = (e) => {
        e.preventDefault()
        setUsername("anshul")
        setPwd("anshul@123")
        navigate("/home")
    }

  return (
    <div className='Login'>
       <form onSubmit={loginHandler} className='input_form'>
        <h1>Sign In</h1>
        <label>Username :</label>
        <input type = "text" placeholder='Enter username' autoComplete='off' value = {username} onChange={(e) => setUsername(e.target.value)} autoFocus/>
        <label>Password : </label>
        <input type = "password" placeholder = "Enter your password" value = {pwd} onChange={(e) => setPwd(e.target.value)}/>
        <button type='submit' autoComplete='off'  value = {pwd} onChange={(e) => setPwd(e.target.value)}>Login </button>
        <button onClick={handleGuestLogin}>Guest login</button>
        <p>Need an account ? </p>
        <Link to = "/register">Sign up</Link>
       </form>
    </div>
  )
}

export default Login