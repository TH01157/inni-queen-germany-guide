// src/data/posts.ts
export type CategoryKey = "love" | "lifestyle" | "legal" | "finance";

export const CATEGORIES: Record<
  CategoryKey,
  { title: string; url: string; color: string }
> = {
  love:      { title: "Tình yêu - Hôn nhân - Gia đình", url: "/blog/tinh-yeu-hon-nhan",  color: "bg-red-100 text-red-600" },
  lifestyle: { title: "Lối sống - Chữa lành - Tỉnh thức", url: "/blog/loi-song-chua-lanh", color: "bg-purple-100 text-purple-600" },
  legal:     { title: "Luật pháp ở Đức",                 url: "/blog/luat-phap",          color: "bg-blue-100 text-blue-600" },
  finance:   { title: "Tài chính - Quản lý chi tiêu",     url: "/blog/tai-chinh",          color: "bg-green-100 text-green-600" },
};

export type PostMeta = {
  slug: string;        // URL public, ví dụ "/posts/10-goi-y-de-ban-tro-nen-tu-tin"
  title: string;
  excerpt: string;
  image: string;
  category: CategoryKey;
  sourcePath: string;  // ĐƯỜNG DẪN TƯƠNG ĐỐI tới file .tsx trong repo
};

// ✅ CHỈ liệt kê bài có file thật trong src/pages/posts/*.tsx (giữ nguyên tên file chị đã gửi)
export const POSTS: PostMeta[] = [
  // Lifestyle
  {
    slug: "/posts/10-goi-y-de-ban-tro-nen-tu-tin",
    title: "10 gợi ý để bạn trở nên tự tin",
    excerpt: "Những bước thực tế để nuôi dưỡng sự tự tin và bản lĩnh mỗi ngày.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=800&fit=crop",
    category: "lifestyle",
    sourcePath: "src/pages/posts/TuTinPost.tsx",
  },
  {
    slug: "/posts/10-cach-tha-thu-cho-chinh-minh",
    title: "10 cách tha thứ cho chính mình",
    excerpt: "Tự tha thứ không xoá đi quá khứ — mà giúp mình bước tiếp nhẹ nhàng hơn.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&h=800&fit=crop",
    category: "lifestyle",
    sourcePath: "src/pages/posts/ThaThuBanThanPost.tsx",
  },

  // Love (tình yêu – hôn nhân – gia đình)
  {
    slug: "/posts/10-dieu-dan-ong-thich-o-phu-nu",
    title: "10 điều mà đàn ông thường thích ở phụ nữ",
    excerpt: "Tự tin, chân thành, giao tiếp tốt… những phẩm chất chạm tới trái tim.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&h=800&fit=crop",
    category: "love",
    sourcePath: "src/pages/posts/DanOngThichOPNPost.tsx",
  },
  {
    slug: "/posts/10-bi-quyet-hon-nhan-ben-vung",
    title: "Biết 10 bí quyết sau, hôn nhân sẽ bền vững",
    excerpt: "Giao tiếp, tôn trọng, biết ơn và cùng nhau lớn lên theo thời gian.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop",
    category: "love",
    sourcePath: "src/pages/posts/BiQuyetHonNhanBenVungPost.tsx",
  },
  {
    slug: "/posts/8-nguyen-tac-tro-chuyen-trong-hon-nhan",
    title: "8 Nguyên tắc nghệ thuật trò chuyện trong hôn nhân",
    excerpt: "Lắng nghe chân thành, nói thật lòng, và giải quyết xung đột lành mạnh.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=800&fit=crop",
    category: "love",
    sourcePath: "src/pages/posts/NguyenTacTroChuyenHonNhanPost.tsx",
  },
  {
    slug: "/posts/7-dieu-giup-hanh-phuc-ben-lau",
    title: "7 điều cần làm để hạnh phúc bền lâu",
    excerpt: "Tin tưởng, thấu hiểu và đồng hành — nền tảng cho hạnh phúc dài lâu.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&h=800&fit=crop",
    category: "love",
    sourcePath: "src/pages/posts/HanhPhucBenLauPost.tsx",
  },
  {
    slug: "/posts/tinh-yeu-qua-cac-giai-doan",
    title: "Tình yêu qua các giai đoạn",
    excerpt: "Tình yêu trưởng thành theo từng chặng của đời người — và đẹp hơn khi hiểu nhau.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&h=800&fit=crop",
    category: "love",
    sourcePath: "src/pages/posts/TinhYeuQuaCacGiaiDoanPost.tsx",
  },
  {
    slug: "/posts/10-dieu-trong-moi-quan-he-doc-hai",
    title: "10 điều xảy ra trong mối quan hệ độc hại",
    excerpt: "Kiểm soát, cô lập, bạo lực tinh thần… Dấu hiệu cần nhận diện để bảo vệ mình.",
    image: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?w=1200&h=800&fit=crop",
    category: "love",
    sourcePath: "src/pages/posts/MoiQuanHeDocHaiPost.tsx",
  },

  // Finance (tài chính)
  {
    slug: "/posts/8-y-nghia-cua-tien",
    title: "TIỀN – 8 Ý nghĩa của tiền trong cuộc sống",
    excerpt: "Tiền mang đến sự chủ động và an toàn — nhưng không mua được bình yên nội tâm.",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1200&h=800&fit=crop",
    category: "finance",
    sourcePath: "src/pages/posts/YNghiaCuaTienPost.tsx",
  },
  {
    slug: "/posts/10-cau-noi-noi-tieng-ve-tien-bac",
    title: "10 câu nói nổi tiếng về tiền bạc",
    excerpt: "Những góc nhìn sâu sắc về tiền — từ Franklin đến Warren Buffett.",
    image: "https://images.unsplash.com/photo-1459257831348-f0cdd359235f?w=1200&h=800&fit=crop",
    category: "finance",
    sourcePath: "src/pages/posts/CauNoiTienBacPost.tsx",
  },
];

// Helpers
export function countByCategory(key: CategoryKey) {
  return POSTS.filter((p) => p.category === key).length;
}

export function getPostBySlug(slug: string): PostMeta | undefined {
  return POSTS.find((p) => p.slug === slug);
}
