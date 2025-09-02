import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Giới thiệu về{' '}
              <span className="gradient-hero bg-clip-text text-transparent">Thu Từ Tâm</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Hành trình đồng hành cùng phụ nữ Việt tại Đức
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Câu chuyện của tôi</h2>
              <p className="text-muted-foreground mb-6">
                Xin chào, tôi là Thu - người sáng lập Thu Từ Tâm. Với hơn 10 năm sinh sống và làm việc tại Đức, 
                tôi hiểu rõ những thử thách mà phụ nữ Việt Nam phải đối mặt khi xa quê hương.
              </p>
              
              <h3 className="text-2xl font-semibold text-foreground mb-4">Sứ mệnh</h3>
              <p className="text-muted-foreground mb-6">
                Thu Từ Tâm ra đời với mong muốn trở thành người bạn đồng hành, hỗ trợ các chị em phụ nữ Việt 
                tại Đức trong hành trình phát triển bản thân, xây dựng cuộc sống hạnh phúc và thành công.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-4">Giá trị cốt lõi</h3>
              <ul className="text-muted-foreground space-y-3 mb-6">
                <li>• <strong>Chia sẻ chân thành:</strong> Những kinh nghiệm thực tế từ cuộc sống</li>
                <li>• <strong>Hỗ trợ toàn diện:</strong> Từ tâm lý đến pháp lý, tài chính</li>
                <li>• <strong>Cộng đồng gắn kết:</strong> Tạo không gian an toàn cho phụ nữ Việt</li>
                <li>• <strong>Phát triển bền vững:</strong> Hướng tới sự tự tin và độc lập</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-4">Dịch vụ của chúng tôi</h3>
              <p className="text-muted-foreground mb-6">
                Chúng tôi cung cấp các khóa học, buổi tư vấn và chia sẻ kiến thức về:
              </p>
              <ul className="text-muted-foreground space-y-2 mb-6">
                <li>• Tình yêu, hôn nhân và gia đình</li>
                <li>• Lối sống lành mạnh và chữa lành tâm hồn</li>
                <li>• Kiến thức pháp lý tại Đức</li>
                <li>• Quản lý tài chính cá nhân</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;