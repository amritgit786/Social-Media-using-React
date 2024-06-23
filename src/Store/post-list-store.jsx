import { createContext, useReducer } from "react";

export const PostItemContext = createContext({
  postList: [],
  addPost: () => {},
  addInitalPosts: () => {},
  deletePost: () => {},
});

const postListProducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => action.payload.postId !== post.id
    );
  }
  return newPostList;
};

// DEFAULT_POST_LIST
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListProducer, []);

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    // console.log(`${userId}, ${postTitle}, ${postBody}, ${reactions}, ${tags}`);
    const AddActionPost = {
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    };
    dispatchPostList(AddActionPost);
  };

  const addInitalPosts = (posts) => {
    // console.log(`${userId}, ${postTitle}, ${postBody}, ${reactions}, ${tags}`);
    console.log(posts);
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    console.log("Deleted the post" + postId);
    const deleteActionPost = {
      type: "DELETE_POST",
      payload: {
        postId,
      },
    };
    dispatchPostList(deleteActionPost);
  };
  return (
    <PostItemContext.Provider
      value={{
        postList,
        addPost,
        addInitalPosts,
        deletePost,
      }}
    >
      {children}
    </PostItemContext.Provider>
  );
};

// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "Going to Mumbai",
//     body: "Hi Friends, I am going to Mumbai for my vacations. hope to enjoy a lot. Peace out",
//     reactions: 2,
//     userId: "user-9",
//     tags: ["vacations", "Mumbai", "Enjoying"],
//   },
//   {
//     id: "2",
//     title: "Pass ho gye hai Bhai",
//     body: "4 saal ki masti me bhi pass ho gye.  Hard To Beileive",
//     reactions: 10,
//     userId: "user-15",
//     tags: ["vacations", "Pass", "Enjoying"],
//   },
// ];
export default PostListProvider;
