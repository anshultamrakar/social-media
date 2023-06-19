import React from 'react'
import "./index.css"
import {Routes , Route } from "react-router-dom"
import Register from './Pages/Authentication/Register';
import Login from "./Pages/Authentication/Login"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Feed from './Pages/Feed/Feed';
import Home from "./Pages/Home/Home"
import Explore from './Components/Explore/Explore';
import Bookmark from './Components/Bookmark/Bookmark';
import UserProfile from './Pages/UserProfile/UserProfile';
import {DataProvider} from './Context/DataContext';


function App() {
  return (
    <div>
      <DataProvider>
      <Routes>
      <Route path = "/register" element = {<Register/>}/>
      <Route path = "/" element = {<Login/>}/>
      <Route path = "/feed" element = {<Feed/>}/>
      <Route path = "/home" element = {<Home/>}>
        <Route path = "/home" element={<Feed/>}/>
        <Route path = "/home/explore" element = {<Explore/>}/>
        <Route path = "/home/bookmark" element = {<Bookmark/>}/>
        <Route path = "/home/profile" element = {<UserProfile/>}/>
      </Route>
     </Routes>
     </DataProvider>
    </div>
  );
}

export default App;
