import { Button } from '@/components/ui/button';
import { Heart, Sparkles, Scale, TrendingUp, ArrowRight, Calendar, User } from 'lucide-react';

const BlogSection = () => {
  const categories = [
    {
      icon: Heart,
      title: 'Tình yêu - Hôn nhân - Gia đình',
      description: 'Tư vấn về các mối quan hệ, hôn nhân và cuộc sống gia đình ở Đức',
      color: 'bg-red-100 text-red-600',
      posts: 24
    },
    {
      icon: Sparkles,
      title: 'Lối sống - Chữa lành - Tỉnh thức',
      description: 'Phát triển bản thân, chữa lành tâm hồn và sống có ý thức',
      color: 'bg-purple-100 text-purple-600',
      posts: 31
    },
    {
      icon: Scale,
      title: 'Luật pháp ở Đức',
      description: 'Hướng dẫn về luật pháp, quyền lợi và nghĩa vụ của người nước ngoài',
      color: 'bg-blue-100 text-blue-600',
      posts: 18
    },
    {
      icon: TrendingUp,
      title: 'Tài chính - Quản lý chi tiêu',
      description: 'Kiến thức về tài chính cá nhân và đạt được độc lập tài chính',
      color: 'bg-green-100 text-green-600',
      posts: 22
    }
  ];

  const featuredPosts = [
    {
      title: '5 điều cần biết trước khi kết hôn ở Đức',
      excerpt: 'Những thủ tục pháp lý và chuẩn bị cần thiết cho cuộc sống hôn nhân tại Đức...',
      category: 'Luật pháp',
      date: '2024-01-15',
      readTime: '5 phút đọc',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop'
    },
    {
      title: 'Từ đổ vỡ đến tái sinh: Hành trình chữa lành của tôi',
      excerpt: 'Chia sẻ về quá trình vượt qua khó khăn và tìm lại chính mình sau những thử thách...',
      category: 'Chữa lành',
      date: '2024-01-12',
      readTime: '8 phút đọc',
      image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop'
    },
    {
      title: 'Lập kế hoạch tài chính cho gia đình trẻ ở Đức',
      excerpt: 'Những bước đầu tiên để xây dựng nền tảng tài chính vững chắc cho gia đình...',
      category: 'Tài chính',
      date: '2024-01-10',
      readTime: '6 phút đọc',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop'
    }
  ];

  return (
    <section id="blog" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Blog & Chia sẻ{' '}
            <span className="gradient-hero bg-clip-text text-transparent">kinh nghiệm</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Những câu chuyện, kiến thức và kinh nghiệm thực tế để giúp bạn phát triển và thành công
          </p>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="card-soft p-6 text-center group cursor-pointer">
                <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                <div className="text-xs text-primary font-medium">
                  {category.posts} bài viết
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Bài viết nổi bật</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <article key={index} className="card-soft overflow-hidden group cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                    <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString('vi-VN')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <Button variant="ghost" className="p-0 h-auto font-medium text-primary hover:text-primary-foreground hover:bg-primary">
                    Đọc tiếp
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="card-soft p-8 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Đăng ký nhận bản tin
          </h3>
          <p className="text-muted-foreground mb-6">
            Nhận những bài viết mới nhất và kiến thức hữu ích từ Thu Từ Tâm mỗi tuần
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="px-6">
              Đăng ký
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;