import { Link } from 'react-router-dom';
import PostCard from '@/components/PostCard';
import {
  CATEGORIES,
  POSTS,
  countByCategory,
  type CategoryKey,
} from '@/data/posts';

const BlogSection = () => {
  const categoryEntries = Object.entries(CATEGORIES) as [CategoryKey, (typeof CATEGORIES)[CategoryKey]][];
  const featuredPosts = POSTS.slice(0, 3);

  return (
    <section id="blog" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Blog & Chia sẻ <span className="gradient-hero bg-clip-text text-transparent">kinh nghiệm</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Những câu chuyện, kiến thức và kinh nghiệm thực tế để giúp bạn phát triển và thành công
          </p>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryEntries.map(([key, cat]) => {
              const cnt = countByCategory(key);
              return (
                <Link key={key} to={cat.url} className="card-soft p-6 text-center group block">
                  <div className={`w-16 h-16 ${cat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-8 h-8 rounded-full opacity-70" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {cat.title}
                  </h3>
                  <div className="text-xs text-primary font-medium">
                    {cnt.toLocaleString('vi-VN')} bài viết
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Featured Posts */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Bài viết nổi bật</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
