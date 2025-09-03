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
  // ===== Love / Hôn nhân – 6 bài mới =====
  {
    slug: "/posts/10-dieu-dan-ong-thich-o-phu-nu",
    title: "10 điều mà đàn ông thường thích ở phụ nữ.",
    excerpt:
      "Từ tự tin, độc lập đến sự chân thành và hài hước — 10 phẩm chất thu hút phái mạnh trong mối quan hệ.",
    image:
      "https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?w=400&h=300&fit=crop",
    category: "love",
    sourcePath: "src/pages/posts/DanOngThichOPNPost.tsx",
  },
  {
    slug: "/posts/10-bi-quyet-hanh-phuc-hon-nhan-ben-vung",
    title: "Biết 10 bí quyết sau, hôn nhân sẽ bền vững.",
    excerpt:
      "Giao tiếp hiệu quả, tôn trọng, chia sẻ trách nhiệm và duy trì lãng mạn — nền tảng cho hôn nhân bền lâu.",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=300&fit=crop",
    category: "love",
    sourcePath: "src/pages/posts/BiQuyetHonNhanBenVungPost.tsx",
  },
  {
    slug: "/posts/8-nguyen-tac-tro-chuyen-trong-hon-nhan",
    title: "8 Nguyên tắc nghệ thuật trò chuyện trong hôn nhân bạn cần biết.",
    excerpt:
      "Lắng nghe chân thành, nói thật lòng và giải quyết xung đột lành mạnh giúp tình cảm bền chặt.",
    image:
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=400&h=300&fit=crop",
    category: "love",
    sourcePath: "src/pages/posts/NguyenTacTroChuyenHonNhanPost.tsx",
  },
  {
    slug: "/posts/7-dieu-de-hanh-phuc-ben-lau",
    title: "7 điều cần làm để hạnh phúc bền lâu.",
    excerpt:
      "Xây dựng tin tưởng, tôn trọng khác biệt, hỗ trợ cảm xúc và phát triển cùng nhau.",
    image:
      "https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=400&h=300&fit=crop",
    category: "love",
    sourcePath: "src/pages/posts/HanhPhucBenLauPost.tsx",
  },
  {
    slug: "/posts/tinh-yeu-qua-cac-giai-doan",
    title: "Tình yêu qua các giai đoạn.",
    excerpt:
      "Tình yêu biến chuyển từ mãnh liệt tuổi trẻ đến sâu lắng, bao dung ở những chặng đời sau.",
    image:
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=300&fit=crop",
    category: "love",
    sourcePath: "src/pages/posts/TinhYeuQuaCacGiaiDoanPost.tsx",
  },
  {
    slug: "/posts/10-dieu-trong-moi-quan-he-doc-hai",
    title: "10 điều xảy ra trong mối quan hệ độc hại.",
    excerpt:
      "Nhận diện kiểm soát, lạm dụng cảm xúc và cô lập — để bảo vệ bản thân và tìm sự trợ giúp đúng lúc.",
    image:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&h=300&fit=crop",
    category: "love",
    sourcePath: "src/pages/posts/MoiQuanHeDocHaiPost.tsx",
  },

  // ===== Finance – 2 bài mới =====
  {
    slug: "/posts/8-y-nghia-cua-tien-trong-cuoc-song",
    title: "TIỀN – 8 Ý nghĩa của tiền trong cuộc sống.",
    excerpt:
      "Tiền là công cụ hữu ích, nhưng không mua được tình yêu chân thành, thời gian hay bình yên nội tâm.",
    image:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=300&fit=crop",
    category: "finance",
    sourcePath: "src/pages/posts/YNghiaCuaTienPost.tsx",
  },
  {
    slug: "/posts/10-cau-noi-noi-tien-bac",
    title: "10 câu nói nổi tiếng về tiền bạc.",
    excerpt:
      "Từ Franklin đến Buffett: những góc nhìn đậm chất chiêm nghiệm về tiền, tự do, giá trị và hạnh phúc.",
    image:
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=400&h=300&fit=crop",
    category: "finance",
    sourcePath: "src/pages/posts/CauNoiTienBacPost.tsx",
  },
];

// Helpers tái sử dụng
export function postsByCategory(cat: CategoryKey) {
  return POSTS.filter((p) => p.category === cat);
}
export function countByCategory(cat: CategoryKey) {
  return postsByCategory(cat).length;
}
