import { Link } from "react-router-dom";
import PostCard from "@/components/PostCard";
import { POSTS, CATEGORIES } from "@/data/posts";

export default function Blog() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header nhỏ */}
      <section className="border-b bg-gradient-to-b from-pink-50/60 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Blog Inniqueen
          </h1>
          <p className="text-gray-500 text-base">
            Góc chia sẻ về Luật – Tâm lý – Cuộc sống tại Đức dành cho cộng đồng người Việt.
          </p>
        </div>
      </section>

      {/* Danh mục */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-3">
          {Object.entries(CATEGORIES).map(([key, cat]) => (
            <Link
              key={key}
              to={cat.url}
              className="text-sm border rounded-full px-4 py-1.5 hover:bg-pink-50 transition"
            >
              {cat.title}
            </Link>
          ))}
        </div>
      </section>

      {/* Grid bài viết */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
