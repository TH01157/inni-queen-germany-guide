import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Scale, TrendingUp, ArrowRight, Calendar, User } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Blog = () => {
  const categories = [
    {
      icon: Heart,
      title: "Tình yêu - Hôn nhân - Gia đình",
      description: "Tư vấn về các mối quan hệ, hôn nhân và cuộc sống gia đình ở Đức",
      color: "bg-red-100 text-red-600",
      posts: 24,
      url: "/blog/tinh-yeu-hon-nhan-gia-dinh",
    },
    {
      icon: Sparkles,
      title: "Lối sống - Chữa lành - Tỉnh thức",
      description: "Phát triển bản thân, chữa lành tâm hồn và sống có ý thức",
      color: "bg-purple-100 text-purple-600",
      posts: 32,
      url: "/blog/loi-song-chua-lanh",
    },
    {
      icon: Scale,
      title: "Luật pháp ở Đức",
      description: "Hướng dẫn về luật pháp, quyền lợi và nghĩa vụ của người nước ngoài",
      color: "bg-blue-100 text-blue-600",
      posts: 18,
      url: "/blog/luat-phap-o-duc",
    },
    {
      icon: TrendingUp,
      title: "Tài chính - Quản lý chi tiêu",
      description: "Kiến thức về tài chính cá nhân và đạt được độc lập tài chính",
      color: "bg-green-100 text-green-600",
      posts: 22,
      url: "/blog/tai-chinh-quan-ly-chi-tieu",
    },
  ];

  const featuredPosts = [
    {
      title: "10 gợi ý để bạn trở nên tự tin",
      slug: "tu-tin",
      url: "/blog/loi-song-chua-lanh/tu-tin", // Trang chi tiết TuTinPost.tsx
      excerpt:
        "Ai trong chúng ta cũng hiểu rằng, một người phụ nữ tự tin luôn là người cuốn hút và được phái nam để ý và theo đuổi, vậy sự tự tin đó tới từ đâu? Tin vui là các bạn hoàn toàn có thể tập luyện...",
      category: "Chữa lành",
      date: "2024-01-18",
      readTime: "7 phút đọc",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
    },
    {
      title: "5 điều cần biết trước khi kết hôn ở Đức",
      slug: "5-dieu-can-biet-truoc-khi-ket-hon-o-duc",
      url: "/blog/luat-phap-o-duc/5-dieu-can-biet-truoc-khi-ket-hon-o-duc",
      excerpt:
        "Những thủ tục pháp lý và chuẩn bị cần thiết cho cuộc sống hôn nhân tại Đức...",
      category: "Luật pháp",
      date: "2024-01-15",
      readTime: "5 phút đọc",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
    },
    {
      title: "Từ đổ vỡ đến tái sinh: Hành trình chữa lành của tôi",
      slug: "tu-do-vo-den-tai-sinh-hanh-trinh-chua-lanh",
      url: "/blog/loi-song-chua-lanh/tu-do-vo-den-tai-sinh-hanh-trinh-chua-lanh",
      excerpt:
        "Chia sẻ về quá trình vượt qua khó khăn và tìm lại chính mình sau những thử thách...",
      category: "Chữa lành",
      date: "2024-01-12",
      readTime: "8 phút đọc",
      image:
        "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop",
    },
    {
      title: "Lập kế hoạch tài chính cho gia đình trẻ ở Đức",
      slug: "lap-ke-hoach-tai-chinh-cho-gia-dinh-tre-o-duc",
      url: "/blog/tai-chinh-quan-ly-chi-tieu/lap-ke-hoach-tai-chinh-cho-gia-dinh-tre-o-duc",
      excerpt:
        "Những bước đầu tiên để xây dựng nền tảng tài chính vững chắc cho gia đình...",
      category: "Tài chính",
      date: "2024-01-10",
      readTime: "6 phút đọc",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
    },
    {
      title: "Hiểu về quyền lợi bảo hiểm y tế ở Đức",
      slug: "hieu-ve-quyen-loi-bao-hiem-y-te-o-duc",
      url: "/blog/luat-phap-o-duc/hieu-ve-quyen-loi-bao-hiem-y-te-o-duc",
      excerpt:
        "Tìm hiểu chi tiết về hệ thống bảo hiểm y tế và các quyền lợi cơ bản...",
      category: "Luật pháp",
      date: "2024-01-08",
      readTime: "7 phút đọc",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    },
    {
      title: "Cách xây dựng mối quan hệ bền vững",
      slug: "cach-xay-dung-moi-quan-he-ben-vung",
      url: "/blog/tinh-yeu-hon-nhan-gia-dinh/cach-xay-dung-moi-quan-he-ben-vung",
      excerpt:
        "Những nguyên tắc cơ bản để xây dựng và duy trì mối quan hệ hạnh phúc...",
      category: "Tình yêu",
      date: "2024-01-05",
      readTime: "6 phút đọc",
      image:
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=300&fit=crop",
    },
    {
      title: "Quản lý tài chính cá nhân hiệu quả",
      slug: "quan-ly-tai-chinh-ca-nhan-hieu-qua",
      url: "/blog/tai-chinh-quan-ly-chi-tieu/quan-ly-tai-chinh-ca-nhan-hieu-qua",
      excerpt:
        "Hướng dẫn chi tiết về cách lập ngân sách và tiết kiệm một cách thông minh...",
      category: "Tài chính",
      date: "2024-01-03",
      readTime: "9 phút đọc",
      image:
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Blog & Chia sẻ{" "}
              <span className="gradient-hero bg-clip-text text-transparent">kinh nghiệm</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Những câu chuyện, kiến thức và kinh nghiệm thực tế để giúp bạn phát triển và thành công
            </p>
          </div>
        </section>

        {/* Categories (click toàn khung) */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Chuyên mục</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {categories.map((category, index) => (
                <article key={index} className="card-soft p-6 text-center group cursor-pointer relative">
                  {category.url && (
                    <Link to={category.url} className="absolute inset-0 z-10" aria-label={category.title} />
                  )}
                  <div
                    className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    <span className="pointer-events-none">{category.title}</span>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                  <div className="text-xs text-primary font-medium">{category.posts} bài viết</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts (click toàn khung) */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Bài viết nổi bật</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredPosts.map((post, index) => (
                <article key={index} className="card-soft overflow-hidden group cursor-pointer relative">
                  <Link to={post.url} className="absolute inset-0 z-10" aria-label={`Đọc: ${post.title}`} />
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 relative z-20">
                    <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                      <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString("vi-VN")}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      <span className="pointer-events-none">{post.title}</span>
                    </h4>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                    <div className="p-0 h-auto font-medium text-primary group-hover:underline">
                      <span className="pointer-events-none">Đọc tiếp</span>
                      <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card-soft p-8 text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Đăng ký nhận bản tin</h3>
              <p className="text-muted-foreground mb-6">
                Nhận những bài viết mới nhất và kiến thức hữu ích từ Thu Từ Tâm mỗi tuần
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Nhập email của bạn"
                  className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="px-6">Đăng ký</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
