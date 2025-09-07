// src/lib/allPosts.ts
import { POSTS, type PostMeta, type CategoryKey } from "@/data/posts";
import { loadAllPosts, type MDPost } from "@/lib/mdPosts";

/** Chuyển 1 bài Markdown thành PostMeta để PostCard dùng chung */
function mdToPostMeta(p: MDPost): PostMeta {
  return {
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt ?? "",
    image:
      p.image ??
      "https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=800&h=600&fit=crop",
    category: (p.category ?? "lifestyle") as PostMeta["category"],
    sourcePath: p.sourcePath, // để usePostInfo vẫn lấy commit/readtime
  };
}

/** Lấy tất cả bài dưới dạng PostMeta (TSX + Markdown) */
export function getAllPostMetas(): PostMeta[] {
  const mdAsMetas = loadAllPosts().map(mdToPostMeta);
  // Ưu tiên bài có date mới trước (nếu Markdown có date)
  return [
    ...mdAsMetas.sort((a, b) => {
      const ma = loadAllPosts().find((m) => m.slug === a.slug);
      const mb = loadAllPosts().find((m) => m.slug === b.slug);
      const da = ma?.date ? new Date(ma.date).getTime() : 0;
      const db = mb?.date ? new Date(mb.date).getTime() : 0;
      return db - da;
    }),
    ...POSTS,
  ];
}

/** Đếm theo chuyên mục, gồm cả Markdown */
export function countAllByCategory(key: CategoryKey) {
  return getAllPostMetas().filter((p) => p.category === key).length;
}
