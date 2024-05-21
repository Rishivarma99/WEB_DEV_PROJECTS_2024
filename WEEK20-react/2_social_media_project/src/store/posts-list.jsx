// In use reducer we can also give context

import { createContext, useReducer } from "react";

// we can also create like this

export const PostList1 = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const reducerFunction = (currentPostList, action) => {
  return currentPostList;
};

const addPost = () => {
  console.log("hi");
};

const deletePost = () => {
  console.log("hi");
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    reducerFunction,
    DEFAULT_POST_LIST
  );
  const contentValue = {
    postList,
    addPost,
    deletePost,
  };

  return (
    // the value must be always be given as a object
    <PostList1.Provider value={contentValue}>{children}</PostList1.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to mumbai",
    body: "Hi friends , i am going to Mumbai for my vacation",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "mumbai", "enjoy"],
  },
  {
    id: "2",
    title: "Going to chennai",
    body: "Hi friends ,i am going to chennai for my vacation",
    reactions: 4,
    userId: "user-10",
    tags: ["vacation", "chennai", "enjoy"],
  },
];

export default PostListProvider;
