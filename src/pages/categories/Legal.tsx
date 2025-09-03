import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Scale, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { postsByCategory, CATEGORIES } from "@/data/posts";

async function fetchLatestCommitISODate(path: string) {
  const url = `https://api.github.com/repos/TH01157/inni-queen-germany-guide/commits?path=${encodeURIComponent(
    path
  )}&per_page=1`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Cannot fetch commit info");
  const data = await res.json();
  const iso =
    data?.[0]?.commit?.committer?.date ?? data?.[0]?.commit?.author?.date;
  return iso as string | undefined;
}
function formatViDate(dt: Date) {
  return dt.toLocaleDateString("vi-VN", { year: "numeric", month: "long", day: "numeric" });
}

const Legal = () => {
  const posts = postsByCategory("legal");
  const [commitDateMap, setCommitDateMap] = useState<Record<string, string>>({});

  useEffect(() => {
    Promise.all(
      posts.map(async (p) => {
        try {
          const iso = await fetchLatestCommitISODate(p.sourcePath);
          return [p.slug, iso ? formatViDate(new Date(iso)) : ""] as const;
        } catch {
          return [p.slug, ""] as const;
        }
      })
    ).then((pairs) => {
      const obj: Record<string, string> = {};
      for (const [slug, date] of pairs) obj[slug] = date;
      setCommitDateMap(obj);
    });
  }, [posts]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="section-padding bg-gradient-to-br from-blue-50 to-sky-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Scale className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {CATEGORIES.legal.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Hướng dẫn về luật pháp, quyền lợi và nghĩa vụ của người nước ngoài
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {posts.length === 0 ? (
              <div className="card-soft p-10 text-center max-w-2xl mx-auto">
                <h2 className="text-2xl font-semibold text-foreground mb-3">Chuyên mục đang cập nhật</h2>
                <p className="text-muted-foreground">Hiện chưa có bài viết trong chuyên mục này.</p>
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
                        <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                          Luật pháp
                        </span>
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

export default Legal;
