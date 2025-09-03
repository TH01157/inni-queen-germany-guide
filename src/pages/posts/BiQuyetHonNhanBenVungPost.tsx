import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

async function fetchLatestCommitISODate(path:string){const u=`https://api.github.com/repos/TH01157/inni-queen-germany-guide/commits?path=${encodeURIComponent(path)}&per_page=1`;const r=await fetch(u);if(!r.ok)return;const d=await r.json();return d?.[0]?.commit?.committer?.date??d?.[0]?.commit?.author?.date;}
const f=(d:Date)=>d.toLocaleDateString('vi-VN',{year:'numeric',month:'long',day:'numeric'});
const rt=(t:string,w=200)=>Math.max(1,Math.ceil(t.trim().split(/\s+/).length/w));

const BiQuyetHonNhanBenVungPost=()=>{
  const text=useMemo(()=>`
Biết 10 bí quyết sau, hôn nhân sẽ bền vững.

Hạnh phúc bền lâu trong cuộc sống, đặc biệt là trong các mối quan hệ như hôn nhân, không phải là điều tự nhiên mà có mà đòi hỏi nỗ lực và cam kết từ cả hai phía. Dưới đây là một số bí quyết giúp duy trì hạnh phúc bền lâu:

1. Giao Tiếp Hiệu Quả…
2. Lắng Nghe và Hiểu Biết…
3. Chia Sẻ và Thời Gian Chất Lượng…
4. Kính Trọng và Tôn Trọng Lẫn Nhau…
5. Biết Ơn và Bày Tỏ Lòng Biết Ơn…
6. Giải Quyết Xung Đột Một Cách Lành Mạnh…
7. Tự Phát Triển và Hỗ Trợ Đối Tác Phát Triển…
8. Chấp Nhận và Thích Nghi…
9. Chia Sẻ Trách Nhiệm và Cam Kết…
10. Tình Yêu và Sự Lãng Mạn…

Những bí quyết này không phải công thức cố định; hạnh phúc cần kiên nhẫn, hiểu biết và nỗ lực từ cả hai.
  `.trim(),[]);
  const [d,setD]=useState('');useEffect(()=>{fetchLatestCommitISODate('src/pages/posts/BiQuyetHonNhanBenVungPost.tsx').then(i=>{if(i)setD(f(new Date(i)))})},[]);
  const mins=rt(text);

  return(<div className="min-h-screen bg-background"><Navigation/>
  <main className="pt-20">
    <section className="section-padding bg-gradient-to-br from-red-50 to-rose-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog/tinh-yeu-hon-nhan" className="inline-flex items-center text-primary hover:text-primary-foreground hover:bg-primary transition-colors rounded px-2 py-1 mb-6"><ArrowLeft className="w-4 h-4 mr-2"/>Quay lại danh sách bài viết</Link>
        <div className="text-center">
          <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">Tình yêu - Hôn nhân</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-6 mb-6">Biết 10 bí quyết sau, hôn nhân sẽ bền vững.</h1>
          <div className="flex items-center justify-center gap-6 text-muted-foreground text-sm">
            <div className="flex items-center gap-1"><Calendar className="w-4 h-4"/><span>{d||'Đang cập nhật ngày đăng...'}</span></div>
            <div className="flex items-center gap-1"><User className="w-4 h-4"/><span>{mins} phút đọc</span></div>
          </div>
        </div>
      </div>
    </section>
    <section className="section-padding"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <article className="prose prose-lg max-w-none">
        <div className="mb-8"><img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&h=600&fit=crop" alt="Bí quyết hôn nhân bền vững" className="w-full h-64 md:h-80 object-cover rounded-lg" loading="lazy"/></div>
        <div className="text-foreground space-y-6">
          <p className="text-lg leading-relaxed"><strong>Hạnh phúc bền lâu… đòi hỏi nỗ lực và cam kết từ cả hai.</strong></p>
          <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
            <li><strong>Giao Tiếp Hiệu Quả:</strong> Mở lòng, trung thực, cùng giải quyết vấn đề.</li>
            <li><strong>Lắng Nghe & Thấu Hiểu:</strong> Nghe bằng cả trái tim; đặt mình vào vị trí của nhau.</li>
            <li><strong>Thời Gian Chất Lượng:</strong> Chia sẻ hoạt động yêu thích, nuôi dưỡng gắn kết.</li>
            <li><strong>Tôn Trọng Lẫn Nhau:</strong> Tôn trọng quyết định, cảm xúc, quan điểm.</li>
            <li><strong>Biết Ơn:</strong> Thường xuyên ghi nhận, nói lời cảm ơn.</li>
            <li><strong>Giải Quyết Xung Đột Lành Mạnh:</strong> Tập trung giải pháp thay vì đổ lỗi.</li>
            <li><strong>Phát Triển Cá Nhân:</strong> Mỗi người cùng tiến, cùng hỗ trợ.</li>
            <li><strong>Chấp Nhận & Thích Nghi:</strong> Linh hoạt trước thay đổi.</li>
            <li><strong>Chia Sẻ Trách Nhiệm:</strong> Cùng gánh vác việc nhà, tài chính, con cái.</li>
            <li><strong>Duy Trì Lãng Mạn:</strong> Những cử chỉ nhỏ mỗi ngày.</li>
          </ol>
          <p className="text-muted-foreground">Mỗi cặp đôi có nhịp riêng — điều quan trọng là giữ tinh thần học hỏi và đồng hành.</p>
        </div>
      </article>
    </div></section>
  </main>
  <Footer/></div>);
};
export default BiQuyetHonNhanBenVungPost;
