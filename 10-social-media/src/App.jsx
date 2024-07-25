import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Sidebar from "./assets/components/Sidebar";
import CreatePost from "./assets/components/CreatePost";
import Post from "./assets/components/Post";
import PostList from "./assets/components/PostList";
import { useState } from "react";
import PostListProvider from "./assets/store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}
export default App;
