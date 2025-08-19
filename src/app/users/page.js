'use client'
import Link from "next/link";
export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return (
    <div>
      <h1>UserList</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.username}`}>
              <a>{user.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
