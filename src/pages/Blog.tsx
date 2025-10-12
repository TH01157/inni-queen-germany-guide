// src/pages/Blog.tsx
import PostCard from "@/components/PostCard";
import { CATEGORIES, POSTS, type CategoryKey } from "@/data/posts";
import { Link } from "react-router-dom";

export default function Blog() {
  const categoryEntries = Object.entries(CATEGORIES) as [CategoryKey, (typeof CATEGORIES)[CategoryKey]][];
  return (
    <div className="min-h-screen bg-background">
      <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl font-bold">Blog</h1>
          <p className="opacity-80 mt-2">Bài viết về Luật – Tâm lý – Cuộc sống tại Đức.</p>
          <div className="flex flex-wrap gap-3 mt-6">
            {categoryEntries.map(([key, cat]) => (
              <Link
                key={key}
                to={cat.url}
                className="text-sm rounded-xl px-3 py-1.5 border hover:bg-accent"
              >
                {cat.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.map((p) => <PostCard key={p.slug} post={p} />)}
        </div>
      </section>
    </div>
  );
}
