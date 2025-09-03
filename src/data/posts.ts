// src/data/posts.ts
export type CategoryKey = "love" | "lifestyle" | "legal" | "finance";

export interface PostMeta {
  slug: string;              // URL đến bài viết (route SPA)
  title: string;
  excerpt: string;
  image: string;
  category: CategoryKey;
  sourcePath: string;        // Đường dẫn file .tsx của bài (dùng lấy ngày commit)
}

export const POSTS: PostMeta[] = [
  {
    slug: "/posts/10-goi-y-de-ban-tro-nen-tu-tin",
    title: "10 gợi ý để bạn trở nên tự tin",
    excerpt:
      "Ai trong chúng ta cũng hiểu rằng, một người phụ nữ tự tin luôn là người cuốn hút và được phái nam để ý và theo đuổi, vậy sự tự tin đó tới từ đâu? Tin vui là các bạn hoàn toàn có thể tập luyện...",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
    category: "lifestyle",
    sourcePath: "src/pages/posts/TuTinPost.tsx",
  },
  // Sau này thêm bài: chỉ cần thêm 1 object PostMeta ở đây
];

export const CATEGORIES: Record<
  CategoryKey,
  { title: string; url: string; color: string }
> = {
  love: {
    title: "Tình yêu - Hôn nhân - Gia đình",
    url: "/blog/tinh-yeu-hon-nhan",
    color: "bg-red-100 text-red-600",
  },
  lifestyle: {
    title: "Lối sống - Chữa lành - Tỉnh thức",
    url: "/blog/loi-song-chua-lanh",
    color: "bg-purple-100 text-purple-600",
  },
  legal: {
    title: "Luật pháp ở Đức",
    url: "/blog/luat-phap",
    color: "bg-blue-100 text-blue-600",
  },
  finance: {
    title: "Tài chính - Quản lý chi tiêu",
    url: "/blog/tai-chinh",
    color: "bg-green-100 text-green-600",
  },
};

export function countByCategory(): Record<CategoryKey, number> {
  const counts: Record<CategoryKey, number> = {
    love: 0,
    lifestyle: 0,
    legal: 0,
    finance: 0,
  };
  for (const p of POSTS) counts[p.category] += 1;
  return counts;
}

// ➜ NEW: helper trả về danh sách bài của 1 chuyên mục
export function postsByCategory(cat: CategoryKey) {
  return POSTS.filter((p) => p.category === cat);
}
