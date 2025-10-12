// src/components/PostCard.tsx
import { Link } from "react-router-dom";
import type { Post } from "@/data/posts";
import { CATEGORIES } from "@/data/posts";

export default function PostCard({ post }: { post: Post }) {
  const cat = CATEGORIES[post.category];
  return (
    <article className="border rounded-2xl p-4 hover:shadow-sm transition">
      {post.cover ? (
        <img src={post.cover} alt={post.title} className="w-full h-40 object-cover rounded-xl mb-3" />
      ) : null}
      <Link to={`/posts/${post.slug}`} className="block">
        <h3 className="text-lg font-semibold">{post.title}</h3>
      </Link>
      <p className="text-sm opacity-80 mt-1">{post.excerpt}</p>
      <div className="flex items-center justify-between mt-3 text-xs opacity-70">
        <Link to={cat.url} className="hover:underline">{cat.title}</Link>
        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
      </div>
    </article>
  );
}
