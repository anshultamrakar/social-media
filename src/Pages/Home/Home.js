import React from 'react'
import Feed from '../Feed/Feed'
import { useEffect } from 'react'
import Loader from '../../Components/Loader/Loader'
import "./Home.css"
import Navbar from '../../Components/Navbar.js/Navbar'
import Header from "../../Components/Header/Header"
import Search from '../../Components/Search/Search'
import { Outlet } from 'react-router-dom'
import { useContext } from 'react'
import DataContext from '../../Context/DataContext'



const Home = () => {
  const {isLoading , setIsloading} = useContext(DataContext)

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2000);
  }, []);

  return (
    <div className='Home'>
      {isLoading ? 
<Loader/>
      :(
        <>
         <Navbar/>
         <Outlet/>
         <Search/>
        </>
      )}
    
    </div>
  )
}

export default Home