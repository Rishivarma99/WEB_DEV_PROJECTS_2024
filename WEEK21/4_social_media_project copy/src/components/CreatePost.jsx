// used textarea tag
// used use ref for getting input elements
// use date.now() for unique id

// added use naviagate

import { useContext, useRef } from "react";
import { PostList1 } from "../store/posts-list";
// import { redirect, useNavigate } from "react-router-dom";
import { Form, redirect } from "react-router-dom";
const CreatePost = () => {
  // const { addPost } = useContext(PostList1);
  // const navigate = useNavigate(); //returns a method

  const handleSubmit = (event) => {};

  return (
    <Form method="POST" className="create-post">
      {/* user id  */}
      <div className="mb-3">
        <label forhtml="userId" className="form-label">
          Enter User Id
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="Enter user id "
          name="userId"
        />
      </div>

      {/* post title  */}
      <div className="mb-3">
        <label forhtml="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Give title"
          name="title"
        />
      </div>
      <div className="mb-3">
        <label forhtml="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          rows="4"
          className="form-control"
          id="body"
          placeholder="Give body"
          name="body"
        />
      </div>

      <div className="mb-3">
        <label forhtml="reactions" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this story"
          name="reactions"
        />
      </div>

      <div className="mb-3">
        <label forhtml="tags" className="form-label">
          Enter your HashTags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="Please enter tags with space"
          name="tags"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();

  const obj = Object.fromEntries(formData);
  console.log(obj);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: obj.title,
      body: obj.body,
      reactions: obj.reactions,
      userId: obj.userId,
      tags: obj.tags,
    }),
  })
    .then((res) => res.json())
    .then((post) => {
      // addPost(post);
      console.log(post);
    });
  return redirect("/");
}

export default CreatePost;
