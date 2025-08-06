import { Heart, Users, Award, BookOpen } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: 'Chữa lành',
      description: 'Đồng hành cùng bạn trong hành trình chữa lành cảm xúc và tâm hồn'
    },
    {
      icon: Users,
      title: 'Kết nối',
      description: 'Xây dựng cộng đồng người Việt mạnh mẽ và hỗ trợ lẫn nhau'
    },
    {
      icon: Award,
      title: 'Chuyên nghiệp',
      description: 'Kiến thức pháp lý và cuộc sống được truyền đạt một cách chuyên nghiệp'
    },
    {
      icon: BookOpen,
      title: 'Tri thức',
      description: 'Chia sẻ kiến thức thực tiễn giúp bạn thành công ở Đức'
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Xin chào, tôi là{' '}
            <span className="gradient-hero bg-clip-text text-transparent">Thu Từ Tâm</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Một người phụ nữ đã đi qua những thử thách trong cuộc sống nơi đất khách, 
            từ đổ vỡ hôn nhân đến tái sinh bản thân. Tôi tin rằng mọi người đều có thể 
            vượt qua khó khăn và tìm thấy hạnh phúc thật sự.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Tầm nhìn của tôi</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Chia sẻ kiến thức – chữa lành cảm xúc – hỗ trợ pháp lý – lan tỏa bình an và trí tuệ sống. 
              Tôi mong muốn trở thành người bạn đồng hành đáng tin cậy cho mọi người Việt Nam tại Đức.
            </p>
            
            <h3 className="text-2xl font-semibold text-foreground mb-6">Sứ mệnh</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Kết nối cộng đồng người Việt qua học hỏi, thấu hiểu và hành động. 
              Mỗi câu chuyện chia sẻ, mỗi khóa học là một cơ hội để chúng ta cùng nhau phát triển.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card-soft p-6 text-center">
                <div className="w-12 h-12 gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block card-soft p-8 max-w-2xl">
            <p className="text-lg text-muted-foreground italic">
              "Cuộc sống không phải là những gì xảy ra với bạn, mà là cách bạn phản ứng với những gì xảy ra. 
              Hãy để tôi đồng hành cùng bạn trên con đường tìm kiếm sự mạnh mẽ và bình an bên trong."
            </p>
            <div className="mt-4 text-primary font-semibold">- Thu Từ Tâm</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;