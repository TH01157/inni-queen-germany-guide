// src/lib/allPosts.ts
import matter from "gray-matter";
import { POSTS, type CategoryKey, type PostMeta as TsxPostMeta } from "@/data/posts";

/** Kiểu metadata thống nhất cho cả .md và .tsx */
export type PostMeta = TsxPostMeta & {
  /** ISO date trong front-matter (tuỳ chọn) */
  date?: string;
  /** Chỉ dùng cho bài .md */
  _mdPath?: string;
};

/** Glob toàn bộ markdown dưới /src/content/posts */
const mdModules = import.meta.glob("/src/content/posts/**/*.md", {
  eager: true,
  query: "?raw",
});

/** Rút slug từ đường dẫn file .md */
function slugFromPath(path: string) {
  // /src/content/posts/love/ten-bai.md -> ten-bai
  const file = path.split("/").pop() || "";
  return "/" + file.replace(/\.md$/i, "");
}

/** Tạo excerpt ngắn từ nội dung (khi thiếu excerpt trong front-matter) */
function fallbackExcerpt(text: string, len = 160) {
  const clean = text.replace(/\s+/g, " ").trim();
  return clean.length > len ? clean.slice(0, len) + "…" : clean;
}

/** Parse toàn bộ bài .md thành PostMeta[] */
function loadMarkdownPosts(): PostMeta[] {
  const result: PostMeta[] = [];

  for (const [path, mod] of Object.entries(mdModules)) {
    const raw = (mod as any).default as string; // do query ?raw
    if (!raw || typeof raw !== "string") continue;

    const { data, content } = matter(raw);

    // Cho phép ghi đè slug trong front-matter; nếu không thì lấy theo tên file
    const fmSlug: string | undefined = data.slug;
    const slug = fmSlug
      ? fmSlug.startsWith("/posts/") ? fmSlug : `/posts/${fmSlug.replace(/^\//, "")}`
      : `/posts${slugFromPath(path)}`;

    // Bắt buộc category phải nằm trong 4 key hợp lệ; sai thì rớt về "lifestyle"
    const cat = (data.category as CategoryKey) ?? "lifestyle";
    const validCat: CategoryKey = ["love", "lifestyle", "legal", "finance"].includes(cat)
      ? cat
      : ("lifestyle" as CategoryKey);

    const meta: PostMeta = {
      slug,
      title: data.title ?? "Bài viết",
      excerpt: data.excerpt ?? fallbackExcerpt(content),
      image: data.image ?? "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop",
      category: validCat,
      sourcePath: path.replace(/^\//, ""), // lưu lại đường dẫn md tương đối
      date: data.date,
      _mdPath: path,
    };

    result.push(meta);
  }

  return result;
}

/** Hợp nhất bài .md và bài .tsx (ưu tiên không trùng slug; .tsx giữ nguyên) */
function mergePosts(md: PostMeta[], tsx: TsxPostMeta[]): PostMeta[] {
  const map = new Map<string, PostMeta>();

  // Ưu tiên TSX trước (nếu trùng slug, bài .md sẽ bị bỏ)
  for (const p of tsx) map.set(p.slug, { ...p });

  for (const m of md) {
    if (!map.has(m.slug)) map.set(m.slug, m);
  }

  return Array.from(map.values());
}

/** Lấy toàn bộ bài viết (md + tsx) */
export async function getAllPosts(): Promise<PostMeta[]> {
  const mdPosts = loadMarkdownPosts();
  const all = mergePosts(mdPosts, POSTS);
  // Có thể sort: bài có date sẽ lên trước theo mới → cũ
  return all.sort((a, b) => {
    const da = a.date ? Date.parse(a.date) : 0;
    const db = b.date ? Date.parse(b.date) : 0;
    return db - da;
  });
}

/** Lấy danh sách theo chuyên mục */
export async function getPostsByCategory(key: CategoryKey): Promise<PostMeta[]> {
  const all = await getAllPosts();
  return all.filter((p) => p.category === key);
}

/** Tìm 1 bài theo slug (/posts/xxx) */
export async function getPostBySlug(slug: string): Promise<PostMeta | undefined> {
  const all = await getAllPosts();
  return all.find((p) => p.slug === slug);
}
