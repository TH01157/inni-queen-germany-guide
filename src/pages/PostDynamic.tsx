import React from "react";
import { useParams } from "react-router-dom";
import { POSTS } from "@/data/posts";
import NotFound from "@/pages/NotFound";

const modules = import.meta.glob("/src/pages/posts/**/*.tsx");

export default function PostDynamic() {
  const { slug } = useParams();
  const entry = POSTS.find(p => p.slug === `/posts/${slug}`);
  if (!entry) return <NotFound />;

  const importer = modules[`/src/${entry.sourcePath}`];
  if (!importer) return <NotFound />;

  const LazyPost = React.lazy(importer as any);

  return (
    <React.Suspense fallback={<div className="section-padding text-center">Đang tải bài viết…</div>}>
      <LazyPost />
    </React.Suspense>
  );
}
