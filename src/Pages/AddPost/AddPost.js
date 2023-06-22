import React from 'react'
import "./AddPost.css"
import { useState } from 'react'

const AddPost = () => {
    const [content , setContent] = useState("")
    
    const handleAddNewPost = () => {
        console.log("new post")
    }

  return (
    <div>
        <textarea placeholder="Write your post here" value = {content} onChange={(e) => setContent(e.target.value)} />
          <br/>
          <button onClick={handleAddNewPost}>Post</button>
    </div>
  )
}

export default AddPost