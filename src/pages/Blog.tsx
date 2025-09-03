import { Button } from '@/components/ui/button';
import { Calendar, User } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

// LẤY DỮ LIỆU TỪ REGISTRY
import {
  CATEGORIES,
  POSTS,
  countByCategory,
  type CategoryKey,
} from '@/data/posts';

const Blog = () => {
  // Lấy danh sách chuyên mục từ registry
  const categoryEntries = Object.entries(CATEGORIES) as [CategoryKey, typeof CATEGORIES[CategoryKey]][];

  // Lấy một vài bài nổi bật (tuỳ ý: lấy 3 bài đầu)
  const featuredPosts = POSTS.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Blog & Chia sẻ{' '}
              <span className="gradient-hero bg-clip-text text-transparent">kinh nghiệm</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Những câu chuyện, kiến thức và kinh nghiệm thực tế để giúp bạn phát triển và thành công
            </p>
          </div>
        </section>

        {/* Chuyên mục (ĐẾM TỰ ĐỘNG) */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Chuyên mục</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {categoryEntries.map(([key, cat]) => {
                const cnt = countByCategory(key); // ← Đếm từ registry
                return (
                  <Link key={key} to={cat.url} className="card-soft p-6 text-center group">
                    <div
                      className={`w-16 h-16 ${cat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {/* Icon placeholder theo màu – có thể tuỳ chỉnh thêm icon nếu muốn */}
                      <div className="w-8 h-8 rounded-full opacity-70" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                    <div className="text-xs text-primary font-medium">
                      {cnt.toLocaleString('vi-VN')} bài viết
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bài viết nổi bật (tuỳ chọn) */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Bài viết nổi bật</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredPosts.map((post) => (
                <article key={post.slug} className="card-soft overflow-hidden group relative">
                  <Link to={post.slug} className="absolute inset-0" aria-label={post.title} />
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 relative z-[1]">
                    <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                      <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                        {CATEGORIES[post.category].title.split(' - ')[0]}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>Đang cập nhật</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>— phút đọc</span>
                      </div>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
