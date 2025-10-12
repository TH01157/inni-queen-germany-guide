import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Alias tạm (nếu ai gõ /home) */}
          <Route path="/home" element={<Navigate to="/" replace />} />
          {/* 404 tối giản */}
          <Route
            path="*"
            element={
              <div className="max-w-4xl mx-auto px-4 py-16">
                <h1 className="text-3xl font-bold mb-2">404 – Không tìm thấy trang</h1>
                <p className="opacity-70">
                  Các route Blog/Posts đang được phục hồi. Vui lòng quay lại Trang chủ.
                </p>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
