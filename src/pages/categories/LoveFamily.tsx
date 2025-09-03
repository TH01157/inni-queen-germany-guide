// src/pages/categories/LoveFamily.tsx
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart } from "lucide-react";
import PostCard from "@/components/PostCard";
import { POSTS, CATEGORIES } from "@/data/posts";

export default function LoveFamily() {
  const posts = POSTS.filter((p) => p.category === "love");
  const cat = CATEGORIES.love;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-red-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`w-20 h-20 ${cat.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
            <Heart className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {cat.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tư vấn về các mối quan hệ, hôn nhân và cuộc sống gia đình ở Đức
          </p>
        </div>
      </section>

      {/* Grid bài viết */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-muted-foreground">Chưa có bài viết.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
