// app/page.tsx or any component
"use client";

import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

export default function Page() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const results = await client.fetch(`*[_type == "card"]`);
        console.log(results, "results");
        setPosts(results);
      } catch (error) {
        console.error("Failed to fetch cards", error);
      }
    }

    fetchBlog();
  }, []);
  return (
    <div>
      <h1>Latest Posts</h1>

      <ul style={{ paddingTop: "50px" }}>
        {posts.map((post: any) => {
          return (
            <li key={post._id}>
              <h2>{post.cardTitle}</h2>
              <p>{post.body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
