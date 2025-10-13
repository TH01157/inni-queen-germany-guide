// src/components/PostCard.tsx
import { Link } from "react-router-dom";
import type { Post } from "@/data/posts";
import { CATEGORIES } from "@/data/posts";

export default function PostCard({ post }: { post: Post }) {
  const cat = CATEGORIES[post.category];
  return (
    <article className="relative group border border-pink-100 bg-white rounded-2xl overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition">
      <Link to={`/posts/${post.slug}`} className="absolute inset-0 z-10" aria-label={post.title} />
      {post.cover && (
        <img
          src={post.cover}
          alt={post.title}
          className="w-full h-44 object-cover"
          loading="lazy"
        />
      )}
      <div className="p-4">
        <div className="text-xs text-gray-500 flex items-center justify-between mb-2">
          <Link to={cat.url} className="hover:text-pink-600">{cat.title}</Link>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("de-DE")}
          </time>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-pink-600">
          {post.title}
        </h3>
        <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p>
      </div>
    </article>
  );
}
