import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function UpdatePostPage() {
  const router = useRouter();
  const { id } = router.query;
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          id,
          title: "Updated Title",
          body: "Updated Body",
          userId: 1
        })
      })
        .then(res => res.json())
        .then(data => setResponse(data));
    }
  }, [id]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>/api/update/[id] → PUT Request</h1>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
}
