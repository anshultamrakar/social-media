import { createContext } from "react";
import axios from "react"
import { useState, useEffect } from "react";
import { BiLike } from "react-icons/bi";
import {  toast } from 'react-toastify';

const DataContext = createContext()

 export const DataProvider = ({children}) => {

  const [feeds, setFeeds] = useState([]);
  const [bookmark , setBookmarkFeed] = useState([])
  const [isLoading, setIsloading] = useState(true);
  const [content , setContent] = useState("")
  
  
  const handleAddNewPost = async() => {
    try{
    const response = await axios.post("/api/posts" , )
    }catch(err){
     console.log(err)
    }
   }

 
 
   const handleLike = async(postId) => {
    try{
      const token = localStorage.getItem("token");
      console.log(token)
      const auth = {
        headers: {
          authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxZjY5YjM5MC0zZDQzLTRlYTQtOTM1Ny02YjM4YzA4ODI2Y2UiLCJ1c2VybmFtZSI6ImFuc2h1bEBnbWFpbC5jb20ifQ.yDVrb2vO2sW4aVsX7mSwFsR7FPdB3EN-lRaib6vTjdw",
        }
      }
      const response = await axios.post(`/api/like/${postId}` , {} , auth)
      console.log(response)
    }catch(err){
      console.log(err)
    }
   };
 
   
   const handleBookmark = (id) => {
     const bookmarkFeed = feeds.map((feed) => feed.id === id ? { ...feed, bookmarked: !feed.bookmarked } : feed);
     setFeeds(bookmarkFeed);
     const bookmarkPost = bookmarkFeed.filter((feed) => feed.bookmarked === true);
     setBookmarkFeed(bookmarkPost)
   };


 

  return(
    <DataContext.Provider value = {{feeds , isLoading, handleLike , handleBookmark , handleAddNewPost,
    setIsloading , setFeeds , bookmark , setBookmarkFeed , content , setContent}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext;