import { Suspense, lazy, useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { POSTS } from "@/data/posts";

const modules = import.meta.glob("./posts/*.tsx");

function fallbackUI(title?: string) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="section-padding">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-muted rounded w-2/3" />
              <div className="h-4 bg-muted rounded w-1/3" />
              <div className="h-64 bg-muted rounded" />
              <div className="h-4 bg-muted rounded" />
              <div className="h-4 bg-muted rounded w-5/6" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default function Post() {
  const { slug } = useParams(); // ví dụ "10-goi-y-de-ban-tro-nen-tu-tin"
  const fullSlug = `/posts/${slug}`;

  // Tìm meta bài từ registry
  const meta = useMemo(
    () => POSTS.find((p) => p.slug === fullSlug),
    [fullSlug]
  );

  // Không có meta -> về 404
  if (!meta) return <Navigate to="*" replace />;

  // `sourcePath` trong registry đang là "src/pages/posts/TuTinPost.tsx"
  // Map thành key mà import.meta.glob dùng: "./posts/TuTinPost.tsx"
  const relKey = `./posts/${meta.sourcePath.split("/").pop()}`;
  const loader = modules[relKey];

  if (!loader) {
    // Nếu dev đổi tên file mà quên update registry
    return <Navigate to="*" replace />;
  }

  const LazyPost = lazy(loader as any);

  return (
    <Suspense fallback={fallbackUI(meta.title)}>
      <LazyPost />
    </Suspense>
  );
}
