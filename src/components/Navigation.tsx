import { useState } from 'react';
import { Menu, X, Heart, Brain, Scale, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Trang chủ', href: '#home' },
    { name: 'Khóa học', href: '#courses' },
    { name: 'Giới thiệu', href: '#about' },
    { name: 'Liên hệ', href: '#contact' },
  ];

  const blogCategories = [
    {
      title: 'Tình yêu & Hôn nhân',
      description: 'Tư vấn về mối quan hệ và gia đình',
      href: '#blog/love',
      icon: Heart,
      color: 'text-rose-500'
    },
    {
      title: 'Lối sống & Chữa lành',
      description: 'Phát triển bản thân và tỉnh thức',
      href: '#blog/lifestyle',
      icon: Brain,
      color: 'text-purple-500'
    },
    {
      title: 'Luật pháp ở Đức',
      description: 'Kiến thức pháp lý thiết thực',
      href: '#blog/law',
      icon: Scale,
      color: 'text-blue-500'
    },
    {
      title: 'Tài chính cá nhân',
      description: 'Quản lý chi tiêu và đầu tư',
      href: '#blog/finance',
      icon: DollarSign,
      color: 'text-green-500'
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold gradient-hero bg-clip-text text-transparent">
              Inni Queen
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink
                      href={item.href}
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
                
                {/* Blog Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-10">Blog</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {blogCategories.map((category) => (
                        <NavigationMenuLink key={category.title} asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href={category.href}
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <category.icon className={`h-4 w-4 ${category.color}`} />
                              <div className="text-sm font-medium leading-none">
                                {category.title}
                              </div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {category.description}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
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
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            {/* Blog Categories Mobile */}
            <div className="px-3 py-2">
              <div className="text-foreground font-medium mb-2">Blog</div>
              <div className="space-y-1 pl-4">
                {blogCategories.map((category) => (
                  <a
                    key={category.title}
                    href={category.href}
                    className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center gap-2">
                      <category.icon className={`h-4 w-4 ${category.color}`} />
                      {category.title}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;