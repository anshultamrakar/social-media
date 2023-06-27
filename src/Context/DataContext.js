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
   console.log("hello")
   }

 

 
   
   const handleBookmark = (id) => {
     const bookmarkFeed = feeds.map((feed) => feed.id === id ? { ...feed, bookmarked: !feed.bookmarked } : feed);
     setFeeds(bookmarkFeed);
     const bookmarkPost = bookmarkFeed.filter((feed) => feed.bookmarked === true);
     setBookmarkFeed(bookmarkPost)
   };


 

  return(
    <DataContext.Provider value = {{feeds , isLoading , handleBookmark , handleAddNewPost,
    setIsloading , setFeeds , bookmark , setBookmarkFeed , content , setContent}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext;