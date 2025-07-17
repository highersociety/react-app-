import React from "react";

function PostItem({ post }) {
  return (
    <div className="post-item">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default PostItem;