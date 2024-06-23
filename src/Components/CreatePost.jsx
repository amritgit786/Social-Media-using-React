import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useRef } from "react";
import { PostItemContext } from "../Store/post-list-store";
const CreatePost = () => {
  const { addPost } = useContext(PostItemContext);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;

    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
  };
  return (
    <>
      <form className="create-post" onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter Your User Id Here
          </label>
          <input
            type="text"
            className="form-control"
            ref={userIdElement}
            id="userId"
            placeholder="Please Enter Your User ID"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            ref={postTitleElement}
            className="form-control"
            id="title"
            placeholder="How are You Feeling Today?"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Post Content
          </label>
          <textarea
            name=""
            id="desc"
            ref={postBodyElement}
            className="form-control"
            rows={4}
            placeholder="Tell Us more about it."
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Number of Reactions
          </label>
          <input
            type="text"
            className="form-control"
            id="reactions"
            ref={reactionsElement}
            placeholder="How many people reacted to this post?"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your Hashtags here
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            ref={tagsElement}
            placeholder="Please enter tags using space?"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
