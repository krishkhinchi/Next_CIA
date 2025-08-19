'use client'
import { notFound } from "next/navigation";
export default async function UserPage({ params }) {
  const { username } = params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users?username=${username}`
  );
  const data = await res.json();
  if (data.length === 0) {
    return notFound(); 
  }
  const user = data[0];
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.username}</p>
      <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">
        Visit websites from here
      </a>
    </div>
  );
}
