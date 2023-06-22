import React from 'react'
import "./Navbar.css"
import {Link  } from "react-router-dom"
import { AiOutlineHome } from "react-icons/ai";
import {MdExplore} from "react-icons/md"
import {BsFillBookmarkFill} from "react-icons/bs"
import {FiLogOut} from "react-icons/fi"
import {CgProfile} from "react-icons/cg"

const Navbar = () => {

  const handleLogout = () => {
    console.log("logout kro be")
  }

  return (
    <div className='Navbar'>
      <ul className='Navbar_items'>
        <Link to = "/home"><li><AiOutlineHome/> Home</li> </Link>
        <Link to = "/home/explore"><li><MdExplore/>Explore</li></Link>
        <Link to = "/home/bookmark"><li><BsFillBookmarkFill/>Bookmark</li></Link>
        <Link to = "/home/profile"><li><CgProfile/>Profile</li></Link>
      </ul>
      <div className='user_profile'>
        <h3>Anshul Tamrakar</h3>
       <button onClick={handleLogout}><FiLogOut/></button> 
      </div>
    </div>

  )
}

export default Navbar