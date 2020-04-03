import React, { useState } from "react";
import posts from "../../posts.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Posts() {
  const [likes, setLikes] = useState(posts);
  const [liked, setLiked] = useState("");

  const addLike = post => {
    setLikes([...likes, (likes[post.id - 1].like += 1)]);
    setLiked("liked");
  };

  return (
    <div className="posts">
      {posts.map(post => (
        <div key={post.id} className="post">
          <div className="user-info">
            <img className="avatar" src={post.avatar} alt="avatar" />
            <div className="username-div">
              <h5 className="username">
                {post.first_name} {post.last_name}
              </h5>
              <span className="date">{post.date}</span>
            </div>
          </div>
          <div className="post-content">
            <p className="post-paragraph"> {post.content} </p>
          </div>
          <div className="likes">
            <span className="likes-num"> {post.like} Like </span>
            <span className="like-btn" onClick={() => addLike(post)}>
              <FontAwesomeIcon className={liked} icon={faHeart} />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
