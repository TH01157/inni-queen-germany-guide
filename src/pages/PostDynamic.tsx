import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { posts } from "@/data/posts";

// Tạo map các bài viết trong thư mục posts (từ src/pages/PostDynamic.tsx nhìn sang ./posts)
const modules = import.meta.glob("./posts/*.tsx");

/** Chuyển sourcePath "src/pages/posts/ABC.tsx" -> glob key "./posts/ABC.tsx" */
function toGlobKey(sourcePath: string) {
  const m = sourcePath.match(/src\/pages\/(posts\/.+\.tsx)$/);
  return m ? `./${m[1]}` : undefined;
}

export default function PostDynamic() {
  const { slug } = useParams<{ slug: string }>();

  // Tìm metadata theo slug
  const meta = posts.find((p) => p.slug === slug);
  if (!meta) return <NotFound />;

  // Map sang key của import.meta.glob
  const key = toGlobKey(meta.sourcePath);
  const importer = key ? modules[key] : undefined;
  if (!importer) return <NotFound />;

  // Lazy import đúng component bài viết
  const LazyPost = lazy(importer as unknown as () => Promise<{ default: React.ComponentType }>);

  return (
    <Suspense
      fallback={
        <div className="py-24 text-center text-muted-foreground">
          Đang tải bài viết…
        </div>
      }
    >
      <LazyPost />
    </Suspense>
  );
}
