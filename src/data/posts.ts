// src/data/posts.ts
export type CategoryKey = "love" | "lifestyle" | "legal" | "finance";

export const CATEGORIES: Record<
  CategoryKey,
  { title: string; url: string; color: string }
> = {
  love:      { title: "Tình yêu - Hôn nhân - Gia đình", url: "/blog/tinh-yeu-hon-nhan",  color: "bg-red-100 text-red-600" },
  lifestyle: { title: "Lối sống - Chữa lành - Tĩnh thức", url: "/blog/loi-song-chua-lanh", color: "bg-purple-100 text-purple-600" },
  legal:     { title: "Luật pháp ở Đức",                 url: "/blog/luat-phap",          color: "bg-blue-100 text-blue-600" },
  finance:   { title: "Tài chính - Quản lý chi tiêu",     url: "/blog/tai-chinh",          color: "bg-green-100 text-green-600" },
};

export type PostMeta = {
  slug: string;        // ví dụ "/posts/10-goi-y-de-ban-tro-nen-tu-tin"
  title: string;
  excerpt: string;
  image: string;
  category: CategoryKey;
  /** Đường dẫn TƯƠNG ĐỐI trong repo tới file .tsx (ví dụ: "src/pages/posts/TuTinPost.tsx") */
  sourcePath: string;
};

// ⚠️ GIỮ danh sách chỉ gồm những bài đã có file .tsx thật trong src/pages/posts/
export const POSTS: PostMeta[] = [
  {
    slug: "/posts/10-goi-y-de-ban-tro-nen-tu-tin",
    title: "10 gợi ý để bạn trở nên tự tin",
    excerpt:
      "Ai trong chúng ta cũng hiểu rằng, một người phụ nữ tự tin luôn là người cuốn hút...",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop",
    category: "lifestyle",
    sourcePath: "src/pages/posts/TuTinPost.tsx",
  },
  {
    slug: "/posts/10-cach-tha-thu-cho-chinh-minh",
    title: "10 cách tha thứ cho chính mình",
    excerpt:
      "Tự tha thứ không xoá đi quá khứ, nhưng giúp bạn bước tiếp nhẹ nhàng hơn...",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop",
    category: "lifestyle",
    sourcePath: "src/pages/posts/ThaThuBanThanPost.tsx",
  },
  // (Các bài khác thêm tiếp bên dưới khi cần)
];

// ──────────────────────────────────────────────────────────────
// Helpers cho trang Blog/Category
// ──────────────────────────────────────────────────────────────

/** Đếm số bài theo chuyên mục (dùng hiển thị "X bài viết") */
export function countByCategory(key: CategoryKey) {
  return POSTS.filter((p) => p.category === key).length;
}

/** Lấy danh sách bài theo chuyên mục (trang category dùng) */
export function postsByCategory(key: CategoryKey) {
  return POSTS.filter((p) => p.category === key);
}
