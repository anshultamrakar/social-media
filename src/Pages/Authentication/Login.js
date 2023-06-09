import React from 'react'
import "./Login.css"
import axios from 'axios'
import { useState , useEffect  } from 'react'
import {AiFillEye , AiFillEyeInvisible} from "react-icons/ai"
import {Link , useNavigate} from "react-router-dom"

const Login = () => {
    const navigate = useNavigate();
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const [showPassword , setShowPassword] = useState(false)
 
    const loginHandler = async(e) => {
      e.preventDefault()
      try{
         const response =  await axios.post("/api/auth/login" , {
          username, 
          password
         })
         const accessToken = response?.data?.encodedToken
         localStorage.setItem("token" , accessToken)
      }catch(err){
        console.error(err)
      }
    }

    const handleGuestLogin = () => {
     setUsername("anshul")
     setPassword("anshul@123")
     navigate("/home")
    }
  
  return (
    <div className='Login'>
       <form onSubmit={loginHandler} className='input_form'>
        <h1>Sign In</h1>
        <label>Username :</label>
        <input type = "text" placeholder='Enter username' autoComplete='off' value = {username} onChange={(e) => setUsername(e.target.value)} autoFocus/>
        <label>Password : </label>
        <div className='password'>
        <input type = {!showPassword ? "password" : "text"} placeholder = "Enter your password" value = {password} onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={() => setShowPassword(!showPassword)}>{showPassword ? <AiFillEye/> : <AiFillEyeInvisible/>}</button>
        </div>
        
        <button type='submit' autoComplete='off'  value = {password} onChange={(e) => setPassword(e.target.value)}>Login </button>
        <button onClick={handleGuestLogin}>Guest login</button>
        <p>Need an account ? </p>
        <Link to = "/register">Sign up</Link>
       </form>
    </div>
  )
}

export default Login