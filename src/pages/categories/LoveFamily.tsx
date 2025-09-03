import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LoveFamily = () => {
  // Không có bài trong chuyên mục này
  const posts: never[] = [];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-rose-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Tình yêu - Hôn nhân - Gia đình
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Tư vấn mối quan hệ, hôn nhân và cuộc sống gia đình tại Đức
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {posts.length === 0 ? (
              <div className="card-soft p-10 text-center max-w-2xl mx-auto">
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  Chuyên mục đang cập nhật
                </h2>
                <p className="text-muted-foreground mb-6">
                  Hiện chưa có bài viết trong chuyên mục này.
                  Mời chị tham khảo bài viết tại chuyên mục{" "}
                  <Link to="/blog/loi-song-chua-lanh" className="text-primary underline">
                    Lối sống - Chữa lành - Tỉnh thức
                  </Link>
                  .
                </p>
                <div className="flex gap-3 justify-center">
                  <Button asChild>
                    <Link to="/blog">Về trang Blog</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/">Trang chủ</Link>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Nếu sau này có bài, render ở đây */}
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
