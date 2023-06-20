import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiComment, BiShareAlt } from "react-icons/bi";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import Loader from "../../Components/Loader/Loader";
import { useContext } from "react";
import DataContext from "../../Context/DataContext";
import "./Feed.css";

const Feed = () => {
  const {feeds,setFeeds,isLoading,setIsloading , handleLike , handleBookmark , handleAddNewPost} = useContext(DataContext);
   const [content , setContent] = useState("")
   
  useEffect(() => {
    getAllpostsHandler();
  }, []);

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
         <div className="Feed_posting">
          <textarea placeholder="Write your post here" value = {content} onChange={(e) => setContent(e.target.value)} />
          <br/>
          <button onClick={handleAddNewPost}>Post</button>
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
                      <li onClick={() => handleLike(feed.id)}>
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
