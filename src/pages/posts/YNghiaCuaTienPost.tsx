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
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
              <li>Tình yêu chân thành…</li><li>Hạnh phúc thực sự…</li><li>Sức khỏe tuyệt đối…</li><li>Thời gian…</li>
              <li>Sự tôn trọng thực sự…</li><li>Tài năng/kỹ năng…</li><li>Trải nghiệm sống thực…</li><li>Hòa bình nội tâm…</li>
            </ol>
          </div>
        </article>
      </div></section>
    </main>
    <Footer/></div>);
};
export default YNghiaCuaTienPost;
