// src/pages/Post.tsx
import { lazy, Suspense, useMemo } from "react";
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NotFound from "./NotFound";
import { POSTS } from "@/data/posts";

// Tạo bản đồ import động các file bài viết dưới ./posts
const postModules = import.meta.glob("./posts/*.tsx");

export default function Post() {
  const { slug = "" } = useParams();

  // Tìm metadata theo slug
  const meta = useMemo(
    () => POSTS.find((p) => p.slug.split("/").pop() === slug),
    [slug]
  );

  if (!meta) return <NotFound />;

  // Lấy tên file từ sourcePath (ví dụ: TuTinPost.tsx) rồi map sang key của glob
  const fileName = meta.sourcePath.split("/").pop()!;
  const importer = postModules[`./posts/${fileName}`];

  if (!importer) return <NotFound />;

  // React.lazy cần một hàm trả về Promise<{ default: ReactComponent }>
  const LazyPost = lazy(importer as () => Promise<{ default: React.ComponentType<any> }>);

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background">
          <Navigation />
          <main className="pt-20 section-padding">
            <p className="text-center text-muted-foreground">Đang tải bài viết…</p>
          </main>
          <Footer />
        </div>
      }
    >
      <LazyPost />
    </Suspense>
  );
}
