import React from 'react'
import "./Navbar.css"
import {Link  } from "react-router-dom"
import { AiOutlineHome } from "react-icons/ai";
import {MdExplore} from "react-icons/md"
import {BsFillBookmarkFill} from "react-icons/bs"
import {CgProfile} from "react-icons/cg"

const Navbar = () => {
  return (
    <div className='Navbar'>
      <ul className='Navbar_items'>
        <Link to = "/home"><li><AiOutlineHome/> Home</li> </Link>
        <Link to = "/home/explore"><li><MdExplore/>Explore</li></Link>
        <Link to = "/home/bookmark"><li><BsFillBookmarkFill/>Bookmark</li></Link>
        <Link to = "/home/profile"><li><CgProfile/>Profile</li></Link>
        <button>Create a new post</button>
        <br/>
        <button>Logout</button>
      </ul>
     
      <div>
        <h2>John Wick</h2>
      </div>
    </div>

  )
}

export default Navbar