import { useEffect, useState } from "react";

export default function CreatePostPage() {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        title: "Hello",
        body: "Next.js API test",
        userId: 1
      })
    })
      .then(res => res.json())
      .then(data => setResponse(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>/api/create → POST Request</h1>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
}
