import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Sparkles, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

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

const Lifestyle = () => {
  const posts = [
    {
      title: "10 gợi ý để bạn trở nên tự tin",
      excerpt:
        "Ai trong chúng ta cũng hiểu rằng, một người phụ nữ tự tin luôn là người cuốn hút và được phái nam để ý và theo đuổi, vậy sự tự tin đó tới từ đâu? Tin vui là các bạn hoàn toàn có thể tập luyện...",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
      url: "/posts/10-goi-y-de-ban-tro-nen-tu-tin",
      sourcePath: "src/pages/posts/TuTinPost.tsx",
    },
  ];

  const [commitDate, setCommitDate] = useState<string>("");

  useEffect(() => {
    fetchLatestCommitISODate("src/pages/posts/TuTinPost.tsx")
      .then((iso) => {
        if (iso) setCommitDate(formatViDate(new Date(iso)));
      })
      .catch(() => setCommitDate(""));
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-20 h-20 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Lối sống - Chữa lành - Tỉnh thức
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Phát triển bản thân, chữa lành tâm hồn và sống có ý thức
            </p>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <article
                  key={index}
                  className="card-soft overflow-hidden group cursor-pointer relative"
                >
                  {/* Overlay Link phủ toàn bộ card */}
                  <Link
                    to={post.url}
                    className="absolute inset-0 z-30"
                    aria-label={`Đọc: ${post.title}`}
                  />

                  <div className="aspect-video overflow-hidden pointer-events-none">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Nội dung (tắt pointer events để click xuyên xuống overlay) */}
                  <div className="p-6 pointer-events-none">
                    <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                      <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded text-xs">
                        Chữa lành
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{commitDate || "Đang lấy ngày đăng..."}</span>
                      </div>
                    </div>

                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      <span className="pointer-events-none">{post.title}</span>
                    </h4>

                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>

                    <div className="p-0 h-auto font-medium text-primary group-hover:underline flex items-center">
                      <span>Đọc tiếp</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
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

export default Lifestyle;
