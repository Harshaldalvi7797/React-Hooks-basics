import React, { useReducer, useEffect } from "react";
import axios from "axios";
const initialstate = {
  loading: true,
  error: "",
  post: {}
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Success":
      return {
        loading: false,
        post: action.payload,
        error: ""
      };
    case "Error":
      return {
        loading: false,
        post: {},
        error: "something went wrong"
      };
    default:
      return state;
  }
};
const DataFetching = () => {
  const [state, dispatch] = useReducer(reducer, initialstate);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => {
        dispatch({ type: "Success", payload: res.data });
        console.log(res.data);
      })
      .catch(error => {
        dispatch({ type: "Error" });
      });
  }, []);

  return (
    <div>
      {state.loading ? "Loading" : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
};
export default DataFetching;
