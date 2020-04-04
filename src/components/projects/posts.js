import React, { useState } from "react";
import posts from "../../posts.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

for (let post of posts) {
  post.all = false;
}

export default function Posts() {
  const [obj, setObj] = useState(posts);

  const addLike = (post) => {
    setObj([...obj, (obj[post.id - 1].like += 1)]);
    console.log(post);
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
    console.log(post);
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
            <span className="likes-num"> {post.like} Like </span>
            <span className="like-btn" onClick={() => addLike(post)}>
              <FontAwesomeIcon icon={faHeart} />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
