import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

async function commit(p:string){const u=`https://api.github.com/repos/TH01157/inni-queen-germany-guide/commits?path=${encodeURIComponent(p)}&per_page=1`;const r=await fetch(u);if(!r.ok)return;const d=await r.json();return d?.[0]?.commit?.committer?.date??d?.[0]?.commit?.author?.date;}
const f=(d:Date)=>d.toLocaleDateString('vi-VN',{year:'numeric',month:'long',day:'numeric'});
const rt=(t:string,w=200)=>Math.max(1,Math.ceil(t.trim().split(/\s+/).length/w));

const YNghiaCuaTienPost=()=>{
  const text=useMemo(()=>`
TIỀN – 8 Ý nghĩa của tiền trong cuộc sống.

Có nhiều tranh cãi về tiền… Dưới đây là 8 ý nghĩa:

1. Tình Yêu Chân Thành…
2. Hạnh Phúc Thực Sự…
3. Sức Khỏe Tuyệt Đối…
4. Thời Gian…
5. Sự Tôn Trọng Thực Sự…
6. Tài Năng Hoặc Kỹ Năng…
7. Trải Nghiệm Sống Thực Sự…
8. Hòa Bình Nội Tâm…
  `.trim(),[]);
  const [d,setD]=useState('');useEffect(()=>{commit('src/pages/posts/YNghiaCuaTienPost.tsx').then(i=>{if(i)setD(f(new Date(i)))})},[]);
  const mins=rt(text);

  return(<div className="min-h-screen bg-background"><Navigation/>
    <main className="pt-20">
      <section className="section-padding bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog/tai-chinh" className="inline-flex items-center text-primary hover:text-primary-foreground hover:bg-primary transition-colors rounded px-2 py-1 mb-6"><ArrowLeft className="w-4 h-4 mr-2"/>Quay lại danh sách bài viết</Link>
          <div className="text-center">
            <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">Tài chính</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-6 mb-6">TIỀN – 8 Ý nghĩa của tiền trong cuộc sống.</h1>
            <div className="flex items-center justify-center gap-6 text-muted-foreground text-sm">
              <div className="flex items-center gap-1"><Calendar className="w-4 h-4"/><span>{d||'Đang cập nhật ngày đăng...'}</span></div>
              <div className="flex items-center gap-1"><User className="w-4 h-4"/><span>{mins} phút đọc</span></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none">
          <div className="mb-8"><img src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1200&h=600&fit=crop" alt="Ý nghĩa của tiền" className="w-full h-64 md:h-80 object-cover rounded-lg" loading="lazy"/></div>
          <div className="text-foreground space-y-6">
            <p className="text-lg leading-relaxed"><strong>Tiền là công cụ mạnh mẽ — nhưng không mua được mọi điều cốt lõi.</strong></p>
          </div>

//Nội dung
          <div className="text-foreground space-y-6">
               
                <p className="text-lg leading-relaxed">
                  Có rất nhiều tranh cãi qua việc TIỀN. Nhiều người nói không tiền là tất cả, nhóm lại phản đối TIỀN không có ý nghĩa.Tiền là một công cụ mạnh mẽ và có thể mua được nhiều thứ, nhưng vẫn có những giá trị và trải nghiệm trong cuộc sống mà tiền không thể mua được, dưới đây là 8 ý nghĩa mà Inniqueen nghĩ rằng bạn cũng sẽ hoàn toàn đống ý:
                </p>

                <div className="space-y-6">
                  {/* 1 -> 10 như cũ */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">1. Tình Yêu Chân Thành: </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Mặc dù tiền có thể tạo điều kiện cho những trải nghiệm lãng mạn hoặc thu hút sự chú ý, nhưng nó không thể mua được tình yêu thực sự và sự gắn kết chân thành giữa con người.                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">2. Hạnh Phúc Thực Sự: </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Hạnh phúc thực sự thường xuất phát từ những điều như mối quan hệ ý nghĩa, sự thành công cá nhân, hoặc cảm giác hài lòng từ việc giúp đỡ người khác. Tiền có thể mua được sự thoải mái và an toàn, nhưng không phải lúc nào cũng đảm bảo hạnh phúc.
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">3. Sức Khỏe Tuyệt Đối: </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Tiền có thể mua được dịch vụ y tế tốt và cải thiện chất lượng cuộc sống, nhưng không thể đảm bảo sức khỏe hoàn hảo hoặc chữa khỏi mọi bệnh tật, đặc biệt là các bệnh không thể chữa trị như một số bệnh di truyền hay bệnh giai đoạn cuối.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">4. Thời Gian: </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Tiền không thể mua thêm thời gian. Mỗi người đều có hạn mức thời gian nhất định trong cuộc sống, và không cách nào để mua thêm hoặc quay ngược lại thời gian.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">5. Sự Tôn Trọng Thực Sự: </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Mặc dù tiền có thể mua được quyền lực hoặc ảnh hưởng, nhưng không thể mua được sự tôn trọng và ngưỡng mộ thực sự từ người khác. Điều này đòi hỏi sự tôn trọng lẫn nhau, tính cách và đóng góp tích cực.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">6. Tài Năng Hoặc Kỹ Năng: </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Tiền có thể mua giáo dục và đào tạo, nhưng không thể mua được tài năng tự nhiên hoặc sự cần cù và nỗ lực cần thiết để phát triển kỹ năng.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">7. Trải Nghiệm Sống Thực Sự: </h3>
                    <p className="text-muted-foreground leading-relaxed">
                       Một số trải nghiệm quý giá nhất trong đời như tình bạn, niềm vui từ những sở thích, hoặc sự thanh thản từ việc tận hưởng thiên nhiên, không phụ thuộc vào tiền bạc.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">8. Hòa Bình Nội Tâm: </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Sự bình yên và hòa bình nội tâm thường đến từ sự tự nhận thức, sự chấp nhận và sự hiểu biết về bản thân, không phải từ tiền bạc.
                  </div>
                  
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg mt-8">
                  <p className="text-lg font-medium text-foreground">
                    <strong>
                      Trong xã hội hiện đại, tiền có vai trò quan trọng trong việc tạo ra sự thoải mái và an toàn. 
                      Tuy nhiên, những giá trị quan trọng nhất của cuộc sống thường không phụ thuộc vào tiền bạc.
                    </strong>
                  </p>
                </div>
              </div>
          //hết Nội dung
        </article>
      </div></section>
    </main>
    <Footer/></div>);
};
export default YNghiaCuaTienPost;
