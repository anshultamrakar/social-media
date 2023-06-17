import { createContext } from "react";
import axios from "react"
import { useState, useEffect } from "react";

const DataContext = createContext()

 export const DataProvider = ({children}) => {

  const [feeds, setFeeds] = useState([]);
  const [bookmark , setBookmarkFeed] = useState([])
  const [isLoading, setIsloading] = useState(true);

  
  return(
    <DataContext.Provider value = {{feeds , isLoading, 
    setIsloading , setFeeds , bookmark , setBookmarkFeed}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext;