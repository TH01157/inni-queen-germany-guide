import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

async function commit(p:string){const u=`https://api.github.com/repos/TH01157/inni-queen-germany-guide/commits?path=${encodeURIComponent(p)}&per_page=1`;const r=await fetch(u);if(!r.ok)return;const d=await r.json();return d?.[0]?.commit?.committer?.date??d?.[0]?.commit?.author?.date;}
const f=(d:Date)=>d.toLocaleDateString('vi-VN',{year:'numeric',month:'long',day:'numeric'});
const rt=(t:string,w=200)=>Math.max(1,Math.ceil(t.trim().split(/\s+/).length/w));

const CauNoiTienBacPost=()=>{
  const text=useMemo(()=>`
10 câu nói nổi tiếng về tiền bạc

1) Benjamin Franklin: "Một xu tiết kiệm là một xu kiếm được." …
2) Oscar Wilde: …
3) Warren Buffett: …
4) Ayn Rand: …
5) Socrates: …
6) Francis Bacon: …
7) Margaret Thatcher: …
8) Henry David Thoreau: …
9) Plato: …
10) Charles Dickens: …

Mỗi câu nói gợi mở góc nhìn khác nhau về vai trò và ảnh hưởng của tiền.
  `.trim(),[]);
  const [d,setD]=useState('');useEffect(()=>{commit('src/pages/posts/CauNoiTienBacPost.tsx').then(i=>{if(i)setD(f(new Date(i)))})},[]);
  const mins=rt(text);

  return(<div className="min-h-screen bg-background"><Navigation/>
    <main className="pt-20">
      <section className="section-padding bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog/tai-chinh" className="inline-flex items-center text-primary hover:text-primary-foreground hover:bg-primary transition-colors rounded px-2 py-1 mb-6"><ArrowLeft className="w-4 h-4 mr-2"/>Quay lại danh sách bài viết</Link>
          <div className="text-center">
            <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">Tài chính</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-6 mb-6">10 câu nói nổi tiếng về tiền bạc.</h1>
            <div className="flex items-center justify-center gap-6 text-muted-foreground text-sm">
              <div className="flex items-center gap-1"><Calendar className="w-4 h-4"/><span>{d||'Đang cập nhật ngày đăng...'}</span></div>
              <div className="flex items-center gap-1"><User className="w-4 h-4"/><span>{mins} phút đọc</span></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none">
          <div className="mb-8"><img src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=1200&h=600&fit=crop" alt="Những câu nói về tiền bạc" className="w-full h-64 md:h-80 object-cover rounded-lg" loading="lazy"/></div>
          <div className="text-foreground space-y-6">
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
              <li><strong>Benjamin Franklin:</strong> “Một xu tiết kiệm là một xu kiếm được.”</li>
              <li><strong>Oscar Wilde:</strong> “Khi tôi còn trẻ, tôi nghĩ tiền là thứ quan trọng nhất…”.</li>
              <li><strong>Warren Buffett:</strong> “Đừng phụ thuộc vào một nguồn thu…”.</li>
              <li><strong>Ayn Rand:</strong> “Tiền là công cụ của tự do…”.</li>
              <li><strong>Socrates:</strong> “Không phải bao nhiêu tiền bạn có…”.</li>
              <li><strong>Francis Bacon:</strong> “Tiền là ông chủ tốt nhưng đầy tớ tồi.”</li>
              <li><strong>Margaret Thatcher:</strong> “Không ai trốn được thực tế: phải làm việc…”.</li>
              <li><strong>Henry David Thoreau:</strong> “Giàu vì ít nhu cầu.”</li>
              <li><strong>Plato:</strong> “Tiền như nước biển: càng uống càng khát.”</li>
              <li><strong>Charles Dickens:</strong> “Tài sản không làm bạn giàu, sự hài lòng mới làm được.”</li>
            </ol>
            <p className="text-muted-foreground">Mỗi trích dẫn mở ra một góc nhìn để cân bằng tiền – giá trị – hạnh phúc.</p>
          </div>
        </article>
      </div></section>
    </main>
    <Footer/></div>);
};
export default CauNoiTienBacPost;
