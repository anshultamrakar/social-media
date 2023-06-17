import React from "react";
import axios from "axios"
import { useEffect } from "react";
import { AiOutlineHeart , AiFillHeart } from "react-icons/ai";
import { BiComment, BiShareAlt } from "react-icons/bi";
import { BsBookmark , BsFillBookmarkFill } from "react-icons/bs";
import Loader from "../../Components/Loader/Loader";
import { useContext } from "react";
import DataContext from "../../Context/DataContext";
import "./Feed.css";

const Feed = () => {
const {feeds , setFeeds ,isLoading , setIsloading , bookmark , setBookmarkFeed} = useContext(DataContext)

useEffect(() => {
  getAllpostsHandler()
}, []);


const handleLike = (id) => {
  const likedPosts = feeds.map(feed => feed.id === id ? {...feed , likes : {...feed.likes , isLiked : !feed.likes.isLiked}} : feed)
  setFeeds(likedPosts)
 }

 const handleBookmark = (id) => {
   const bookmarkFeed = feeds.map(feed => feed.id === id ? {...feed , bookmarked : !feed.bookmarked} : feed)
   setFeeds(bookmarkFeed)
   const bookmarkPost = feeds.filter(feed => feed.bookmarked === true)
   console.log(bookmarkPost)
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

  return (
    <div className="Feed">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <textarea />
          <button>Post</button>
          <h1>Latest posts</h1>
          <ul className="Feed_items">
            {feeds.map((feed) => (
              <li key={feed._id}>
                <p>{feed.content}</p>
                <ul className="Feed_Clicks">
                  <li onClick={() => handleLike(feed.id)}>{feed.likes.isLiked ? <AiFillHeart/> : <AiOutlineHeart/>}</li>
                  <li><BiComment /></li>
                  <li><BiShareAlt /></li>
                  <li onClick={() => handleBookmark(feed.id)}>
                    {!feed.bookmarked ? <BsBookmark /> : <BsFillBookmarkFill/> }
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Feed;
