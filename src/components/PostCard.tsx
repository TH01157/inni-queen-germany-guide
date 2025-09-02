// src/components/PostCard.tsx
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

type Post = {
  title: string;
  excerpt: string;
  image?: string;
  category?: string;
  date?: string;        // ISO string "2024-01-18"
  readTime?: string;    // "7 phút đọc"
  url: string;          // URL tới trang chi tiết, VD: "/blog/loi-song-chua-lanh/tu-tin"
};

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="card-soft overflow-hidden group cursor-pointer relative">
      {/* overlay link phủ toàn bộ card */}
      <Link to={post.url} aria-label={`Đọc: ${post.title}`} className="absolute inset-0 z-10" />

      {post.image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      )}

      <div className="p-6 relative z-20">
        <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
          {post.category && (
            <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
              {post.category}
            </span>
          )}
          {post.date && (
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{new Date(post.date).toLocaleDateString("vi-VN")}</span>
            </div>
          )}
          {post.readTime && (
            <div className="flex items-center gap-1">
              <User className="w-3 h-3" />
              <span>{post.readTime}</span>
            </div>
          )}
        </div>

        {/* Chỉ là text để overlay bắt click, tránh nested <a> */}
        <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          <span className="pointer-events-none">{post.title}</span>
        </h4>

        {post.excerpt && (
          <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
            {post.excerpt}
          </p>
        )}

        <div className="p-0 h-auto font-medium text-primary group-hover:underline">
          <span className="pointer-events-none">Đọc tiếp</span>
          <ArrowRight className="w-4 h-4 ml-2 inline" />
        </div>
      </div>
    </article>
  );
}
