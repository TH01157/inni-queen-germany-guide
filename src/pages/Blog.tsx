import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, User } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// LẤY DỮ LIỆU TỪ REGISTRY
import {
  CATEGORIES,
  POSTS,
  countByCategory,
  type CategoryKey,
  type PostMeta,
} from '@/data/posts';

// ===== Helpers: ngày commit & thời gian đọc =====
async function fetchLatestCommitISODate(path: string) {
  const url = `https://api.github.com/repos/TH01157/inni-queen-germany-guide/commits?path=${encodeURIComponent(
    path
  )}&per_page=1`;
  const res = await fetch(url);
  if (!res.ok) return undefined;
  const data = await res.json();
  return data?.[0]?.commit?.committer?.date ?? data?.[0]?.commit?.author?.date;
}

function formatViDate(dt: Date) {
  return dt.toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' });
}

function readingTimeMinutesFromText(text: string, wpm = 200) {
  // loại bỏ thẻ/JSX thô sơ
  const cleaned = text
    .replace(/<\/?[^>]+>/g, ' ')
    .replace(/{[^}]*}/g, ' ')
    .replace(/[\r\n]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const words = cleaned ? cleaned.split(' ').length : 0;
  return Math.max(1, Math.ceil(words / wpm));
}

async function estimateReadTimeFromSource(rawPath: string) {
  // Lấy nội dung file TSX từ nhánh main
  const raw = `https://raw.githubusercontent.com/TH01157/inni-queen-germany-guide/main/${rawPath}`;
  const res = await fetch(raw);
  if (!res.ok) return undefined;
  const txt = await res.text();
  return readingTimeMinutesFromText(txt);
}

function useCommitDates(posts: PostMeta[]) {
  const [map, setMap] = useState<Record<string, string>>({});
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const entries = await Promise.all(
        posts.map(async (p) => {
          const iso = await fetchLatestCommitISODate(p.sourcePath);
          return [p.slug, iso ? formatViDate(new Date(iso)) : ''] as const;
        })
      );
      if (!cancelled) {
        setMap(Object.fromEntries(entries));
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [posts]);
  return map;
}

function useReadTimes(posts: PostMeta[]) {
  const [map, setMap] = useState<Record<string, number>>({});
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const entries = await Promise.all(
        posts.map(async (p) => {
          const mins = await estimateReadTimeFromSource(p.sourcePath);
          return [p.slug, mins ?? 0] as const;
        })
      );
      if (!cancelled) {
        setMap(Object.fromEntries(entries));
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [posts]);
  return map;
}

const Blog = () => {
  // Lấy danh sách chuyên mục từ registry
  const categoryEntries = useMemo(
    () => Object.entries(CATEGORIES) as [CategoryKey, (typeof CATEGORIES)[CategoryKey]][],
    []
  );

  // Chọn 3 bài nổi bật (chị muốn logic khác có thể đổi ở đây)
  const featuredPosts = useMemo(() => POSTS.slice(0, 3), []);

  // Map ngày commit & phút đọc cho bài nổi bật
  const commitDateMap = useCommitDates(featuredPosts);
  const readTimeMap = useReadTimes(featuredPosts);

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

        {/* Chuyên mục (đếm động) */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Chuyên mục</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {categoryEntries.map(([key, cat]) => {
                const cnt = countByCategory(key); // đếm từ registry
                return (
                  <Link key={key} to={cat.url} className="card-soft p-6 text-center group block">
                    <div
                      className={`w-16 h-16 ${cat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {/* placeholder icon/shape */}
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

        {/* Bài viết nổi bật */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Bài viết nổi bật</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredPosts.map((post) => (
                <Link key={post.slug} to={post.slug} className="group block">
                  <article className="card-soft overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                        <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                          {CATEGORIES[post.category].title.split(' - ')[0]}
                        </span>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{commitDateMap[post.slug] || 'Đang cập nhật'}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          <span>
                            {readTimeMap[post.slug] ? `${readTimeMap[post.slug]} phút đọc` : '— phút đọc'}
                          </span>
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
                </Link>
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
