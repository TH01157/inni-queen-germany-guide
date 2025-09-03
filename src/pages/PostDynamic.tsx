import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import posts from "@/data/posts";

// Lấy tất cả component post trong thư mục ./posts (cùng cấp với file này)
const modules = import.meta.glob("./posts/*.tsx");

/** "src/pages/posts/TenFile.tsx" -> "./posts/TenFile.tsx" */
function toGlobKey(sourcePath: string) {
  const name = sourcePath.split("/").pop();
  return name ? `./posts/${name}` : undefined;
}

export default function PostDynamic() {
  const { slug } = useParams<{ slug: string }>();
  const target = `/posts/${slug ?? ""}`;

  const meta = posts.find((p) => p.slug === target);
  if (!meta) return <NotFound />;

  const key = toGlobKey(meta.sourcePath);
  const importer = key ? modules[key as keyof typeof modules] : undefined;
  if (!importer) return <NotFound />;

  const LazyPost = lazy(
    importer as () => Promise<{ default: React.ComponentType }>
  );

  return (
    <Suspense fallback={<div className="p-8 text-center">Đang tải bài viết…</div>}>
      <LazyPost />
    </Suspense>
  );
}
