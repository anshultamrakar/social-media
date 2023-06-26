import React from 'react'
import "./Explore.css"

const Explore = () => {
  return (
    <div className='explore'>
        <h1>Explore page</h1>
        <div className='explore_tabs'>
          <button>For You</button>
          <button>Trending</button>
          <button>Technology</button>
          <button>Sports</button>
          <button>News</button>
        </div>
    </div>
  )
}

export default Explore