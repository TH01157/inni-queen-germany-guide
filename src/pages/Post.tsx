// src/pages/Post.tsx
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getPostBySlug } from "@/data/posts";

// Tạo map import tự động cho tất cả file trong /src/pages/posts
const modules = import.meta.glob("/src/pages/posts/*.tsx");

export default function Post() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(`/posts/${slug}`) : undefined;

  if (!post) {
    // fallback NotFound đơn giản ngay trong trang (để không văng trắng)
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-2xl font-semibold mb-3">404</h1>
            <p className="text-muted-foreground">Bài viết không tồn tại.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const key = `/${post.sourcePath}`; // ví dụ: /src/pages/posts/TuTinPost.tsx
  const importer = modules[key];

  if (!importer) {
    // Nếu đường dẫn sai, hiển thị thông báo thay vì crash
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-2xl font-semibold mb-3">Lỗi tải bài viết</h1>
            <p className="text-muted-foreground">
              Không tìm thấy component cho bài: <code>{post.title}</code>. Kiểm tra lại <code>{post.sourcePath}</code>.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Lazy load component của bài viết
  // @ts-ignore – Vite trả default export là React component
  const LazyComp = (await importer()).default;

  return <LazyComp />;
}
