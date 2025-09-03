import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

async function commit(path:string){const u=`https://api.github.com/repos/TH01157/inni-queen-germany-guide/commits?path=${encodeURIComponent(path)}&per_page=1`;const r=await fetch(u);if(!r.ok)return;const d=await r.json();return d?.[0]?.commit?.committer?.date??d?.[0]?.commit?.author?.date;}
const f=(d:Date)=>d.toLocaleDateString('vi-VN',{year:'numeric',month:'long',day:'numeric'});
const rt=(t:string,w=200)=>Math.max(1,Math.ceil(t.trim().split(/\s+/).length/w));

const TinhYeuQuaCacGiaiDoanPost=()=>{
  const text=useMemo(()=>`
Tình yêu qua các giai đoạn.

Tình yêu qua các giai đoạn cuộc đời phản ánh sự thay đổi và phát triển của cảm xúc…

1. Tuổi Thiếu Niên…
2. Tuổi Trẻ (20–30)…
3. Trung Niên (30–50)…
4. Sau Trung Niên (50+)…
5. Tuổi Già…
  `.trim(),[]);
  const [d,setD]=useState('');useEffect(()=>{commit('src/pages/posts/TinhYeuQuaCacGiaiDoanPost.tsx').then(i=>{if(i)setD(f(new Date(i)))})},[]);
  const mins=rt(text);

  return(<div className="min-h-screen bg-background"><Navigation/>
    <main className="pt-20">
      <section className="section-padding bg-gradient-to-br from-red-50 to-rose-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog/tinh-yeu-hon-nhan" className="inline-flex items-center text-primary hover:text-primary-foreground hover:bg-primary transition-colors rounded px-2 py-1 mb-6"><ArrowLeft className="w-4 h-4 mr-2"/>Quay lại danh sách bài viết</Link>
          <div className="text-center">
            <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">Tình yêu - Hôn nhân</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-6 mb-6">Tình yêu qua các giai đoạn.</h1>
            <div className="flex items-center justify-center gap-6 text-muted-foreground text-sm">
              <div className="flex items-center gap-1"><Calendar className="w-4 h-4"/><span>{d||'Đang cập nhật ngày đăng...'}</span></div>
              <div className="flex items-center gap-1"><User className="w-4 h-4"/><span>{mins} phút đọc</span></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none">
          <div className="mb-8"><img src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1200&h=600&fit=crop" alt="Tình yêu qua các giai đoạn" className="w-full h-64 md:h-80 object-cover rounded-lg" loading="lazy"/></div>
          <div className="text-foreground space-y-6">
            <p className="text-lg leading-relaxed"><strong>Tình yêu thay đổi theo từng chặng đời — trưởng thành, sâu sắc và nhân ái hơn.</strong></p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li><strong>Thiếu niên:</strong> Mãnh liệt, khám phá bản thân.</li>
              <li><strong>Tuổi trẻ:</strong> Tìm kiếm ổn định, cam kết dài lâu.</li>
              <li><strong>Trung niên:</strong> Cân bằng gia đình – sự nghiệp.</li>
              <li><strong>Sau trung niên:</strong> Điều chỉnh nhịp sống, chấp nhận.</li>
              <li><strong>Tuổi già:</strong> Gắn kết sâu sắc, tri ân hành trình chung.</li>
            </ul>
          </div>
        </article>
      </div></section>
    </main>
    <Footer/></div>);
};
export default TinhYeuQuaCacGiaiDoanPost;
