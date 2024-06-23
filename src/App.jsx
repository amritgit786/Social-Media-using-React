import Footer from "./Components/Footer";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";

import "./App.css";
import CreatePost from "./Components/CreatePost";
// import DisplayPost from "./Components/DisplayPost";
import DisplayPostList from "./Components/DisplayPostList";
import { useState } from "react";
import PostListProvider from "./Store/post-list-store";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></SideBar>
        <div className="content">
          <Header></Header>
          {selectedTab === "Home" ? <DisplayPostList /> : <CreatePost />}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
};

export default App;
