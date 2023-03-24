import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_FAILURE":
      return {
        loading: false,
        post: {},
        error: "Something went wrong!!",
      };
    default:
      return state;
  }
};

function DataFetchingTwo() {
  const [apiState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_FAILURE" });
      });
  });
  return (
    <div>
      <h2>UseReducer Data Fetching 2</h2>

      {apiState.loading ? "Loading" : apiState.post.title}
      {apiState.error ? apiState.error : null}
    </div>
  );
}

export default DataFetchingTwo;
