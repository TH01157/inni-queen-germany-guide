import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import About from "./pages/About";
import LoveFamily from "./pages/categories/LoveFamily";
import Lifestyle from "./pages/categories/Lifestyle";
import Legal from "./pages/categories/Legal";
import Finance from "./pages/categories/Finance";
import NotFound from "./pages/NotFound";

// ✅ Route động cho tất cả bài viết
import PostDynamic from "./pages/PostDynamic";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
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

          {/* ✅ TẤT CẢ bài post đi qua 1 route động này */}
          <Route path="/posts/:slug" element={<PostDynamic />} />

          {/* cuối cùng là 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
