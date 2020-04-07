import React, { useState } from "react";
import posts from "../../posts.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as rHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as sHeart } from "@fortawesome/free-solid-svg-icons";

for (let post of posts) {
  post.all = false;
  post.ILiked = false;
}

export default function Posts() {
  const [obj, setObj] = useState(posts);

  const addLike = (post) => {
    setObj([...obj, (obj[post.id - 1].like += 1)]);
    setObj([...obj, (obj[post.id - 1].ILiked = !obj[post.id - 1].ILiked)]);
  };

  const removeLike = (post) => {
    setObj([...obj, (obj[post.id - 1].like -= 1)]);
    setObj([...obj, (obj[post.id - 1].ILiked = !obj[post.id - 1].ILiked)]);
  };

  const txt = (post) => {
    let str = [];
    let arr = post.content.split(" ");
    for (let i = 0; str.length < 10; i++) {
      str.push(arr[i]);
    }
    let final = str.join(" ");
    return final;
  };

  const showMore = (post) => {
    setObj([...obj, (obj[post.id - 1].all = !obj[post.id - 1].all)]);
  };

  return (
    <div className="posts">
      {posts.map((post) => (
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
            {post.all === false ? (
              <p className="post-paragraph">
                {" "}
                {txt(post) + ". . . ."}{" "}
                <span onClick={() => showMore(post)}>(more)</span>
              </p>
            ) : (
              <p className="post-paragraph">
                {" "}
                {post.content}{" "}
                <span onClick={() => showMore(post)}>(Less)</span>
              </p>
            )}
          </div>
          <div className="likes">
            <span className="likes-num">
              {" "}
              {post.like}{" "}
              <span>
                <FontAwesomeIcon icon={sHeart} />
              </span>
            </span>
            {post.ILiked === false ? (
              <span className="like-btn unliked" onClick={() => addLike(post)}>
                <FontAwesomeIcon icon={rHeart} />
              </span>
            ) : (
              <span className="like-btn liked" onClick={() => removeLike(post)}>
                <FontAwesomeIcon icon={sHeart} />
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
