import { Link } from "react-router-dom";
import type { Post } from "@/data/posts";
import { CATEGORIES } from "@/data/posts";

export default function PostCard({ post }: { post: Post }) {
  const cat = CATEGORIES[post.category];
  return (
    <article className="border rounded-2xl p-4 hover:shadow-md transition bg-white">
      {post.cover && (
        <img
          src={post.cover}
          alt={post.title}
          className="w-full h-44 object-cover rounded-xl mb-3"
        />
      )}
      <Link to={`/posts/${post.slug}`} className="block">
        <h3 className="text-lg font-semibold text-gray-800 hover:text-pink-600 transition">
          {post.title}
        </h3>
      </Link>
      <p className="text-sm text-gray-600 mt-2 line-clamp-3">{post.excerpt}</p>
      <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
        <Link to={cat.url} className="hover:text-pink-600">
          {cat.title}
        </Link>
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("de-DE")}
        </time>
      </div>
    </article>
  );
}
