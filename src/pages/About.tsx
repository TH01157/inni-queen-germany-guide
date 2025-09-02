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
              <h2 className="text-3xl font-bold text-foreground mb-6">Xin chào, mình là Thu Tận Tâm 🌸</h2>
              <p className="text-muted-foreground mb-6">
                Tên gọi này không chỉ là nickname trên Facebook và Instagram, mà còn là lời nhắc nhở mỗi ngày: sống và làm việc bằng tất cả sự tận tâm. Các thầy cô ở trường tâm lý và cả những sư thầy từng nói, đây là cái tên hợp nhất với con người mình – và mình mong sống xứng đáng với điều đó.
              </p>
              
              <h3 className="text-2xl font-semibold text-foreground mb-4">Hành trình từ Việt Nam đến Đức</h3>
              <p className="text-muted-foreground mb-4">
                Hơn 20 năm làm dâu nước Đức, hiện mình là mẹ của 3 con và bà ngoại của 2 cháu.
              </p>
              <p className="text-muted-foreground mb-6">
                Từ 2008 đến nay, mình giữ vai trò cố vấn tại Tập đoàn Thép IBS của Đức. Công việc này cho mình cơ hội học hỏi và tích lũy kinh nghiệm, đồng thời tạo điều kiện để theo đuổi các đam mê khác.
              </p>
              <p className="text-muted-foreground mb-6">
                Năm 2011, mình tốt nghiệp trường đào tạo nghề Kosmetik tại Đức, từng làm việc trong hệ thống Hotels Holiday Inn (2011–2013). Trong giai đoạn này, mình đồng thời học Tâm lý học và Lập trình ngôn ngữ tư duy (NLP) – nền tảng quan trọng cho công việc tư vấn và chữa lành sau này.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-4">Những trải nghiệm định hình con người mình</h3>
              <p className="text-muted-foreground mb-6">
                Mình từng trải qua ly hôn, làm mẹ đơn thân, gặp những mối quan hệ nhiều thử thách. Nhưng cũng chính nhờ học hỏi và áp dụng tâm lý học, mình đã đi qua sóng gió, xây dựng lại hôn nhân, sự nghiệp và tìm thấy bình yên.
              </p>
              <p className="text-muted-foreground mb-6">
                Năm 2017, sau hơn 30 khóa đào tạo chuyên ngành nối mi tại châu Âu (Đức, Pháp, Hà Lan, Tây Ban Nha, Na Uy), mình thành lập Royal Beauty Academy tại Dresden và được mời làm giám khảo hơn 30 cuộc thi quốc tế ngành làm đẹp.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-4">Bước ngoặt trong đại dịch</h3>
              <p className="text-muted-foreground mb-4">
                Lockdown 2020 là cú sốc lớn: Academy vừa khai trương 13 ngày phải đóng cửa. Nhưng đây cũng là thời điểm mình mở ra một cánh cửa mới.
              </p>
              <p className="text-muted-foreground mb-6">
                Tháng 4/2020, mình thi đậu và làm việc cho DVAG (Die Deutsche Vermögensberatung) – tập đoàn tư vấn tài chính hàng đầu Đức. Đến 3/2023, mình xin nghỉ để tập trung vào IBS và phát triển công việc tư vấn riêng cho cộng đồng người Việt.
              </p>
              <p className="text-muted-foreground mb-6">
                Song song đó, trong thời gian giãn cách, mình tổ chức các khóa Thiền Định và Lòng Biết Ơn vào 5h sáng, giúp bản thân, gia đình và cộng đồng duy trì sự bình an. Đồng thời, mình hoàn thành nhiều khóa đào tạo chuyên sâu về Tâm lý học – Hôn nhân – Gia đình – Tình yêu.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-4">INNI-QUEEN – Đứa con từ trải nghiệm và tâm huyết</h3>
              <p className="text-muted-foreground mb-6">
                Tháng 6/2023, mình bán lại Academy để toàn tâm cho lĩnh vực Tâm lý – Hôn nhân – Chữa lành. Và từ đó, INNI-QUEEN ra đời – dự án dành trọn tâm huyết để đồng hành cùng những ai đang tìm lại sự cân bằng, sức mạnh và hạnh phúc của mình.
              </p>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-semibold text-foreground mb-3">INNI-QUEEN là lời mời:</h4>
                <p className="text-muted-foreground mb-2">
                  Hãy sống cuộc đời của một Nữ Hoàng – mạnh mẽ, bình an và rực rỡ.
                </p>
                <p className="text-muted-foreground font-medium">
                  Tôi đã đi qua – và bạn cũng có thể.
                </p>
              </div>

              <p className="text-center text-lg text-primary font-medium">
                🌸 Cảm ơn bạn đã đến đây. Hành trình này sẽ ý nghĩa hơn khi có bạn đồng hành.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;