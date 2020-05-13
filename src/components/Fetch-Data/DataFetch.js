import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetch = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdfromButtonClick] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then(res => {
        console.log(res);
        setPost(res.data);
      })
      .catch(err => console.log(err));
  }, [idFromButtonClick]);
  const handleClick = () => {
    setIdfromButtonClick(id);
  };
  console.log(post);

  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        SUbmit
      </button>
      {post.title}
      {/* {posts.map(post => (
        <div
          key={post.id}
          className="container"
          style={{ marginLeft: "150px" }}
        >
          <li>{post.title}</li>
        </div>
      ))} */}
    </div>
  );
};
export default DataFetch;
