import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

async function commit(path:string){const u=`https://api.github.com/repos/TH01157/inni-queen-germany-guide/commits?path=${encodeURIComponent(path)}&per_page=1`;const r=await fetch(u);if(!r.ok)return;const d=await r.json();return d?.[0]?.commit?.committer?.date??d?.[0]?.commit?.author?.date;}
const f=(d:Date)=>d.toLocaleDateString('vi-VN',{year:'numeric',month:'long',day:'numeric'});
const rt=(t:string,w=200)=>Math.max(1,Math.ceil(t.trim().split(/\s+/).length/w));

const HanhPhucBenLauPost=()=>{
  const text=useMemo(()=>`
7 điều cần làm để hạnh phúc bền lâu.

Tình yêu và sự thấu hiểu lẫn nhau là hai yếu tố quan trọng tạo nên nền tảng vững chắc cho một mối quan hệ…

1. Xây Dựng Sự Tin Tưởng…
2. Giao Tiếp Hiệu Quả…
3. Hỗ Trợ Cảm Xúc…
4. Tôn Trọng & Chấp Nhận…
5. Giải Quyết Xung Đột…
6. Phát Triển Cùng Nhau…
7. Kết Nối Sâu Sắc…
  `.trim(),[]);
  const [d,setD]=useState('');useEffect(()=>{commit('src/pages/posts/HanhPhucBenLauPost.tsx').then(i=>{if(i)setD(f(new Date(i)))})},[]);
  const mins=rt(text);

  return(<div className="min-h-screen bg-background"><Navigation/>
    <main className="pt-20">
      <section className="section-padding bg-gradient-to-br from-red-50 to-rose-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog/tinh-yeu-hon-nhan" className="inline-flex items-center text-primary hover:text-primary-foreground hover:bg-primary transition-colors rounded px-2 py-1 mb-6"><ArrowLeft className="w-4 h-4 mr-2"/>Quay lại danh sách bài viết</Link>
          <div className="text-center">
            <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">Tình yêu - Hôn nhân</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-6 mb-6">7 điều cần làm để hạnh phúc bền lâu.</h1>
            <div className="flex items-center justify-center gap-6 text-muted-foreground text-sm">
              <div className="flex items-center gap-1"><Calendar className="w-4 h-4"/><span>{d||'Đang cập nhật ngày đăng...'}</span></div>
              <div className="flex items-center gap-1"><User className="w-4 h-4"/><span>{mins} phút đọc</span></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none">
          <div className="mb-8"><img src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=1200&h=600&fit=crop" alt="Hạnh phúc bền lâu" className="w-full h-64 md:h-80 object-cover rounded-lg" loading="lazy"/></div>
          <div className="text-foreground space-y-6">
            <p className="text-lg leading-relaxed"><strong>Tình yêu đi cùng thấu hiểu, tôn trọng và phát triển bền bỉ mỗi ngày.</strong></p>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
              <li><strong>Xây dựng tin tưởng</strong> làm nền.</li>
              <li><strong>Giao tiếp hiệu quả</strong> để tránh hiểu lầm.</li>
              <li><strong>Hỗ trợ cảm xúc</strong> đúng lúc.</li>
              <li><strong>Tôn trọng & chấp nhận</strong> khác biệt.</li>
              <li><strong>Giải quyết xung đột</strong> trong tinh thần xây dựng.</li>
              <li><strong>Phát triển cùng nhau</strong> về sự nghiệp & đời sống.</li>
              <li><strong>Kết nối sâu sắc</strong> vượt trên lãng mạn ban đầu.</li>
            </ol>
          </div>
        </article>
      </div></section>
    </main>
    <Footer/></div>);
};
export default HanhPhucBenLauPost;
