const Footer = () => {
  return (
    <footer className="border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm opacity-80">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Inniqueen. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/" className="hover:underline">Trang chủ</a>
            <a href="#contact" className="hover:underline">Liên hệ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
