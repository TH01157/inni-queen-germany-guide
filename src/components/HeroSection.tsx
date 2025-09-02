import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-soft opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Hãy khám phá{' '}
              <span className="gradient-hero bg-clip-text text-transparent">
                Nữ Hoàng
              </span>{' '}
              bên trong bạn
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light italic">
              "Mạnh mẽ, bình an và rực rỡ."
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Tôi đã đi qua – và bạn cũng có thể. Cùng khám phá hành trình chữa lành, 
              phát triển bản thân và xây dựng cuộc sống thịnh vượng tại Đức.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-hero text-lg" onClick={() => window.location.href = '/blog'}>
                Khám phá ngay
              </Button>
              <Button variant="outline" size="lg" className="text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => window.location.href = '/about'}>
                Tìm hiểu thêm
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img
                src={heroImage}
                alt="Thu Từ Tâm - Inni Queen"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 gradient-hero opacity-10"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 gradient-soft rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full opacity-80 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;