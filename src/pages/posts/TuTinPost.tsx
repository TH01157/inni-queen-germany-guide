import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// ---- Helpers ----
function estimateReadingTimeFromText(text: string, wpm = 220) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / wpm));
  return `${minutes} phút đọc`;
}

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
  const d = dt.toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const t = dt.toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" });
  return `${t}, ${d}`;
}

const TuTinPost = () => {
  const [readTime, setReadTime] = useState<string>("");
  const [publishedAt, setPublishedAt] = useState<string>("");

  useEffect(() => {
    // Tính thời gian đọc từ nội dung thực tế trong trang
    const el = document.querySelector("article.prose");
    const text = (el?.textContent || "").replace(/\s+/g, " ").trim();
    if (text) setReadTime(estimateReadingTimeFromText(text));

    // Lấy giờ đăng theo commit mới nhất của file bài viết
    fetchLatestCommitISODate("src/pages/posts/TuTinPost.tsx")
      .then((iso) => {
        if (iso) setPublishedAt(formatViDate(new Date(iso)));
      })
      .catch(() => {
        // fallback: không hiển thị nếu lỗi
        setPublishedAt("");
      });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/blog/loi-song-chua-lanh"
              className="inline-flex items-center text-primary hover:text-primary-foreground hover:bg-primary transition-colors rounded px-2 py-1 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại danh sách bài viết
            </Link>

            <div className="text-center">
              <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                Lối sống - Chữa lành
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-6 mb-6">
                10 gợi ý để bạn trở nên tự tin
              </h1>

              <div className="flex items-center justify-center gap-6 text-muted-foreground text-sm">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{publishedAt || "Đang lấy giờ đăng..."}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{readTime || "Đang tính thời gian đọc..."}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="prose prose-lg max-w-none">
              <div className="mb-8">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop"
                  alt="Phụ nữ tự tin"
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                />
              </div>

              <div className="text-foreground space-y-6">
                <p className="text-xl leading-relaxed font-medium">
                  <strong>
                    Ai trong chúng ta cũng hiểu rằng, một người phụ nữ tự tin luôn là người cuốn hút
                    và được phái nam để ý và theo đuổi, vậy sự tự tin đó tới từ đâu?
                  </strong>
                </p>

                <p className="text-lg leading-relaxed">
                  Tin vui là các bạn hoàn toàn có thể tập luyện. Để phụ nữ phát triển sự tự tin, có
                  một số bước cơ bản và chiến lược hữu ích mà họ có thể áp dụng:
                </p>

                <div className="space-y-6">
                  {/* 1 -> 10 như cũ */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">1. Tự Nhận Thức</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Bắt đầu bằng cách nhận thức về bản thân, bao gồm những điểm mạnh, điểm yếu, giá trị, và mục tiêu. Hiểu rõ bản thân giúp xây dựng nền tảng vững chắc cho sự tự tin.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">2. Đặt Mục Tiêu Cá Nhân</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Xác định mục tiêu cá nhân và làm việc hướng tới chúng. Điều này không chỉ tạo ra cảm giác thành tựu mà còn khẳng định khả năng của bản thân.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">3. Kỷ Luật và Thực Hành</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Tự tin được xây dựng qua thời gian và thực hành. Hãy thực hành kỷ luật bản thân trong việc đặt ra và theo đuổi mục tiêu.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">4. Chấp Nhận và Yêu Thương Bản Thân</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Hãy chấp nhận bản thân với tất cả khuyết điểm và điểm mạnh. Yêu thương bản thân không phải là sự ích kỷ mà là nền tảng để phát triển sự tự tin.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">5. Học Cách Đối Mặt Với Sợ Hãi</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Đối mặt và vượt qua nỗi sợ hãi. Bất kỳ bước tiến nào, dù nhỏ, cũng là bước tiến hướng tới việc tăng cường sự tự tin.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">6. Tự Chăm Sóc</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Sức khỏe thể chất và tinh thần đóng vai trò quan trọng trong việc xây dựng sự tự tin. Hãy chăm sóc bản thân thông qua chế độ ăn uống lành mạnh, tập thể dục, và thời gian nghỉ ngơi đầy đủ.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">7. Tìm Kiếm Sự Hỗ Trợ</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Đôi khi, việc tìm kiếm sự hỗ trợ từ bạn bè, gia đình, hoặc chuyên gia có thể giúp bạn xây dựng và duy trì sự tự tin.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">8. Học Hỏi Từ Thất Bại</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Hãy nhìn nhận thất bại như là cơ hội để học hỏi, không phải là điểm kết thúc. Mỗi thất bại là một bài học giúp bạn mạnh mẽ và tự tin hơn.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">9. Thực Hành Tự Nói Chuyện Tích Cực</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Tự nói chuyện tích cực và khích lệ bản thân. Lời nói của chính bạn có ảnh hưởng lớn tới suy nghĩ và cảm xúc.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">10. Thể Hiện Bản Thân</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Đừng ngần ngại thể hiện ý kiến và cảm xúc của mình. Việc thể hiện bản thân là một phần quan trọng của việc xây dựng sự tự tin.
                    </p>
                  </div>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg mt-8">
                  <p className="text-lg font-medium text-foreground">
                    <strong>
                      Nhớ rằng, việc xây dựng sự tự tin là một hành trình, không phải là điểm đến.
                      Mỗi bước nhỏ bạn thực hiện đều là một phần quan trọng của hành trình đó.
                    </strong>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TuTinPost;
