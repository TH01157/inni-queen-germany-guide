// src/data/posts.ts
export type CategoryKey = "love" | "lifestyle" | "legal" | "finance";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: CategoryKey;
  date: string;      // ISO
  cover?: string;
};

export const CATEGORIES: Record<CategoryKey, { title: string; url: string }> = {
  love:      { title: "Tình yêu & Hôn nhân", url: "/blog/tinh-yeu-hon-nhan" },
  lifestyle: { title: "Lối sống chữa lành",  url: "/blog/loi-song-chua-lanh" },
  legal:     { title: "Luật pháp",           url: "/blog/luat-phap" },
  finance:   { title: "Tài chính",           url: "/blog/tai-chinh" },
};

// 👇 Chèn bài thật của chị vào đây; tạm thời em để 6 bài mẫu để lên layout
export const POSTS: Post[] = [
  {
    slug: "10-goi-y-de-ban-tro-nen-tu-tin",
    title: "10 gợi ý để bạn trở nên tự tin",
    excerpt: "Những bước nhỏ hằng ngày để dựng lại sự tự tin từ bên trong.",
    category: "lifestyle",
    date: "2025-10-01",
    cover: "/cover-default.jpg",
  },
  {
    slug: "huong-dan-phan-quyen-nuoi-con-o-duc",
    title: "Phân quyền nuôi con ở Đức: Hướng dẫn đơn giản",
    excerpt: "Tóm tắt khái niệm pháp lý cơ bản cho phụ huynh người Việt tại Đức.",
    category: "legal",
    date: "2025-09-20",
  },
  {
    slug: "quan-ly-tai-chinh-gia-dinh-tai-duc",
    title: "Quản lý tài chính gia đình tại Đức",
    excerpt: "Khởi tạo quỹ an toàn, bảo hiểm và tiết kiệm thông minh.",
    category: "finance",
    date: "2025-09-05",
  },
  {
    slug: "giao-tiep-lanh-manh-trong-hon-nhan",
    title: "Giao tiếp lành mạnh trong hôn nhân",
    excerpt: "4 nguyên tắc căn bản giúp hai người hiểu và tôn trọng ranh giới.",
    category: "love",
    date: "2025-08-28",
  },
  {
    slug: "thuc-hanh-chua-lanh-moi-ngay",
    title: "Thực hành chữa lành mỗi ngày",
    excerpt: "3 nghi thức nhỏ buổi sáng cho tâm trí bình an.",
    category: "lifestyle",
    date: "2025-08-20",
  },
  {
    slug: "nhung-luu-y-khi-ky-hop-dong-thue-nha",
    title: "Lưu ý khi ký hợp đồng thuê nhà tại Đức",
    excerpt: "Các điều khoản thường gặp & lỗi phổ biến cần tránh.",
    category: "legal",
    date: "2025-08-10",
  },
];

export function countByCategory() {
  return POSTS.reduce<Record<CategoryKey, number>>((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, { love: 0, lifestyle: 0, legal: 0, finance: 0 });
}
