import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data));
    }
  }, [id]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>/api/posts/[id] → GET Request</h1>
      {post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Loading post...</p>
      )}
    </div>
  );
}
