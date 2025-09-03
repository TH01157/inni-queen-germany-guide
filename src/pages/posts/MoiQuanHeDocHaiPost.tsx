import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

async function commit(p:string){const u=`https://api.github.com/repos/TH01157/inni-queen-germany-guide/commits?path=${encodeURIComponent(p)}&per_page=1`;const r=await fetch(u);if(!r.ok)return;const d=await r.json();return d?.[0]?.commit?.committer?.date??d?.[0]?.commit?.author?.date;}
const f=(d:Date)=>d.toLocaleDateString('vi-VN',{year:'numeric',month:'long',day:'numeric'});
const rt=(t:string,w=200)=>Math.max(1,Math.ceil(t.trim().split(/\s+/).length/w));

const MoiQuanHeDocHaiPost=()=>{
  const text=useMemo(()=>`
10 điều xảy ra trong mối quan hệ độc hại.

Mối quan hệ độc hại có thể ảnh hưởng nghiêm trọng đến sức khỏe tâm thần và cảm xúc…

1. Lạm dụng tinh thần & cảm xúc…
2. Kiểm soát & ghen tuông quá mức…
3. Phụ thuộc tình cảm…
4. Bạo lực hoặc đe doạ…
5. Cô lập…
6. Bất ổn cảm xúc…
7. Thiếu tôn trọng & giao tiếp kém…
8. Mất tự do cá nhân…
9. Thiếu hỗ trợ…
10. Bất an & tội lỗi…
  `.trim(),[]);
  const [d,setD]=useState('');useEffect(()=>{commit('src/pages/posts/MoiQuanHeDocHaiPost.tsx').then(i=>{if(i)setD(f(new Date(i)))})},[]);
  const mins=rt(text);

  return(<div className="min-h-screen bg-background"><Navigation/>
    <main className="pt-20">
      <section className="section-padding bg-gradient-to-br from-red-50 to-rose-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog/tinh-yeu-hon-nhan" className="inline-flex items-center text-primary hover:text-primary-foreground hover:bg-primary transition-colors rounded px-2 py-1 mb-6"><ArrowLeft className="w-4 h-4 mr-2"/>Quay lại danh sách bài viết</Link>
          <div className="text-center">
            <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">Tình yêu - Hôn nhân</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-6 mb-6">10 điều xảy ra trong mối quan hệ độc hại.</h1>
            <div className="flex items-center justify-center gap-6 text-muted-foreground text-sm">
              <div className="flex items-center gap-1"><Calendar className="w-4 h-4"/><span>{d||'Đang cập nhật ngày đăng...'}</span></div>
              <div className="flex items-center gap-1"><User className="w-4 h-4"/><span>{mins} phút đọc</span></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none">
          <div className="mb-8"><img src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1200&h=600&fit=crop" alt="Nhận diện mối quan hệ độc hại" className="w-full h-64 md:h-80 object-cover rounded-lg" loading="lazy"/></div>
          <div className="text-foreground space-y-6">
            <p className="text-lg leading-relaxed"><strong>Nhận diện để bảo vệ bản thân và tìm kiếm sự trợ giúp đúng lúc.</strong></p>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
              <li>Lạm dụng tinh thần, cảm xúc…</li>
              <li>Kiểm soát, ghen tuông quá mức…</li>
              <li>Phụ thuộc không lành mạnh…</li>
              <li>Bạo lực/đe doạ — không thể chấp nhận.</li>
              <li>Cô lập khỏi mạng lưới hỗ trợ.</li>
              <li>Thăng trầm cảm xúc cực đoan…</li>
              <li>Thiếu tôn trọng & giao tiếp kém.</li>
              <li>Mất tự do cá nhân.</li>
              <li>Thiếu hỗ trợ, cảm giác đơn độc.</li>
              <li>Luôn bất an, áy náy tội lỗi.</li>
            </ol>
            <p className="text-muted-foreground">Nếu bạn hoặc người quen có dấu hiệu trên, hãy tìm hỗ trợ từ người tin cậy hoặc chuyên gia.</p>
          </div>
        </article>
      </div></section>
    </main>
    <Footer/></div>);
};
export default MoiQuanHeDocHaiPost;
