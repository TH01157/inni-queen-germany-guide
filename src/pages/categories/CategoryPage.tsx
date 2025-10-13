// src/pages/categories/CategoryPage.tsx
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import PostCard from "@/components/PostCard";
import { POSTS, CATEGORIES, type CategoryKey } from "@/data/posts";

export default function CategoryPage() {
  const { pathname } = useLocation();

  const key: CategoryKey | null = useMemo(() => {
    const map: Record<string, CategoryKey> = {
      "/blog/tinh-yeu-hon-nhan": "love",
      "/blog/loi-song-chua-lanh": "lifestyle",
      "/blog/luat-phap": "legal",
      "/blog/tai-chinh": "finance",
    };
    return (map[pathname] ?? null);
  }, [pathname]);

  if (!key) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-semibold">Danh mục không tồn tại</h1>
      </div>
    );
  }

  const cat = CATEGORIES[key];
  const posts = POSTS.filter(p => p.category === key);

  return (
    <div className="min-h-screen bg-white">
      <section className="border-b bg-gradient-to-b from-pink-50/60 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl font-bold">{cat.title}</h1>
          <p className="text-gray-500 mt-1">Các bài viết thuộc chuyên mục này.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map(p => <PostCard key={p.slug} post={p} />)}
        </div>
      </section>
    </div>
  );
}
