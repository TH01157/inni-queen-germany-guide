import { CheckCircle, Users, Lightbulb, Heart, TrendingUp, Shield } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Hiểu rõ luật pháp và cuộc sống ở Đức',
      description: 'Nắm vững các quy định pháp lý, quyền lợi và cách thức sống phù hợp với văn hóa Đức'
    },
    {
      icon: Lightbulb,
      title: 'Học kỹ năng thực tiễn dễ áp dụng',
      description: 'Những kiến thức và kỹ năng được truyền đạt một cách đơn giản, dễ hiểu và áp dụng ngay'
    },
    {
      icon: TrendingUp,
      title: 'Tiếp cận kiến thức công nghệ mới',
      description: 'Học cách sử dụng AI, ChatGPT và các công cụ hiện đại để tăng hiệu quả công việc'
    },
    {
      icon: Users,
      title: 'Được dẫn dắt bởi người có kinh nghiệm',
      description: 'Học từ những trải nghiệm thực tế của người đã thành công vượt qua khó khăn'
    },
    {
      icon: Heart,
      title: 'Cảm nhận sự kết nối và được đồng hành',
      description: 'Tham gia cộng đồng hỗ trợ lẫn nhau trong hành trình phát triển bản thân'
    },
    {
      icon: CheckCircle,
      title: 'Phát triển toàn diện cả tâm lẫn trí',
      description: 'Không chỉ học kiến thức mà còn chữa lành cảm xúc và phát triển tư duy tích cực'
    }
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tại sao chọn{' '}
            <span className="gradient-hero bg-clip-text text-transparent">Inni Queen</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Những lý do để bạn tin tưởng đồng hành cùng chúng tôi trên hành trình phát triển bản thân
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="card-soft p-8 text-center group hover:shadow-glow transition-all duration-300"
            >
              <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="card-soft p-8 max-w-4xl mx-auto gradient-soft">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Sẵn sàng bắt đầu hành trình của bạn?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Hãy để tôi đồng hành cùng bạn khám phá tiềm năng bên trong và xây dựng cuộc sống thịnh vượng tại Đức
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero">
                Bắt đầu ngay hôm nay
              </button>
              <button className="px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full font-semibold transition-all duration-300">
                Tìm hiểu thêm
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;