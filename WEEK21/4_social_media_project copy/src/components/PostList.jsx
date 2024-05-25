import { useCallback, useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList1 } from "../store/posts-list";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  // const { postList } = useContext(PostList1);
  // const { fetching } = useContext(PostList1);
  const postList = useLoaderData();

  return (
    <>
      {postList.length === 0 && <WelcomeMessage></WelcomeMessage>}

      {postList.map((post) => (
        <Post key={post.id} post={post} /> // this is just a return statement so no need {}
      ))}
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((obj) => {
      console.log("hi");
      return obj.posts;
    });
};
export default PostList;
