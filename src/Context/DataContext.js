import { createContext } from "react";
import axios from "react"
import { useState, useEffect } from "react";

const DataContext = createContext()

 export const DataProvider = ({children}) => {

  const [feeds, setFeeds] = useState([]);
  const [bookmark , setBookmarkFeed] = useState([])
  const [isLoading, setIsloading] = useState(true);

  
  const handleAddNewPost = async() => {
    try{
      const response = await axios.post("/api/posts")
      console.log(response)
    }catch(err){
     console.log(err)
    }
   }
 
   const handleLike = (id) => {
     const likedPosts = feeds.map((feed) => feed.id === id? { ...feed, likes: {...feed.likes, isLiked: !feed.likes.isLiked } }: feed);
     setFeeds(likedPosts);
   };
 
   
   const handleBookmark = (id) => {
     const bookmarkFeed = feeds.map((feed) => feed.id === id ? { ...feed, bookmarked: !feed.bookmarked } : feed);
     setFeeds(bookmarkFeed);
     const bookmarkPost = bookmarkFeed.filter((feed) => feed.bookmarked === true);
     setBookmarkFeed(bookmarkPost)
   };

  return(
    <DataContext.Provider value = {{feeds , isLoading, handleLike , handleBookmark , handleAddNewPost,
    setIsloading , setFeeds , bookmark , setBookmarkFeed}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext;