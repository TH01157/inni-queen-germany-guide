import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

// === Helpers: đọc ngày commit gần nhất từ GitHub & tính thời gian đọc ===
async function fetchLatestCommitISODate(path: string) {
  const url = `https://api.github.com/repos/TH01157/inni-queen-germany-guide/commits?path=${encodeURIComponent(
    path
  )}&per_page=1`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Cannot fetch commit info');
  const data = await res.json();
  const iso = data?.[0]?.commit?.committer?.date ?? data?.[0]?.commit?.author?.date;
  return iso as string | undefined;
}
function formatViDate(dt: Date) {
  return dt.toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' });
}
function readingTimeMinutes(text: string, wpm = 200) {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wpm));
}

const ThaThuBanThanPost = () => {
  // Nội dung thuần văn bản để tính thời gian đọc
  const plainText = useMemo(() => `
10 cách tha thứ cho chính mình.

Chấp nhận và yêu thương bản thân là một quá trình quan trọng nhằm xây dựng sự tự tin và hạnh phúc. Dưới đây là một số cách để phát triển tình yêu và sự chấp nhận đối với chính mình:

1. Nhận Diện và Chấp Nhận Cảm Xúc của Bạn: Hãy nhận diện và chấp nhận mọi cảm xúc của bạn, dù đó là cảm xúc tích cực hay tiêu cực. Hiểu rằng mọi cảm xúc đều là một phần tự nhiên của con người.

2. Tự Nhận Thức: Dành thời gian để suy ngẫm và hiểu rõ về bản thân, bao gồm cả điểm mạnh và điểm yếu. Hãy nhìn nhận bản thân một cách khách quan và từ bi.

3. Tập Trung vào Điểm Mạnh và Thành Tựu của Bạn: Nhìn nhận và tự hào về những thành tựu và điểm mạnh của bạn. Hãy ghi nhớ những lúc bạn đã vượt qua khó khăn hoặc đạt được mục tiêu.

4. Thực Hành Tự Khen Ngợi: Hãy tập thói quen khen ngợi bản thân mỗi ngày. Điều này có thể dựa trên các thành tựu nhỏ nhất, từ việc hoàn thành công việc hàng ngày đến việc vượt qua thách thức lớn.

5. Chăm Sóc Bản Thân: Thực hành chăm sóc bản thân, bao gồm cả sức khỏe thể chất và tinh thần. Ăn uống lành mạnh, tập thể dục, và dành thời gian nghỉ ngơi là cần thiết.

6. Giảm Bớt Tự Phê Bình: Hãy nhận thức về những lúc bạn tự phê bình mình và thay thế những suy nghĩ tiêu cực bằng quan điểm tích cực và khách quan hơn.

7. Đặt Giới Hạn Lành Mạnh: Học cách nói "không" và đặt giới hạn với người khác. Việc tôn trọng bản thân và thời gian của mình là một phần quan trọng của việc yêu thương bản thân.

8. Thực Hành Tự Tha Thứ: Hãy tha thứ cho bản thân về những sai lầm trong quá khứ. Hiểu rằng mọi người đều mắc sai lầm và học hỏi từ chúng là phần của quá trình phát triển.

9. Khám Phá và Theo Đuổi Đam Mê: Dành thời gian để khám phá và tham gia vào những sở thích hoặc hoạt động mà bạn yêu thích. Điều này giúp tăng cường tinh thần và cảm giác hạnh phúc.

10. Tìm Kiếm Sự Hỗ Trợ Khi Cần: Đôi khi, việc trò chuyện với một người bạn tin cậy, gia đình, hoặc chuyên gia tâm lý có thể giúp bạn hiểu và yêu thương bản thân hơn.

Nhớ rằng, việc học cách yêu thương và chấp nhận bản thân là một hành trình, không phải một điểm đến. Hãy kiên nhẫn và dịu dàng với chính mình.
  `.trim(), []);

  const [commitDate, setCommitDate] = useState<string>('');

  useEffect(() => {
    // Lấy ngày commit của chính file này
    fetchLatestCommitISODate('src/pages/posts/ThaThuBanThanPost.tsx')
      .then((iso) => {
        if (iso) setCommitDate(formatViDate(new Date(iso)));
      })
      .catch(() => {});
  }, []);

  const readMins = readingTimeMinutes(plainText);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/blog/loi-song-chua-lanh"
              className="inline-flex items-center text-primary hover:text-primary-foreground hover:bg-primary transition-colors rounded px-2 py-1 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại danh sách bài viết
            </Link>

            <div className="text-center">
              <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                Lối sống - Chữa lành
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-6 mb-6">
                10 cách tha thứ cho chính mình.
              </h1>

              <div className="flex items-center justify-center gap-6 text-muted-foreground text-sm">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{commitDate || 'Đang cập nhật ngày đăng...'}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{readMins} phút đọc</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="prose prose-lg max-w-none">
              <div className="mb-8">
                <img
                  src="https://images.unsplash.com/photo-1518655048521-f130df041f66?w=1200&h=600&fit=crop"
                  alt="Tha thứ cho chính mình"
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                  loading="lazy"
                />
              </div>

              <div className="text-foreground space-y-6">
                <p className="text-xl leading-relaxed font-medium">
                  <strong>
                    Chấp nhận và yêu thương bản thân là một quá trình quan trọng nhằm xây dựng sự tự tin và hạnh phúc.
                    Dưới đây là một số cách để phát triển tình yêu và sự chấp nhận đối với chính mình:
                  </strong>
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">1. Nhận Diện và Chấp Nhận Cảm Xúc của Bạn</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Hãy nhận diện và chấp nhận mọi cảm xúc của bạn, dù đó là cảm xúc tích cực hay tiêu cực.
                      Hiểu rằng mọi cảm xúc đều là một phần tự nhiên của con người.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">2. Tự Nhận Thức</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Dành thời gian để suy ngẫm và hiểu rõ về bản thân, bao gồm cả điểm mạnh và điểm yếu.
                      Hãy nhìn nhận bản thân một cách khách quan và từ bi.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">3. Tập Trung vào Điểm Mạnh và Thành Tựu</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Nhìn nhận và tự hào về những thành tựu và điểm mạnh của bạn.
                      Hãy ghi nhớ những lúc bạn đã vượt qua khó khăn hoặc đạt được mục tiêu.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">4. Thực Hành Tự Khen Ngợi</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Hãy tập thói quen khen ngợi bản thân mỗi ngày — kể cả các thành tựu nhỏ nhất —
                      từ việc hoàn thành việc vặt đến việc vượt qua thử thách lớn.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">5. Chăm Sóc Bản Thân</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Chú ý sức khỏe thể chất lẫn tinh thần: ăn uống lành mạnh, vận động đều,
                      ngủ đủ và nghỉ ngơi chất lượng để tái tạo năng lượng.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">6. Giảm Bớt Tự Phê Bình</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Nhận diện “giọng nói chỉ trích” bên trong và thay thế bằng cách tự thoại tích cực, khách quan và tử tế hơn.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">7. Đặt Giới Hạn Lành Mạnh</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Học cách nói “không” và bảo vệ thời gian, năng lượng của mình.
                      Tôn trọng ranh giới là một biểu hiện thiết yếu của tự yêu thương.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">8. Thực Hành Tự Tha Thứ</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Tha thứ cho bản thân về những sai lầm đã qua. Mọi người đều mắc lỗi;
                      điều quan trọng là học được gì và trưởng thành ra sao từ đó.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">9. Khám Phá & Theo Đuổi Đam Mê</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Nuôi dưỡng những điều khiến bạn thấy tràn đầy sinh lực — sở thích, hoạt động sáng tạo,
                      kết nối thiên nhiên… để tăng cường hạnh phúc.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">10. Tìm Kiếm Sự Hỗ Trợ Khi Cần</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Trò chuyện với người thân, bạn bè tin cậy hoặc chuyên gia tâm lý khi thấy cần.
                      Sự nâng đỡ đúng lúc giúp bạn đi nhanh và bền hơn.
                    </p>
                  </div>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg mt-8">
                  <p className="text-lg font-medium text-foreground">
                    <strong>
                      Nhớ rằng, việc học cách yêu thương và chấp nhận bản thân là một hành trình — không phải đích đến.
                      Hãy kiên nhẫn và dịu dàng với chính mình.
                    </strong>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ThaThuBanThanPost;
