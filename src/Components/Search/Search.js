import React from 'react'
import { useState } from 'react'
import "./Search.css"

const Search = () => {
    const [search , setSearch] = useState("")
  return (
    <div className='Search'>
        <form>
            <label>Search</label>
            <input type = "text" placeholder='Search' value = {search} onChange={(e) => setSearch(e.target.value)} />
        </form>
    </div>
  )
}

export default Search