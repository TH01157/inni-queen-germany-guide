// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import About from "./pages/About";
import LoveFamily from "./pages/categories/LoveFamily";
import Lifestyle from "./pages/categories/Lifestyle";
import Legal from "./pages/categories/Legal";
import Finance from "./pages/categories/Finance";
import Post from "./pages/Post";        // trang bài viết dùng route động
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
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

            {/* 404 cho client-side */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
