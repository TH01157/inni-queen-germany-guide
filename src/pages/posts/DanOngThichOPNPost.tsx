import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

async function fetchLatestCommitISODate(path: string) {
  const url = `https://api.github.com/repos/TH01157/inni-queen-germany-guide/commits?path=${encodeURIComponent(path)}&per_page=1`;
  const res = await fetch(url);
  if (!res.ok) return undefined;
  const data = await res.json();
  return data?.[0]?.commit?.committer?.date ?? data?.[0]?.commit?.author?.date;
}
function formatViDate(dt: Date) {
  return dt.toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' });
}
function readingTimeMinutes(text: string, wpm = 200) {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wpm));
}

const DanOngThichOPNPost = () => {
  const plainText = useMemo(() => `
10 điều mà đàn ông thường thích ở phụ nữ.

Mỗi người đàn ông có những sở thích và ưu tiên riêng khi tìm kiếm đối tác, nhưng có một số phẩm chất chung mà nhiều đàn ông thường tìm kiếm ở phụ nữ:

1. Sự Tự Tin: Đàn ông thường bị thu hút bởi phụ nữ tự tin, người biết giá trị bản thân và không ngần ngại thể hiện mình.
2. Tính Cách Độc Lập: Phụ nữ có cuộc sống riêng, sở thích và mục tiêu cá nhân thường rất hấp dẫn đối với đàn ông, vì điều này thể hiện sự độc lập và sức mạnh nội tâm.
3. Khả Năng Giao Tiếp Tốt: Giao tiếp hiệu quả, khả năng thảo luận và chia sẻ cảm xúc một cách mở cửa là điều quan trọng trong mọi mối quan hệ.
4. Hài Hước và Tính Cách Vui Vẻ: Phụ nữ có khả năng cười và khiến người khác cười thường rất được lòng đàn ông, vì điều này tạo ra một môi trường thoải mái và tích cực.
5. Sự Chấp Nhận và Hỗ Trợ: Đàn ông giống như ai khác, cũng cần sự chấp nhận, hỗ trợ và khích lệ từ đối tác của họ.
6. Sự Thông Minh và Sự Hiểu Biết: Phụ nữ thông minh, có kiến thức và hiểu biết sâu sắc về thế giới xung quanh họ thường rất hấp dẫn đối với đàn ông.
7. Sự Quyến Rũ và Lãng Mạn: Sự quyến rũ không chỉ liên quan đến ngoại hình mà còn về cách cư xử, cách nói chuyện, và khả năng tạo ra một không khí lãng mạn.
8. Tính Cách Chân Thành và Trung Thực: Chân thật và trung thực trong mọi hành động và lời nói là nền tảng cho một mối quan hệ bền vững.
9. Tinh Thần Cởi Mở và Thích Nghi: Phụ nữ sẵn lòng thử nghiệm, học hỏi và thích nghi với các tình huống mới thường thu hút đàn ông bởi sự linh hoạt và tính cách phiêu lưu của họ.
10. Sự Quan Tâm và Lòng Tốt: Sự quan tâm, lòng tốt và sự chân thành trong cách đối xử với người khác thường rất quan trọng đối với đàn ông.

Lưu ý rằng, mỗi người có những ưu tiên và mong muốn khác nhau. Điều quan trọng nhất là sự kết nối và hiểu biết lẫn nhau giữa hai người trong một mối quan hệ.
  `.trim(), []);
  const [commitDate, setCommitDate] = useState('');
  useEffect(() => {
    fetchLatestCommitISODate('src/pages/posts/DanOngThichOPNPost.tsx')
      .then(iso => { if (iso) setCommitDate(formatViDate(new Date(iso))); })
      .catch(() => {});
  }, []);
  const readMins = readingTimeMinutes(plainText);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="section-padding bg-gradient-to-br from-red-50 to-rose-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/blog/tinh-yeu-hon-nhan" className="inline-flex items-center text-primary hover:text-primary-foreground hover:bg-primary transition-colors rounded px-2 py-1 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" /> Quay lại danh sách bài viết
            </Link>
            <div className="text-center">
              <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">Tình yêu - Hôn nhân</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-6 mb-6">10 điều mà đàn ông thường thích ở phụ nữ.</h1>
              <div className="flex items-center justify-center gap-6 text-muted-foreground text-sm">
                <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><span>{commitDate || 'Đang cập nhật ngày đăng...'}</span></div>
                <div className="flex items-center gap-1"><User className="w-4 h-4" /><span>{readMins} phút đọc</span></div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-padding">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="prose prose-lg max-w-none">
              <div className="mb-8">
                <img src="https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?w=1200&h=600&fit=crop" alt="Những phẩm chất đàn ông yêu thích" className="w-full h-64 md:h-80 object-cover rounded-lg" loading="lazy" />
              </div>
              <div className="text-foreground space-y-6">
                <p className="text-lg leading-relaxed">
                  <strong>Mỗi người đàn ông có những sở thích và ưu tiên riêng khi tìm kiếm đối tác, nhưng có một số phẩm chất chung mà nhiều đàn ông thường tìm kiếm ở phụ nữ:</strong>
                </p>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                  <li><strong>Sự Tự Tin:</strong> Đàn ông thường bị thu hút bởi phụ nữ tự tin, người biết giá trị bản thân và không ngần ngại thể hiện mình.</li>
                  <li><strong>Tính Cách Độc Lập:</strong> Phụ nữ có cuộc sống riêng, sở thích và mục tiêu cá nhân… cho thấy sức mạnh nội tâm.</li>
                  <li><strong>Khả Năng Giao Tiếp Tốt:</strong> Biết lắng nghe, chia sẻ cảm xúc cởi mở.</li>
                  <li><strong>Hài Hước & Vui Vẻ:</strong> Tạo ra bầu không khí tích cực, thoải mái.</li>
                  <li><strong>Chấp Nhận & Hỗ Trợ:</strong> Cần sự khích lệ, nâng đỡ lẫn nhau.</li>
                  <li><strong>Thông Minh & Hiểu Biết:</strong> Kiến thức và tư duy sâu sắc luôn hấp dẫn.</li>
                  <li><strong>Quyến Rũ & Lãng Mạn:</strong> Không chỉ ngoại hình mà còn cách cư xử, giao tiếp.</li>
                  <li><strong>Chân Thành & Trung Thực:</strong> Nền tảng của niềm tin bền vững.</li>
                  <li><strong>Cởi Mở & Thích Nghi:</strong> Linh hoạt với điều mới, giữ tinh thần phiêu lưu.</li>
                  <li><strong>Quan Tâm & Lòng Tốt:</strong> Sự tử tế luôn tạo cảm giác an toàn.</li>
                </ol>
                <p className="text-muted-foreground">Điều quan trọng nhất là sự kết nối và thấu hiểu lẫn nhau trong mối quan hệ.</p>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default DanOngThichOPNPost;
