import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur border-b">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="font-semibold text-lg">
          Inniqueen
        </Link>

        <div className="flex items-center gap-6">
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `text-sm ${isActive ? "font-semibold" : "opacity-80 hover:opacity-100"}`
            }
          >
            Blog
          </NavLink>

          <a
            href="#contact"
            className="text-sm inline-flex items-center rounded-xl px-3 py-1.5 border hover:bg-accent"
          >
            Liên hệ
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
