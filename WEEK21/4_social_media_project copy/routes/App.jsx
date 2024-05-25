import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header1 from "../src/components/Header1";
import Footer1 from "../src/components/Footer1";
import Sidebar1 from "../src/components/Sidebar1";
import CreatePost from "../src/components/CreatePost";
import Post from "../src/components/Post";
import PostList from "../src/components/PostList";
import { useContext, useState } from "react";
import PostListProvider, { PostList1 } from "../src/store/posts-list";
import { Outlet } from "react-router-dom";

function App() {
  // let [selectedTab, setSelectedTab] = useState("Home");

  // const handlePage = (event) => {
  //   if (event.target.innerText == "Home") {
  //     if (selectedTab != "Home") {
  //       setSelectedTab("Home");
  //     }
  //   } else if (event.target.innerText == "CreatePost") {
  //     if (selectedTab != "CreatePost") {
  //       setSelectedTab("CreatePost");
  //     }
  //   }
  // };

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar1></Sidebar1>
        <div className="content">
          <Header1></Header1>
          <Outlet></Outlet>
          <Footer1></Footer1>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;

// {selectedTab == "Home" && <PostList></PostList>}
// {selectedTab == "CreatePost" && <CreatePost></CreatePost>}
