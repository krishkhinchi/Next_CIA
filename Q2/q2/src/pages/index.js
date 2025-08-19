export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Next.js Api</h1>
      <ul>
        <li>/api/posts → GET list of posts</li>
        <li>/api/posts/[id] → GET single post</li>
        <li>/api/create → POST request</li>
        <li>/api/update/[id] → PUT request</li>
        <li>/api/delete/[id] → DELETE request</li>
      </ul>
    </div>
  );
}
