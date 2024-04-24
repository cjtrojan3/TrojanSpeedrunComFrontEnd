import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const PostList = () => {
  const [posts, setPosts] = useState<any[]>([]);

  const getPosts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <h1>List of Posts</h1>
      <ul className="list-group">
        {posts.length
          ? posts.map((item) => (
              <li className="list-group-item" key={item.id}>
                {item.title}
              </li>
            ))
          : null}
      </ul>
    </>
  );
};

export default PostList;
