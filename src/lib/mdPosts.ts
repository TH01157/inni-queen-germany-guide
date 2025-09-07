// src/lib/mdPosts.ts
import matter from "gray-matter";

// ====== Kiểu dữ liệu bài Markdown ======
export type MDPost = {
  slug: string;                 // /posts/hello-world
  title: string;
  excerpt?: string;
  image?: string;
  category?: "love" | "lifestyle" | "legal" | "finance";
  date?: string;                // ISO hoặc yyyy-mm-dd
  readingMinutes: number;       // tính từ content
  content: string;              // markdown body
  sourcePath: string;           // đường dẫn file trong repo
};

// ====== Tính thời gian đọc (200 wpm) ======
function readingTimeMinutes(text: string, wpm = 200) {
  const words = text
    .replace(/```[\s\S]*?```/g, " ") // bỏ code block để không thổi số
    .replace(/\s+/g, " ")
    .trim()
    .split(" ").filter(Boolean).length;
  return Math.max(1, Math.ceil(words / wpm));
}

// ====== Chuẩn hoá slug từ front-matter hoặc từ path ======
function normalizeSlug(frontSlug: unknown, path: string) {
  if (typeof frontSlug === "string" && frontSlug.startsWith("/posts/")) {
    return frontSlug;
  }
  // nếu không có, tạo từ file name: content/posts/abc/xyz.md -> /posts/abc/xyz
  const noExt = path.replace(/\.md$/i, "");
  const afterRoot = noExt.replace(/^.*?content\/posts\//, "");
  return `/posts/${afterRoot}`;
}

// ====== ĐỌC TẤT CẢ .md (eager, as raw) ======
const modules = import.meta.glob("/content/posts/**/*.md", {
  as: "raw",
  eager: true,
}) as Record<string, string>;

// Parse ngay tại module init để dùng sync
const ALL_MD_POSTS: MDPost[] = Object.entries(modules).map(([path, raw]) => {
  const { data, content } = matter(raw);

  const slug = normalizeSlug(data.slug, path);
  const title = String(data.title ?? "Untitled");
  const excerpt = data.excerpt ? String(data.excerpt) : undefined;
  const image = data.image ? String(data.image) : undefined;
  const category = data.category as MDPost["category"] | undefined;
  const date = data.date ? String(data.date) : undefined;

  return {
    slug,
    title,
    excerpt,
    image,
    category,
    date,
    readingMinutes: readingTimeMinutes(content),
    content,
    sourcePath: path.replace(/^\//, ""), // bỏ dấu / đầu cho đồng nhất
  };
}).sort((a, b) => {
  // sắp xếp mới nhất trước nếu có date
  const da = a.date ? new Date(a.date).getTime() : 0;
  const db = b.date ? new Date(b.date).getTime() : 0;
  return db - da;
});

// ====== API xuất ra ======
export function loadAllPosts(): MDPost[] {
  return ALL_MD_POSTS;
}

export function getPostBySlug(slug: string): MDPost | undefined {
  return ALL_MD_POSTS.find(p => p.slug === slug);
}
