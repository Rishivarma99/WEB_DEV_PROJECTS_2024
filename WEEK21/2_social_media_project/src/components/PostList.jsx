import { useCallback, useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList1 } from "../store/posts-list";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList } = useContext(PostList1);
  const { addIntialPosts } = useContext(PostList1);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    console.log("fetching started ");
    setFetching(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((obj) => {
        addIntialPosts(obj.posts);
        setFetching(false);
        console.log("fetching completed");
      });
    console.log("fetching returned");
    return () => {
      console.log("Cleaning use effect "); // runned when we change the page when the postlist is dead
      // controller.abort();  //without any reason we are aborting error
    };
  }, []);

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
