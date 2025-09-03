import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Scale, TrendingUp, ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { POSTS, CATEGORIES, countByCategory } from "@/data/posts";

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
  return dt.toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const BlogSection = () => {
  const counts = countByCategory();

  const iconMap = {
    love: Heart,
    lifestyle: Sparkles,
    legal: Scale,
    finance: TrendingUp,
  } as const;

  const categories = (Object.keys(CATEGORIES) as Array<keyof typeof CATEGORIES>).map(
    (key) => ({
      key,
      icon: iconMap[key],
      title: CATEGORIES[key].title,
      url: CATEGORIES[key].url,
      color: CATEGORIES[key].color,
      posts: counts[key],
    })
  );

  const featuredPosts = POSTS;
  const [commitDateMap, setCommitDateMap] = useState<Record<string, string>>({});

  useEffect(() => {
    Promise.all(
      featuredPosts.map(async (p) => {
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
  }, [featuredPosts]);

  return (
    <section id="blog" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Blog & Chia sẻ{" "}
            <span className="gradient-hero bg-clip-text text-transparent">kinh nghiệm</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Những câu chuyện, kiến thức và kinh nghiệm thực tế để giúp bạn phát triển và thành công
          </p>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <article key={category.key} className="card-soft p-6 text-center group cursor-pointer relative">
                <Link to={category.url} className="absolute inset-0 z-30" aria-label={category.title} />
                <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  <span className="pointer-events-none">{category.title}</span>
                </h3>
                <div className="text-xs text-primary font-medium pointer-events-none">
                  {category.posts} bài viết
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Bài viết nổi bật</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
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
                      {CATEGORIES[post.category].title.split(" - ")[0]}
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
                  <div className="p-0 h-auto font-medium text-primary group-hover:underline">
                    <span className="pointer-events-none">Đọc tiếp</span>
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="card-soft p-8 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Đăng ký nhận bản tin
          </h3>
          <p className="text-muted-foreground mb-6">
            Nhận những bài viết mới nhất và kiến thức hữu ích từ Thu Từ Tâm mỗi tuần
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="px-6">Đăng ký</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
