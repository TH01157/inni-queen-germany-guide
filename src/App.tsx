import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";

import Blog from "./pages/Blog";
// import các trang chuyên mục nếu có sau
import Post_10GoiY from "./pages/posts/10-goi-y-de-ban-tro-nen-tu-tin";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Blog */}
          <Route path="/blog" element={<Blog />} />
          {/* Categories (thêm dần sau):
              <Route path="/blog/tinh-yeu-hon-nhan" element={<CategoryLove />} />
          */}

          {/* Posts: tạm mount bài mẫu */}
          <Route
            path="/posts/10-goi-y-de-ban-tro-nen-tu-tin"
            element={<Post_10GoiY />}
          />

          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route
            path="*"
            element={
              <div className="max-w-4xl mx-auto px-4 py-16">
                <h1 className="text-3xl font-bold mb-2">404 – Không tìm thấy trang</h1>
                <p className="opacity-70">
                  Trang đang được phục hồi. Vui lòng quay lại Trang chủ.
                </p>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
