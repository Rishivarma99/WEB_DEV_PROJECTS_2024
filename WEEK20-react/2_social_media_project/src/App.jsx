import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header1 from "./components/Header1";
import Footer1 from "./components/Footer1";
import Sidebar1 from "./components/Sidebar1";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";
import PostList from "./components/PostList";
import { useState } from "react";

function App() {
  let [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <div className="app-container">
        <Sidebar1></Sidebar1>
        <div className="content">
          <Header1></Header1>
         { selectedTab=={"Home"} && <CreatePost></CreatePost>  } 
          {  if(selectedTab=={"CreatePost"}){<CreatePost></CreatePost>} }
          <PostList></PostList>
          <Footer1></Footer1>
        </div>
      </div>
    </>
  );
}

export default App;
