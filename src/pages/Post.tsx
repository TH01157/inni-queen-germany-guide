// src/pages/Post.tsx
import { useEffect, useMemo, useState, lazy, Suspense } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NotFound from "./NotFound";
import { POSTS } from "@/data/posts";
import { getPostBySlug } from "@/lib/mdPosts";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Calendar, User } from "lucide-react";

// Tạo bản đồ import động các file bài viết dưới ./posts (TSX)
const tsxModules = import.meta.glob("./posts/*.tsx");

export default function Post() {
  const { slug = "" } = useParams();
  const fullSlug = `/posts/${slug}`;

  // 1) Thử tìm bài Markdown trước
  const md = useMemo(() => getPostBySlug(fullSlug), [fullSlug]);

  if (md) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-20">
          <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link
                to="/blog"
                className="inline-flex items-center text-primary hover:text-primary-foreground hover:bg-primary transition-colors rounded px-2 py-1 mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Quay lại Blog
              </Link>

              <div className="text-center">
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                  {md.category ?? "Bài viết"}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-6 mb-6">
                  {md.title}
                </h1>
                <div className="flex items-center justify-center gap-6 text-muted-foreground text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{md.date ?? "Đang cập nhật"}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{md.readingMinutes} phút đọc</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-padding">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              {md.image && (
                <img
                  src={md.image}
                  alt={md.title}
                  className="w-full h-64 md:h-80 object-cover rounded-lg mb-8"
                  loading="lazy"
                />
              )}
              <article className="prose prose-lg max-w-none">
                <ReactMarkdown>{md.content}</ReactMarkdown>
              </article>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  // 2) Fallback: bài TSX theo registry POSTS (y như code hiện tại)
  const meta = useMemo(
    () => POSTS.find((p) => p.slug.split("/").pop() === slug),
    [slug]
  );
  if (!meta) return <NotFound />;

  const fileName = meta.sourcePath.split("/").pop()!;
  const importer = tsxModules[`./posts/${fileName}`];
  if (!importer) return <NotFound />;

  const LazyPost = lazy(importer as () => Promise<{ default: React.ComponentType<any> }>);

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background">
          <Navigation />
          <main className="pt-20 section-padding">
            <p className="text-center text-muted-foreground">Đang tải bài viết…</p>
          </main>
          <Footer />
        </div>
      }
    >
      <LazyPost />
    </Suspense>
  );
}
