import React from 'react'
import "./Login.css"
import axios from 'axios'
import { useState , useEffect  } from 'react'
import {Link , useNavigate} from "react-router-dom"

const Login = () => {
    const navigate = useNavigate();
    const [email , setEmail] = useState("")
    const [pwd , setPwd] = useState("")
 
    const loginHandler = async(e) => {
      e.preventDefault()
      try{
         const {data} =  await axios.post("/auth/login" , {
          email : email , 
          pwd : pwd
         })
         console.log(data)
      }catch(err){
        console.error(err)
      }

    }
   
    const handleGuestLogin = (e) => {
        e.preventDefault()
        setEmail("adarshbalika")
        setPwd("adarshbalika123")
        navigate("/home")
    }

  return (
    <div className='Login'>
       <form onSubmit={loginHandler} className='input_form'>
        <h1>Sign In</h1>
        <label>Email :</label>
        <input type = "text" placeholder='Enter email address' autoComplete='off' value = {email} onChange={(e) => setEmail(e.target.value)} autoFocus/>
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