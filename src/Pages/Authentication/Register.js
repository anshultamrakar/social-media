import React from 'react'
import { useState  } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import "./Register.css"
import axios from 'axios'
import { Link } from 'react-router-dom'

const Register = () => {
  const {handleSignUp , matchPwd , setMatchPwd , firstname , setFirstname , lastname ,setLastname , username , setUsername , setPassword ,  password , success   } = useContext(AuthContext)


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
      <form onSubmit = {handleSignUp} className='register_form'>
      <h1>Sign up</h1>
       <label>First name :</label>
       <input type = "text" placeholder='Enter first name' autoComplete='off' value = {firstname} onChange={(e) => setFirstname(e.target.value)}  autoFocus required />
       <label>Last name : </label>
       <input  type = "text" placeholder='Enter last name' value = {lastname} onChange={(e) => setLastname(e.target.value)} required/>
       <label>Username :</label>
       <input type = "text" placeholder='Enter username' value = {username} onChange={(e) => setUsername(e.target.value)} required/>
       <label>Password :</label>
       <input  type = "password" placeholder='Enter password' value = {password} onChange={(e) => setPassword(e.target.value)} required/>
       <label>Confirm password :</label>
       <input type = "password" placeholder='Confirm your password' value = {matchPwd} onChange={(e) => setMatchPwd(e.target.value)}required /> 
       <button type = "submit">Sign up</button>
       <p>Already have a account ?</p>
       <Link to ="/">Sign in </Link>
    </form>
      }
       
    </div>
  )
}

export default Register