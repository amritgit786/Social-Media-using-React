import { useContext } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { PostItemContext } from "../Store/post-list-store";
const DisplayPost = ({ post }) => {
  const { deletePost } = useContext(PostItemContext);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card post-card" style={{ width: "30rem" }}>
              <div className="card-body">
                <h5 className="card-title">
                  {post.title}
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    onClick={() => deletePost(post.id)}
                  >
                    <FaDeleteLeft />
                  </span>
                </h5>
                <p className="card-text">{post.body}</p>
                {post.tags.map((tag, i) => (
                  <span key={i} className="badge text-bg-primary mx-1 p-2">
                    {tag}
                  </span>
                ))}
                <div className="alert alert-success mt-3" role="alert">
                  This Post has been reacted by {post.reactions.likes} and{" "}
                  {post.reactions.dislikes} people .
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayPost;
