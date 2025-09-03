// src/pages/Post.tsx
import { lazy, Suspense, useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import { POSTS } from "@/data/posts";

const modules = import.meta.glob("./posts/*.tsx");

function fallbackUI(title: string) {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="text-center space-y-3">
        <div className="text-muted-foreground">Đang tải bài viết…</div>
        <div className="font-semibold text-lg">{title}</div>
      </div>
    </div>
  );
}

export default function Post() {
  // Nhận slug & chuẩn hoá: bỏ mọi dấu "/" ở cuối (nếu người dùng gõ thêm)
  const { slug: raw = "" } = useParams();
  const slug = raw.replace(/\/+$/g, ""); // "a/", "a///" -> "a"
  const fullSlug = `/posts/${slug}`;

  // Tìm meta bài từ registry
  const meta = useMemo(() => POSTS.find((p) => p.slug === fullSlug), [fullSlug]);

  // Không có meta -> về 404
  if (!meta) return <Navigate to="*" replace />;

  // Từ sourcePath lấy ra tên file .tsx trong ./posts
  const fileName = meta.sourcePath.split("/").pop(); // "TuTinPost.tsx"
  const relKey = `./posts/${fileName}`;

  const loader = modules[relKey];
  if (!loader) {
    // Nếu đổi tên file mà quên cập nhật registry
    return <Navigate to="*" replace />;
  }

  const LazyPost = lazy(loader as any);

  return (
    <Suspense fallback={fallbackUI(meta.title)}>
      <LazyPost />
    </Suspense>
  );
}
