import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Ngọc Anh',
      role: 'Học viên khóa Kỹ năng sống',
      content: 'Khóa học của chị Thu đã giúp em tự tin hơn rất nhiều trong việc giao tiếp với đồng nghiệp người Đức. Em đã học được cách thể hiện quan điểm một cách rõ ràng và chuyên nghiệp.',
      rating: 5,
      location: 'Berlin, Đức'
    },
    {
      name: 'Minh Quân',
      role: 'Coaching 1:1',
      content: 'Sau buổi coaching với chị Thu, em đã có định hướng rõ ràng hơn cho việc phát triển sự nghiệp. Chị ấy thật sự hiểu được những khó khăn mà người Việt gặp phải ở Đức.',
      rating: 5,
      location: 'München, Đức'
    },
    {
      name: 'Thanh Hương',
      role: 'Học viên khóa Công nghệ',
      content: 'Trước đây em rất sợ công nghệ, nhưng cách giảng dạy của chị Thu rất dễ hiểu. Giờ em đã có thể sử dụng ChatGPT để hỗ trợ công việc hàng ngày của mình.',
      rating: 5,
      location: 'Hamburg, Đức'
    },
    {
      name: 'Đức Anh',
      role: 'Độc giả Blog',
      content: 'Blog của chị Thu là nguồn cảm hứng lớn đối với em. Những bài viết về luật pháp Đức rất hữu ích và thiết thực. Em đã giải quyết được nhiều vấn đề pháp lý nhờ những kiến thức này.',
      rating: 5,
      location: 'Frankfurt, Đức'
    },
    {
      name: 'Mai Linh',
      role: 'Học viên khóa Làm đẹp',
      content: 'Khóa học làm đẹp không chỉ dạy kỹ thuật mà còn giúp em xây dựng được niềm tin để khởi nghiệp. Chị Thu đã truyền cảm hứng rất lớn cho em về việc theo đuổi đam mê.',
      rating: 5,
      location: 'Köln, Đức'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Câu chuyện{' '}
            <span className="gradient-hero bg-clip-text text-transparent">thành công</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Những chia sẻ chân thành từ học viên và người theo dõi
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial */}
          <div className="card-soft p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 gradient-soft opacity-5"></div>
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl text-foreground mb-8 leading-relaxed italic">
                "{testimonials[currentSlide].content}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-border pt-6">
                <div className="font-semibold text-foreground text-lg mb-1">
                  {testimonials[currentSlide].name}
                </div>
                <div className="text-primary font-medium mb-1">
                  {testimonials[currentSlide].role}
                </div>
                <div className="text-muted-foreground text-sm">
                  {testimonials[currentSlide].location}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="w-10 h-10 rounded-full p-0"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-primary scale-125'
                      : 'bg-border hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="w-10 h-10 rounded-full p-0"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-hero bg-clip-text text-transparent mb-2">
              300+
            </div>
            <div className="text-muted-foreground">Học viên</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-hero bg-clip-text text-transparent mb-2">
              4.9/5
            </div>
            <div className="text-muted-foreground">Đánh giá</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-hero bg-clip-text text-transparent mb-2">
              15+
            </div>
            <div className="text-muted-foreground">Khóa học</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-hero bg-clip-text text-transparent mb-2">
              95%
            </div>
            <div className="text-muted-foreground">Hài lòng</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;