import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

async function commit(path:string){const u=`https://api.github.com/repos/TH01157/inni-queen-germany-guide/commits?path=${encodeURIComponent(path)}&per_page=1`;const r=await fetch(u);if(!r.ok)return;const d=await r.json();return d?.[0]?.commit?.committer?.date??d?.[0]?.commit?.author?.date;}
const f=(d:Date)=>d.toLocaleDateString('vi-VN',{year:'numeric',month:'long',day:'numeric'});
const rt=(t:string,w=200)=>Math.max(1,Math.ceil(t.trim().split(/\s+/).length/w));

const NguyenTacTroChuyenHonNhanPost=()=>{
  const text=useMemo(()=>`
8 Nguyên tắc nghệ thuật trò chuyện trong hôn nhân bạn cần biết.

Nghệ thuật trò chuyện trong hôn nhân là một yếu tố quan trọng giúp xây dựng và duy trì một mối quan hệ lành mạnh và hạnh phúc…

1. Lắng Nghe Một Cách Chân Thành…
2. Nói Chuyện Cởi Mở & Trung Thực…
3. Tránh Các Lỗi Giao Tiếp…
4. Biết Khi Nào Nên Nói & Khi Nào Nên Im Lặng…
5. Sử Dụng "I-statements"…
6. Giải Quyết Xung Đột Lành Mạnh…
7. Chia Sẻ Những Điều Nhỏ Nhặt…
8. Khen Ngợi & Cảm Ơn…
  `.trim(),[]);
  const [d,setD]=useState('');useEffect(()=>{commit('src/pages/posts/NguyenTacTroChuyenHonNhanPost.tsx').then(i=>{if(i)setD(f(new Date(i)))})},[]);
  const mins=rt(text);

  return(<div className="min-h-screen bg-background"><Navigation/>
    <main className="pt-20">
      <section className="section-padding bg-gradient-to-br from-red-50 to-rose-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog/tinh-yeu-hon-nhan" className="inline-flex items-center text-primary hover:text-primary-foreground hover:bg-primary transition-colors rounded px-2 py-1 mb-6"><ArrowLeft className="w-4 h-4 mr-2"/>Quay lại danh sách bài viết</Link>
          <div className="text-center">
            <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">Tình yêu - Hôn nhân</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-6 mb-6">8 Nguyên tắc nghệ thuật trò chuyện trong hôn nhân bạn cần biết.</h1>
            <div className="flex items-center justify-center gap-6 text-muted-foreground text-sm">
              <div className="flex items-center gap-1"><Calendar className="w-4 h-4"/><span>{d||'Đang cập nhật ngày đăng...'}</span></div>
              <div className="flex items-center gap-1"><User className="w-4 h-4"/><span>{mins} phút đọc</span></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none">
          <div className="mb-8"><img src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=1200&h=600&fit=crop" alt="Nghệ thuật trò chuyện trong hôn nhân" className="w-full h-64 md:h-80 object-cover rounded-lg" loading="lazy"/></div>
          <div className="text-foreground space-y-6">
            <p className="text-lg leading-relaxed"><strong>Nghệ thuật trò chuyện… là chìa khóa của sự gắn kết và hạnh phúc.</strong></p>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
              <li><strong>Lắng Nghe Chân Thành:</strong> Lắng nghe cả cảm xúc phía sau lời nói.</li>
              <li><strong>Cởi Mở & Trung Thực:</strong> Chia sẻ rõ ràng, xây dựng niềm tin.</li>
              <li><strong>Tránh “4 kỵ” giao tiếp:</strong> chỉ trích, khinh thường, phòng vệ, cô lập.</li>
              <li><strong>Biết lúc im lặng:</strong> Cho nhau không gian khi cần.</li>
              <li><strong>Dùng “I-statements”:</strong> “Tôi cảm thấy… khi…”, tránh đổ lỗi.</li>
              <li><strong>Giải quyết xung đột:</strong> Tập trung giải pháp.</li>
              <li><strong>Chia sẻ điều nhỏ:</strong> Tăng sự gần gũi hàng ngày.</li>
              <li><strong>Khen ngợi & cảm ơn:</strong> Nuôi dưỡng sự tích cực.</li>
            </ol>
          </div>
        </article>
      </div></section>
    </main>
    <Footer/></div>);
};
export default NguyenTacTroChuyenHonNhanPost;
