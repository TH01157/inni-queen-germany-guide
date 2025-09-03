import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { postsByCategory, CATEGORIES } from "@/data/posts";

async function fetchLatestCommitISODate(path: string) {
  const url = `https://api.github.com/repos/TH01157/inni-queen-germany-guide/commits?path=${encodeURIComponent(path)}&per_page=1`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Cannot fetch commit info");
  const data = await res.json();
  const iso = data?.[0]?.commit?.committer?.date ?? data?.[0]?.commit?.author?.date;
  return iso as string | undefined;
}
function formatViDate(dt: Date) {
  return dt.toLocaleDateString("vi-VN", { year: "numeric", month: "long", day: "numeric" });
}

const LoveFamily = () => {
  // GIỮ THAM CHIẾU ỔN ĐỊNH
  const posts = useMemo(() => postsByCategory("love"), []);
  const [commitDateMap, setCommitDateMap] = useState<Record<string, string>>({});

  useEffect(() => {
    // KHÔNG CÓ BÀI THÌ KHÔNG FETCH
    if (posts.length === 0) return;
    let cancelled = false;
    (async () => {
      const pairs = await Promise.all(
        posts.map(async (p) => {
          try {
            const iso = await fetchLatestCommitISODate(p.sourcePath);
            return [p.slug, iso ? formatViDate(new Date(iso)) : ""] as const;
          } catch {
            return [p.slug, ""] as const;
          }
        })
      );
      if (cancelled) return;
      const obj: Record<string, string> = {};
      for (const [slug, date] of pairs) obj[slug] = date;
      setCommitDateMap(obj);
    })();
    return () => {
      cancelled = true;
    };
    // chỉ phụ thuộc vào số lượng (ổn định), tránh phụ thuộc reference của mảng
  }, [posts.length]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        <section className="section-padding bg-gradient-to-br from-rose-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {CATEGORIES.love.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Tư vấn mối quan hệ, hôn nhân và cuộc sống gia đình tại Đức
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {posts.length === 0 ? (
              <div className="card-soft p-10 text-center max-w-2xl mx-auto">
                <h2 className="text-2xl font-semibold text-foreground mb-3">Chuyên mục đang cập nhật</h2>
                <p className="text-muted-foreground mb-6">
                  Hiện chưa có bài viết trong chuyên mục này. Mời chị tham khảo{" "}
                  <Link to="/blog/loi-song-chua-lanh" className="text-primary underline">
                    Lối sống - Chữa lành - Tỉnh thức
                  </Link>.
                </p>
                <div className="flex gap-3 justify-center">
                  <Link to="/blog" className="btn btn-primary px-4 py-2 rounded bg-primary text-primary-foreground">Về trang Blog</Link>
                  <Link to="/" className="btn px-4 py-2 rounded border">Trang chủ</Link>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <article key={post.slug} className="card-soft overflow-hidden group cursor-pointer relative">
                    <Link to={post.slug} className="absolute inset-0 z-30" aria-label={`Đọc: ${post.title}`} />
                    <div className="aspect-video overflow-hidden pointer-events-none">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 pointer-events-none">
                      <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                        <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">Tình yêu</span>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{commitDateMap[post.slug] || "Đang lấy ngày đăng..."}</span>
                        </div>
                      </div>
                      <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        <span className="pointer-events-none">{post.title}</span>
                      </h4>
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                      <div className="p-0 h-auto font-medium text-primary group-hover:underline flex items-center">
                        <span>Đọc tiếp</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LoveFamily;
