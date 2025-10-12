const Index = () => {
  return (
    <section className="relative">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Inniqueen – Hiểu luật để vững vàng, hiểu mình để sống nhẹ.
          </h1>
          <p className="mt-4 text-base md:text-lg opacity-80 max-w-3xl">
            Nền tảng chia sẻ về Luật – Tâm lý – Cuộc sống tại Đức dành cho cộng đồng
            người Việt. Đây là phiên bản khởi động; phần Blog sẽ được mở lại sau khi hoàn tất phục hồi.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="rounded-xl px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground hover:opacity-90"
            >
              Kết nối ngay
            </a>
            {/* <a href="/blog" className="rounded-xl px-5 py-2.5 text-sm border hover:bg-accent">
              Vào Blog
            </a> */}
          </div>
        </div>
      </div>

      {/* Contact anchor */}
      <div id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-semibold">Liên hệ</h2>
        <p className="mt-2 opacity-80">
          Email: <a className="underline" href="mailto:hello@inniqueen.com">hello@inniqueen.com</a>
        </p>
      </div>
    </section>
  );
};

export default Index;
