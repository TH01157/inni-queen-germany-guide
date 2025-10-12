// src/data/posts.ts
export type CategoryKey = "love" | "lifestyle" | "legal" | "finance";

export const CATEGORIES: Record<CategoryKey, { title: string; url: string; color?: string }> = {
  love:      { title: "Tình yêu & Hôn nhân",     url: "/blog/tinh-yeu-hon-nhan" },
  lifestyle: { title: "Lối sống chữa lành",      url: "/blog/loi-song-chua-lanh" },
  legal:     { title: "Luật pháp",               url: "/blog/luat-phap" },
  finance:   { title: "Tài chính",               url: "/blog/tai-chinh" },
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: CategoryKey;
  date: string; // ISO
  cover?: string;
};

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
    slug: "huong-dan-don-gian-ve-phan-quyen-nuoi-con-o-duc",
    title: "Phân quyền nuôi con ở Đức: Hướng dẫn đơn giản",
    excerpt: "Tóm tắt khái niệm pháp lý cơ bản cho phụ huynh người Việt tại Đức.",
    category: "legal",
    date: "2025-09-20",
  },
];
