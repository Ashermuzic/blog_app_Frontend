import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Skeleton from "../components/Skeleton";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://asher-blog.onrender.com/api/posts/${cat}` // OVER HERE IN THE POST
        );
        setPosts(res.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  // Define your default image URL
  const defaultImg = "../upload/404_1.png"; // Replace with the actual path

  return (
    <div className="home">
      {isLoading ? (
        <Skeleton />
      ) : (
        <div className="posts">
          {posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="img">
                <img
                  src={`../upload/${post.img}`}
                  alt=""
                  onError={(e) => {
                    // Set the src attribute to the default image URL on error
                    e.target.src = defaultImg;
                  }}
                />
              </div>
              <div className="content">
                <Link className="link" to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                  <p>{getText(post.desc)}</p>
                  <button>Read More</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
