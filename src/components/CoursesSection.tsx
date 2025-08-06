import { Button } from '@/components/ui/button';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';

const CoursesSection = () => {
  const courses = [
    {
      title: 'Công nghệ cho người mới bắt đầu',
      description: 'Học AI, ChatGPT và tự động hóa công việc một cách đơn giản và dễ hiểu',
      benefits: [
        'Sử dụng AI để tăng hiệu quả công việc',
        'Tự động hóa các tác vụ hàng ngày',
        'Nâng cao kỹ năng số trong thời đại mới'
      ],
      duration: '4 tuần',
      students: '120+',
      rating: '4.9',
      price: '199€',
      category: 'Công nghệ'
    },
    {
      title: 'Kỹ năng sống tại Đức',
      description: 'Phát triển kỹ năng mềm và thích nghi với cuộc sống, văn hóa Đức',
      benefits: [
        'Giao tiếp hiệu quả trong môi trường đa văn hóa',
        'Xây dựng mạng lưới quan hệ chất lượng',
        'Phát triển tự tin và khả năng lãnh đạo'
      ],
      duration: '6 tuần',
      students: '85+',
      rating: '4.8',
      price: '149€',
      category: 'Kỹ năng mềm'
    },
    {
      title: 'Làm đẹp cơ bản - Khởi nghiệp',
      description: 'Khóa học làm đẹp dành cho người mới vào nghề hoặc muốn khởi nghiệp',
      benefits: [
        'Kỹ thuật làm đẹp cơ bản đến nâng cao',
        'Kinh doanh và marketing trong ngành làm đẹp',
        'Xây dựng thương hiệu cá nhân'
      ],
      duration: '8 tuần',
      students: '65+',
      rating: '4.9',
      price: '299€',
      category: 'Làm đẹp'
    }
  ];

  return (
    <section id="courses" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Khóa học{' '}
            <span className="gradient-hero bg-clip-text text-transparent">nổi bật</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Học hỏi từ kinh nghiệm thực tế và phát triển kỹ năng cần thiết cho cuộc sống tại Đức
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="card-soft overflow-hidden group cursor-pointer">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                    {course.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="space-y-2 mb-6">
                  {course.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students} học viên</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary">{course.price}</span>
                  </div>
                  <Button className="group-hover:shadow-glow transition-all duration-300">
                    Đăng ký ngay
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Xem tất cả khóa học
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;