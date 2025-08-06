import { Button } from '@/components/ui/button';
import { Download, MessageCircle, BookOpen, Mail, ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Bắt đầu hành trình{' '}
            <span className="gradient-hero bg-clip-text text-transparent">ngay hôm nay</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Chọn cách phù hợp nhất để kết nối và học hỏi cùng Thu Từ Tâm
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Newsletter */}
          <div className="card-soft p-6 text-center group">
            <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Bản tin hàng tuần</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Nhận những chia sẻ và kiến thức mới nhất từ Thu Từ Tâm
            </p>
            <Button className="w-full group-hover:shadow-glow transition-all duration-300">
              Đăng ký ngay
            </Button>
          </div>

          {/* Free Ebook */}
          <div className="card-soft p-6 text-center group">
            <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Download className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Ebook miễn phí</h3>
            <p className="text-sm text-muted-foreground mb-4">
              "5 điều cần biết trước khi định cư & lập gia đình ở Đức"
            </p>
            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group-hover:shadow-glow transition-all duration-300">
              Tải ngay
            </Button>
          </div>

          {/* All Courses */}
          <div className="card-soft p-6 text-center group">
            <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Toàn bộ khóa học</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Khám phá tất cả các khóa học và chương trình đào tạo
            </p>
            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group-hover:shadow-glow transition-all duration-300">
              Xem khóa học
            </Button>
          </div>

          {/* Contact */}
          <div className="card-soft p-6 text-center group">
            <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Gửi câu hỏi</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Có thắc mắc? Hãy gửi câu hỏi trực tiếp cho Thu Từ Tâm
            </p>
            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group-hover:shadow-glow transition-all duration-300">
              Liên hệ ngay
            </Button>
          </div>
        </div>

        {/* Main CTA */}
        <div className="card-soft p-8 md:p-12 text-center gradient-soft">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Sẵn sàng trở thành phiên bản tốt nhất của chính mình?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Tham gia cộng đồng hơn 1000 người Việt đang học hỏi và phát triển cùng Thu Từ Tâm. 
            Hành trình thay đổi bắt đầu từ một quyết định nhỏ hôm nay.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button className="btn-hero text-lg px-8 py-4">
              Bắt đầu học ngay
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4">
              Tư vấn 1:1 miễn phí
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            ✨ Cam kết hoàn tiền 100% nếu không hài lòng trong 30 ngày đầu
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;