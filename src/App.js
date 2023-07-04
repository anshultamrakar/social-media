import React from 'react'
import "./index.css"
import {Routes , Route } from "react-router-dom"
import Register from './Pages/Authentication/Register';
import Login from "./Pages/Authentication/Login"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Feed from './Pages/Feed/Feed';
import Home from "./Pages/Home/Home"
import Explore from './Components/Explore/Explore';
import Header from './Components/Header/Header';
import Bookmark from './Components/Bookmark/Bookmark';
import UserProfile from './Pages/UserProfile/UserProfile';
import {DataProvider} from './Context/DataContext';
import AuthProvider from './Context/AuthContext';


function App() {
  return (
    <div>
      <DataProvider>
        <AuthProvider>
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
     <ToastContainer
        theme="colored"
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        style={{ fontSize: "1.4rem" }}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
       </AuthProvider>
     </DataProvider>
    </div>
  );
}

export default App;
