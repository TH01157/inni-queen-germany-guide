import { Link } from "react-router-dom";
import { Calendar, User } from "lucide-react";
import { CATEGORIES, type PostMeta } from "@/data/posts";
import { usePostInfo } from "@/hooks/usePostInfo";
import { useMemo } from "react";

type Props = { post: PostMeta; className?: string };

export default function PostCard({ post, className = "" }: Props) {
  const { dateText, readMins } = usePostInfo(post);
  const cat = CATEGORIES[post.category];

  // ✅ Bảo đảm luôn là đường tuyệt đối /posts/:slug
  const href = useMemo(() => {
    const s = (post.slug || "").trim();
    if (!s) return "#";
    if (s.startsWith("http")) return s;           // (nếu sau này có bài link ngoài)
    return s.startsWith("/") ? s : `/posts/${s}`; // "10-dieu-..." -> "/posts/10-dieu-..."
  }, [post.slug]);

  return (
    <Link
      to={href}
      className={`group block ${className}`}
      aria-label={`Mở bài viết: ${post.title}`}
    >
      <article className="card-soft overflow-hidden">
        <div className="aspect-video overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
            <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
              {cat.title.split(" - ")[0]}
            </span>
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{dateText || "Đang cập nhật"}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-3 h-3" />
              <span>{readMins ? `${readMins} phút đọc` : "— phút đọc"}</span>
            </div>
          </div>

          <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h4>
          <p className="text-muted-foreground text-sm line-clamp-3">
            {post.excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
}
