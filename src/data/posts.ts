// src/data/posts.ts
export type CategoryKey = "love" | "lifestyle" | "legal" | "finance";

export const CATEGORIES: Record<CategoryKey, { title: string; url: string; color: string }> = {
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

export type PostMeta = {
  slug: string;          // "/posts/ten-bai"
  title: string;
  excerpt: string;
  image: string;
  category: CategoryKey;
  sourcePath: string;    // "src/pages/posts/TuTinPost.tsx" -> dùng để nạp component & lấy ngày commit
};

export const POSTS: PostMeta[] = [
  {
    slug: "/posts/10-goi-y-de-ban-tro-nen-tu-tin",
    title: "10 gợi ý để bạn trở nên tự tin",
    excerpt:
      "Ai trong chúng ta cũng hiểu rằng, một người phụ nữ tự tin luôn là người cuốn hút và được phái nam để ý và theo đuổi...",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
    category: "lifestyle",
    sourcePath: "src/pages/posts/TuTinPost.tsx",
  },
  {
    slug: "/posts/10-cach-tha-thu-cho-chinh-minh",
    title: "10 cách tha thứ cho chính mình.",
    excerpt:
      "Tự tha thứ không xóa đi quá khứ, nhưng giúp bạn bước tiếp nhẹ nhàng hơn — với hiểu biết, từ bi và trách nhiệm.",
    image:
      "https://images.unsplash.com/photo-1518655048521-f130df041f66?w=400&h=300&fit=crop",
    category: "lifestyle",
    sourcePath: "src/pages/posts/ThaThuBanThanPost.tsx",
  },
];

// Helpers tái sử dụng
export function postsByCategory(cat: CategoryKey) {
  return POSTS.filter((p) => p.category === cat);
}
export function countByCategory(cat: CategoryKey) {
  return postsByCategory(cat).length;
}
