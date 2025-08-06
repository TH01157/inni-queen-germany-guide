import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <span className="text-2xl font-bold text-background">Inni Queen</span>
                <p className="text-background/60 mt-2">Luật & Đời Ở Đức</p>
              </div>
              <p className="text-background/80 mb-6 max-w-md">
                Đồng hành cùng bạn khám phá nữ hoàng bên trong, phát triển bản thân và 
                xây dựng cuộc sống thịnh vượng tại Đức.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-background mb-4">Liên kết nhanh</h3>
              <ul className="space-y-3">
                <li><a href="#home" className="text-background/80 hover:text-background transition-colors">Trang chủ</a></li>
                <li><a href="#about" className="text-background/80 hover:text-background transition-colors">Giới thiệu</a></li>
                <li><a href="#blog" className="text-background/80 hover:text-background transition-colors">Blog</a></li>
                <li><a href="#courses" className="text-background/80 hover:text-background transition-colors">Khóa học</a></li>
                <li><a href="#contact" className="text-background/80 hover:text-background transition-colors">Liên hệ</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-background mb-4">Thông tin liên hệ</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-background/80">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">thu@inniqueen.de</span>
                </li>
                <li className="flex items-center gap-2 text-background/80">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">+49 xxx xxx xxxx</span>
                </li>
                <li className="flex items-center gap-2 text-background/80">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">Deutschland</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/60 text-sm">
              © 2024 Inni Queen. Tất cả quyền được bảo lưu.
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Chính sách quyền riêng tư
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Điều khoản sử dụng
              </a>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-background/80 hover:text-background hover:bg-background/10"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Về đầu trang
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;