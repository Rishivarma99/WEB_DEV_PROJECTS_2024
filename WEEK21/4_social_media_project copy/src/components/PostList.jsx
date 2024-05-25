import { useCallback, useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList1 } from "../store/posts-list";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList } = useContext(PostList1);
  const { fetching } = useContext(PostList1);

  return (
    <>
      {fetching && postList.length === 0 && <LoadingSpinner></LoadingSpinner>}
      {!fetching && postList.length === 0 && <WelcomeMessage></WelcomeMessage>}

      {postList.map((post) => (
        <Post key={post.id} post={post} /> // this is just a return statement so no need {}
      ))}
    </>
  );
};

export default PostList;
