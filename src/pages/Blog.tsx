// src/pages/Blog.tsx  (PASTE-OVER)
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { CATEGORIES, type CategoryKey, type PostMeta } from "@/data/posts";
import { getAllPostMetas } from "@/lib/allPosts";

export default function Blog() {
  const [allPosts, setAllPosts] = useState<PostMeta[]>([]);
  const [counts, setCounts] = useState<Record<CategoryKey, number>>({
    love: 0,
    lifestyle: 0,
    legal: 0,
    finance: 0,
  });

  // nạp toàn bộ bài (TSX + Markdown) 1 lần
  useEffect(() => {
    (async () => {
      const list = await getAllPostMetas();
      setAllPosts(list);

      const next: Record<CategoryKey, number> = { love: 0, lifestyle: 0, legal: 0, finance: 0 };
      for (const p of list) next[p.category] += 1;
      setCounts(next);
    })();
  }, []);

  const categoryEntries = useMemo(
    () => Object.entries(CATEGORIES) as [CategoryKey, (typeof CATEGORIES)[CategoryKey]][],
    []
  );

  const featuredPosts = useMemo(() => allPosts.slice(0, 3), [allPosts]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Blog & Chia sẻ <span className="gradient-hero bg-clip-text text-transparent">kinh nghiệm</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Những câu chuyện, kiến thức và kinh nghiệm thực tế để giúp bạn phát triển và thành công
            </p>
          </div>
        </section>

        {/* Chuyên mục */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Chuyên mục</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {categoryEntries.map(([key, cat]) => (
                <Link key={key} to={cat.url} className="card-soft p-6 text-center group block">
                  <div
                    className={`w-16 h-16 ${cat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="w-8 h-8 rounded-full opacity-70" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {cat.title}
                  </h3>
                  <div className="text-xs text-primary font-medium">
                    {counts[key].toLocaleString("vi-VN")} bài viết
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bài viết nổi bật */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Bài viết nổi bật</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
