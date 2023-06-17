import React from 'react'
import { useState  } from 'react'
import "./Register.css"
import axios from 'axios'
import { Link } from 'react-router-dom'

const Register = () => {
  const [firstname , setFirstname] = useState("")
  const [validName , setValidName] = useState("")
  const [lastname , setLastname] = useState("")
  const [username , setUsername] = useState("")
  const [pwd , setPwd] = useState("")
  const [matchPwd , setMatchPwd] = useState("")
  const [success , setSuccess] = useState(false)
 
  const signupHandler = async (e) => {
   e.preventDefault()
   try{
    const {data} = await axios.post("/api/auth/signup", {
       username, 
       pwd,
       firstname , 
       lastname,
    })
    console.log(data.encodedToken)
   }catch(err){
    console.error(err)
   }

  }

  return (
    <div className='Register'>
      {success ? 
      <>
      <h1>Sucess</h1>
      <p>
        <Link to="/login">Sign In</Link>
       </p>
      </>
      :
      <form onSubmit = {signupHandler} className='register_form'>
      <h1>Sign up</h1>
       <label>First name :</label>
       <input type = "text" placeholder='Enter first name' autoComplete='off' value = {firstname} onChange={(e) => setFirstname(e.target.value)} autoFocus />
       <label>Last name : </label>
       <input  type = "text" placeholder='Enter last name' value = {lastname} onChange={(e) => setLastname(e.target.value)}/>
       <label>Email :</label>
       <input type = "text" placeholder='Enter email' value = {username} onChange={(e) => setUsername(e.target.value)}/>
       <label>Password :</label>
       <input  type = "password" placeholder='Enter password' value = {pwd} onChange={(e) => setPwd(e.target.value)}/>
       <label>Confirm password :</label>
       <input type = "password" placeholder='Confirm your password' value = {matchPwd} onChange={(e) => setMatchPwd(e.target.value)} /> 
       <button type = "submit">Sign up</button>
       <p>Already have a account ?</p>
       <Link to ="/login">Sign in </Link>
    </form>
      }
       
    </div>
  )
}

export default Register