import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  const addPost = (newPost) => {
    fetch("http://localhost:3001/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((data) => setPosts([...posts, data]));
  };

  return (
    <div className="App">
      <Header />
      <PostForm onAddPost={addPost} />
      <PostList posts={posts} />
      <Footer />
    </div>
  );
}

export default App;