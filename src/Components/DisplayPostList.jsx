import { useContext, useEffect, useState } from "react";
import DisplayPost from "./DisplayPost";
import { PostItemContext } from "../Store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const DisplayPostList = () => {
  const { postList, addInitalPosts } = useContext(PostItemContext);
  // const [fetchData, setFetchData] = useState(false);
  const controller = new AbortController();
  const signal = controller.signal;
  // Handling Loading State
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    setFetching(true);
    console.log("data fetching strat");
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitalPosts(data.posts);
        setFetching(false);
        console.log("Data Fetched");
      });
    console.log("Data ended");

    return () => {
      // console.log("clea Up Function Ended");
      controller.abort();
    };
  }, []);

  // Using state we can handling the data fetching
  // if (!fetchData) {
  //   console.log("Data Fetche");
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitalPosts(data.posts);
  //       console.log("Steal Data Fetching");
  //     });
  //   setFetchData(true);
  //   console.log("Data fetched succesfully");
  // }
  // const handleGetPostClicks = () => {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitalPosts(data.posts);
  //     });
  //   return () => {
  //     console.log("This is Clean Up message");
  //   };
  // };
  return (
    <>
      {fetching && <LoadingSpinner />}

      <div className="post-container">
        {!fetching && postList.length === 0 && (
          <WelcomeMessage />
          // getPostOnClick={handleGetPostClicks}
        )}
        {!fetching &&
          postList.map((post) => <DisplayPost key={post.id} post={post} />)}
        {/* <DisplayPost />
      <DisplayPost /> */}
      </div>
    </>
  );
};

export default DisplayPostList;
