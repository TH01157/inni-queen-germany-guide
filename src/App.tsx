// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import About from "./pages/About";
import LoveFamily from "./pages/categories/LoveFamily";
import Lifestyle from "./pages/categories/Lifestyle";
import Legal from "./pages/categories/Legal";
import Finance from "./pages/categories/Finance";
import Post from "./pages/Post";        // <— dùng Post.tsx duy nhất
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />

        {/* Chuyên mục */}
        <Route path="/blog/tinh-yeu-hon-nhan" element={<LoveFamily />} />
        <Route path="/blog/loi-song-chua-lanh" element={<Lifestyle />} />
        <Route path="/blog/luat-phap" element={<Legal />} />
        <Route path="/blog/tai-chinh" element={<Finance />} />

        {/* Bài viết: chỉ 1 route động */}
        <Route path="/posts/:slug" element={<Post />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
