import React  from "react";
import axios from "axios";
import { useEffect , useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiComment, BiShareAlt } from "react-icons/bi";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import Loader from "../../Components/Loader/Loader";
import AddPost from "../AddPost/AddPost";
import { useContext } from "react";
import DataContext from "../../Context/DataContext";
import "./Feed.css";
import { Link } from "react-router-dom";

const Feed = () => {
  const {feeds,setFeeds,isLoading,setIsloading , handleBookmark , handleAddNewPost , setContent ,content} = useContext(DataContext);
  const [users, setUsers] = useState([])


   
  useEffect(() => {
    getAllpostsHandler();
    getAllUsersHandler()
  }, []);


  const getAllUsersHandler = async() => {
    try{
     const {data} = await axios.get("/api/users")
     setUsers(data.users , "users")
    }catch(err){
      console.log(err)
    }
  }



  const getAllpostsHandler = async () => {
    try {
      const { data } = await axios.get("/api/posts");
      setFeeds(data.posts);
      setIsloading(false);
    } catch (err) {
      console.error(err);
    }
  };


  const handleLike = async(postId) => {
     try{
      const token = localStorage.getItem("token");
      const response = await axios.post(`/api/posts/like/${postId}` , {} , {
        headers : {
          authorization: token
        }
      })
      console.log(response?.data?.posts)
     
     }catch(err){
      console.log(err)
     }
  }

  return (
    <div className="Feed">
      {isLoading ? (
        <Loader />
      ) : (
        <>
        <div className="Feed_posting">
        <AddPost/>
        </div>
        
          <h2>Latest posts</h2>
          <ul className="Feed_items">
            {feeds.map((feed) => (
              <div className="Feed_post">
                <li className="FeedList" key={feed._id}>
                  <div className="profile_image">
                    <img
                      src= {feed.img}
                      width="40"
                      height="40"
                    />
                  </div>
                  <div className="Feed_content">
                    <h4>
                      {feed.username} <span>@anshultamrakar487</span>
                      <span>1 min</span>
                    </h4>
                    <p>{feed.content}</p>
                    <ul className="Feed_Clicks">
                      <li onClick={() => handleLike(feed._id)}>
                        {feed.likes.isLiked ? (
                          <AiFillHeart />
                        ) : (
                          <AiOutlineHeart />
                        )}
                      </li>
                      <li>
                        <BiComment />
                      </li>
                      <li>
                        <BiShareAlt />
                      </li>
                      <li onClick={() => handleBookmark(feed.id)}>
                        {!feed.bookmarked ? (
                          <BsBookmark />
                        ) : (
                          <BsFillBookmarkFill />
                        )}
                      </li>
                    </ul>
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Feed;
