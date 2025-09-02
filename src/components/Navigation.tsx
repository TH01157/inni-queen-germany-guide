import { useEffect, useRef, useState } from 'react';
import { Menu, X, ChevronDown, Heart, Sparkles, Scale, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBlogDropdown, setShowBlogDropdown] = useState(false);
  const location = useLocation();

  const blogDropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown on outside click or Esc
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (blogDropdownRef.current && !blogDropdownRef.current.contains(e.target as Node)) {
        setShowBlogDropdown(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowBlogDropdown(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // Close when route changes
  useEffect(() => {
    setShowBlogDropdown(false);
  }, [location.pathname]);

  const menuItems = [
    { name: 'Trang chủ', href: '/', isRoute: true },
    { name: 'Blog', href: '/blog', isRoute: true, hasDropdown: true },
    { name: 'Khóa học', href: '#courses', isRoute: false },
    { name: 'Giới thiệu', href: '/about', isRoute: true },
    { name: 'Liên hệ', href: '/contact', isRoute: true },
  ];

  const blogCategories = [
    {
      icon: Heart,
      title: 'Tình yêu - Hôn nhân - Gia đình',
      description: 'Tư vấn về các mối quan hệ, hôn nhân và cuộc sống gia đình ở Đức',
      href: '/blog/tinh-yeu-hon-nhan'
    },
    {
      icon: Sparkles,
      title: 'Lối sống - Chữa lành - Tỉnh thức',
      description: 'Phát triển bản thân, chữa lành tâm hồn và sống có ý thức',
      href: '/blog/loi-song-chua-lanh'
    },
    {
      icon: Scale,
      title: 'Luật pháp ở Đức',
      description: 'Hướng dẫn về luật pháp, quyền lợi và nghĩa vụ của người nước ngoài',
      href: '/blog/luat-phap'
    },
    {
      icon: TrendingUp,
      title: 'Tài chính - Quản lý chi tiêu',
      description: 'Kiến thức về tài chính cá nhân và đạt được độc lập tài chính',
      href: '/blog/tai-chinh'
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold gradient-hero bg-clip-text text-transparent">
              Inni Queen
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                item.hasDropdown ? (
                  <div
                    key={item.name}
                    className="relative"
                    ref={blogDropdownRef}
                    onMouseEnter={() => setShowBlogDropdown(true)}
                  >
                    <Link
                      to={item.href}
                      className="text-foreground hover:text-primary transition-colors duration-200 font-medium flex items-center gap-1"
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                    
                    {/* Dropdown Menu */}
                    {showBlogDropdown && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-background border border-border rounded-lg shadow-lg z-50 p-4">
                        <div className="grid gap-3">
                          {blogCategories.map((category, index) => (
                            <Link
                              key={index}
                              to={category.href}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                            >
                              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <category.icon className="w-5 h-5 text-primary" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">
                                  {category.title}
                                </h4>
                                <p className="text-xs text-muted-foreground mt-1">
                                  {category.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : item.isRoute ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
            {menuItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;