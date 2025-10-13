// src/pages/Blog.tsx
import { Link } from "react-router-dom";
import PostCard from "@/components/PostCard";
import { POSTS, CATEGORIES, countByCategory } from "@/data/posts";

export default function Blog() {
  const featured = POSTS.slice(0, 3);
  const others = POSTS.slice(3);
  const counts = countByCategory();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero nhẹ kiểu bản cũ */}
      <section className="border-b bg-gradient-to-b from-pink-50/60 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-800">Blog Inniqueen</h1>
          <p className="text-gray-500 mt-2">
            Luật – Tâm lý – Cuộc sống ở Đức • Giọng nhẹ nhàng, chữa lành.
          </p>
        </div>
      </section>

      {/* Featured (3 bài đầu) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map(p => <PostCard key={p.slug} post={p} />)}
        </div>
      </section>

      {/* Category chips + count */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-3">
          {Object.entries(CATEGORIES).map(([key, cat]) => (
            <Link
              key={key}
              to={cat.url}
              className="text-sm border border-pink-100 rounded-full px-4 py-1.5 hover:bg-pink-50"
            >
              {cat.title} <span className="opacity-60">({counts[key as keyof typeof counts]})</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Grid bài viết còn lại */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map(p => <PostCard key={p.slug} post={p} />)}
        </div>
      </section>
    </div>
  );
}
