"use client";

import { useEffect, useState } from "react";
import { client } from "../../sanity/lib/client";
import { urlFor } from "@/lib/image";

export default function Page() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const results = await client.fetch(`*[_type == "card"]`);
        setPosts(results);
      } catch (error) {
        console.error("Failed to fetch cards", error);
      }
    }

    fetchBlog();
  }, []);

  return (
    <div>
      <h1>Latest Posts here </h1>

      <ul style={{ paddingTop: "50px" }}>
        {posts.map((post) => (
          <li key={post._id} style={{ marginBottom: "2rem" }}>
            <h2>{post.cardTitle}</h2>
            {post.image && (
              <img
                src={urlFor(post.image).width(600).url()}
                alt={post.cardTitle}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            )}
            {post.heroImage && (
              <img
                src={urlFor(post.heroImage).width(600).url()}
                alt={post.cardTitle}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            )}

            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
