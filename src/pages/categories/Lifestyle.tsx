import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Sparkles } from "lucide-react";
import PostCard from "@/components/PostCard";
import { POSTS, CATEGORIES } from "@/data/posts";

export default function Lifestyle() {
  const catKey = "lifestyle" as const;
  const cat = CATEGORIES[catKey];
  const posts = POSTS.filter((p) => p.category === catKey);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className={`w-20 h-20 ${cat.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
              <Sparkles className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {cat.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Phát triển bản thân, chữa lành tâm hồn và sống có ý thức
            </p>
          </div>
        </section>

        {/* Grid bài viết */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {posts.length === 0 ? (
              <p className="text-muted-foreground">Chưa có bài viết trong chuyên mục này.</p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
