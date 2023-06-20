import React from 'react'
import { useState } from 'react'
import "./Search.css"

const Search = () => {
    const [search , setSearch] = useState("")
  return (
    <div className='Search'>
        <form>
            <input type = "text" placeholder='Search' value = {search} onChange={(e) => setSearch(e.target.value)} />
        </form>
        <div>
          <ul className='follow_people'>
            <li className='follow_list'>
              <img src = "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.2.701769884.1684604185&semt=ais" width = "30" height= "30"/>
              <h4>@anshul487</h4>
              <button>Follow</button>
            </li>
            <li className='follow_list'>
            <img src = "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.2.701769884.1684604185&semt=ais" width = "30" height= "30"/>
              <h4>@anshul487</h4>
              <button>Follow</button>
            </li>
            <li className='follow_list'>
            <img src = "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.2.701769884.1684604185&semt=ais" width = "30" height= "30"/>
              <h4>@anshul487</h4>
              <button>Follow</button>
            </li >
            <li className='follow_list'>
            <img src = "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.2.701769884.1684604185&semt=ais" width = "30" height= "30"/>
              <h4>@anshul487</h4>
              <button>Follow</button>
            </li>
            
          </ul>
        </div>
    </div>
  )
}

export default Search