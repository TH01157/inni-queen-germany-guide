// src/pages/Blog.tsx
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import {
  CATEGORIES,
  POSTS,
  type CategoryKey,
} from "@/data/posts";

export default function Blog() {
  const categoryEntries = Object.entries(CATEGORIES) as [
    CategoryKey,
    (typeof CATEGORIES)[CategoryKey]
  ][];

  // Lấy 3 bài đầu làm "nổi bật"
  const featuredPosts = POSTS.slice(0, 3);

  // Đếm số bài theo chuyên mục (từ registry POSTS)
  const countByCategory = (key: CategoryKey) =>
    POSTS.filter((p) => p.category === key).length;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Blog & Chia sẻ{" "}
              <span className="gradient-hero bg-clip-text text-transparent">
                kinh nghiệm
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Những câu chuyện, kiến thức và kinh nghiệm thực tế để giúp bạn
              phát triển và thành công
            </p>
          </div>
        </section>

        {/* Chuyên mục */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Chuyên mục
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {categoryEntries.map(([key, cat]) => {
                const cnt = countByCategory(key);
                return (
                  <Link
                    key={key}
                    to={cat.url}
                    className="card-soft p-6 text-center group block"
                  >
                    <div
                      className={`w-16 h-16 ${cat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="w-8 h-8 rounded-full opacity-70" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                    <div className="text-xs text-primary font-medium">
                      {cnt.toLocaleString("vi-VN")} bài viết
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bài viết nổi bật */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Bài viết nổi bật
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
              {featuredPosts.length === 0 && (
                <p className="text-muted-foreground">Chưa có bài viết.</p>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
