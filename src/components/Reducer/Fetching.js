import React, { useState, useEffect } from "react";
import axios from "axios";

const Fetching = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setpost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => {
        setLoading(false);
        setpost(res.data);
        setError("");

        console.log(res.data);
      })
      .catch(error => {
        setLoading(false);
        setpost({});
        setError("something wrong");
      });
  }, []);
  return (
    <div>
      {loading ? "Loading" : post.title}
      {error ? error : null}
    </div>
  );
};
export default Fetching;
