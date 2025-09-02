import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Sparkles, Calendar, User, ArrowRight } from 'lucide-react';

const Lifestyle = () => {
  const posts = [
    {
      title: '10 gợi ý để bạn trở nên tự tin',
      excerpt: 'Ai trong chúng ta cũng hiểu rằng, một người phụ nữ tự tin luôn là người cuốn hút và được phái nam để ý và theo đuổi, vậy sự tự tin đó tới từ đâu? Tin vui là các bạn hoàn toàn có thể tập luyện...',
      date: '2024-01-18',
      readTime: '7 phút đọc',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop'
    },
    {
      title: 'Từ đổ vỡ đến tái sinh: Hành trình chữa lành của tôi',
      excerpt: 'Chia sẻ về quá trình vượt qua khó khăn và tìm lại chính mình sau những thử thách...',
      date: '2024-01-12',
      readTime: '8 phút đọc',
      image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-20 h-20 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Lối sống - Chữa lành - Tỉnh thức
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Phát triển bản thân, chữa lành tâm hồn và sống có ý thức
            </p>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
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
                      <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded text-xs">
                        Chữa lành
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
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Lifestyle;