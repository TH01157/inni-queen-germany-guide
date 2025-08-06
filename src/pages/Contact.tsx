import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-16">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Liên hệ với{' '}
                <span className="gradient-hero bg-clip-text text-transparent">Thu Từ Tâm</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy chia sẻ câu hỏi hoặc mong muốn của bạn.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="card-soft p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Gửi tin nhắn</h2>
                
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <p className="text-green-800">Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Nhập họ và tên của bạn"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Nhập địa chỉ email của bạn"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Tin nhắn *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Chia sẻ câu hỏi hoặc mong muốn của bạn..."
                    />
                  </div>

                  <Button type="submit" className="w-full btn-hero">
                    <Send className="w-5 h-5 mr-2" />
                    Gửi tin nhắn
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="card-soft p-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">Thông tin liên hệ</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <p className="text-muted-foreground">thu@inniqueen.de</p>
                        <p className="text-sm text-muted-foreground">Phản hồi trong vòng 24 giờ</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Điện thoại</h3>
                        <p className="text-muted-foreground">+49 xxx xxx xxxx</p>
                        <p className="text-sm text-muted-foreground">T2-T6: 9:00 - 17:00 (CET)</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Địa chỉ</h3>
                        <p className="text-muted-foreground">Deutschland</p>
                        <p className="text-sm text-muted-foreground">Tư vấn online & offline</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-soft p-8 gradient-soft">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Đặt lịch tư vấn 1:1
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Muốn được tư vấn trực tiếp? Đặt lịch hẹn với tôi để có buổi coaching cá nhân hóa.
                  </p>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Đặt lịch ngay
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;