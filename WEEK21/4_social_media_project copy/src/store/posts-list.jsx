// In use reducer we can also give context

import { createContext, useReducer, useState, useEffect } from "react";

// we can also create like this

export const PostList1 = createContext({
  postList: [],
  addPost: () => {},
  fetching: false,
  deletePost: () => {},
});

const reducerFunction = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type == "delete") {
    newPostList = currentPostList.filter(
      (post) => post.id != action.payload.postId
    );
  } else if (action.type == "ADD_POST") {
    newPostList = [
      {
        id: action.object.id,
        title: action.object.title,
        body: action.object.body,
        reactions: action.object.reactions,
        userId: action.object.userId,
        tags: action.object.tags,
      },
      ...currentPostList,
    ];
  } else if (action.type == "ADD_INITIAL_POST") {
    newPostList = action.payload.postsArray;
  }

  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    reducerFunction,
    DEFAULT_POST_LIST
  );
  // const contentValue = {
  //   postList,
  //   addPost,
  //   deletePost,
  // };

  const addPost = (object) => {
    const actionObject = {
      type: "ADD_POST",
      object,
    };
    dispatchPostList(actionObject);
  };

  const addIntialPosts = (postsArray) => {
    {
      const actionObject = {
        type: "ADD_INITIAL_POST",
        payload: {
          postsArray,
        },
      };
      dispatchPostList(actionObject);
    }
  };

  const deletePost = (postId) => {
    let actionObject = {
      type: "delete",
      payload: {
        postId: postId,
      },
    };
    dispatchPostList(actionObject);
  };

  // It is good to fetch here so that it wont fetch every time post list is rendered
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    // console.log("fetching started ");
    setFetching(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((obj) => {
        addIntialPosts(obj.posts);
        setFetching(false);
        // console.log("fetching completed");
      });
    // console.log("fetching returned");
    return () => {
      // console.log("Cleaning use effect "); // runned when we change the page when the postlist is dead
      // controller.abort();  //without any reason we are aborting error
    };
  }, []);

  return (
    // the value must be always be given as a object
    <PostList1.Provider
      value={{
        postList,
        addPost,
        fetching,
        deletePost,
      }}
    >
      {children}
    </PostList1.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: 100,
    title: "Going to mumbai",
    body: "Hi friends , i am going to Mumbai for my vacation",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "mumbai", "enjoy"],
  },
  {
    id: 101,
    title: "Going to chennai",
    body: "Hi friends ,i am going to chennai for my vacation",
    reactions: 4,
    userId: "user-10",
    tags: ["vacation", "chennai", "enjoy"],
  },
];

export default PostListProvider;
