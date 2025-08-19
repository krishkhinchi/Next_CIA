import { useEffect, useState } from "react";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data.slice(0, 5))); 
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>/api/posts → GET Request</h1>
      <h2>posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id} style={{ marginBottom: "15px" }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
