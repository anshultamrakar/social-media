import React, { useState } from 'react'
import { useContext } from 'react'
import "./Bookmark.css"
import DataContext from '../../Context/DataContext'

const Bookmark = () => {
  const {bookmark} = useContext(DataContext)
  console.log(bookmark)
  return (
    <div className='Bookmark'>
        <h1>Bookmarkpage</h1>
        <ul>
          {bookmark.map(feed => (
            <li key = {feed.id}>
             <p>{feed.content}</p>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Bookmark