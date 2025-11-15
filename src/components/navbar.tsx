import { useState, useEffect } from "react";

// SVG Icons
const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const XIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const HomeIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const FileIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const SparkleIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", icon: HomeIcon },
    { name: "Artikel", href: "#artikel", icon: FileIcon },
    { name: "Profil", href: "#profil", icon: UserIcon },
    { name: "Contact", href: "#contact", icon: MailIcon },
  ];

  const handleNavClick = (section: string) => {
    setActiveSection(section.toLowerCase());
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-2xl shadow-2xl border-b border-purple-500/20"
            : "bg-black/50 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo Premium */}
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-2 bg-blue-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm border border-blue-400/30 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-black text-transparent bg-clip-text bg-linear-to-br from-blue-400 to-purple-500">Z</span>
                </div>
                <div>
                  <h1 className="text-xl font-black tracking-tight">
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-pink-400">Gen</span>
                    <span className="text-yellow-400">-Z</span>
                  </h1>
                  <p className="text-[10px] text-gray-500 tracking-widest uppercase">Empowering Youth</p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.name.toLowerCase();
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => handleNavClick(item.name)}
                    className={`relative px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 group ${
                      isActive
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <Icon />
                    <span>{item.name}</span>
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-yellow-400 rounded-full animate-pulse"></div>
                    )}
                  </a>
                );
              })}
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden lg:block">
              <button className="relative px-6 py-3 rounded-xl font-bold text-sm overflow-hidden group">
                <div className="absolute inset-0 bg-linear-to-r from-yellow-400 via-orange-500 to-pink-500 opacity-100"></div>
                <div className="absolute inset-0 bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative flex items-center gap-2 text-black group-hover:text-white transition-colors duration-300">
                  <SparkleIcon />
                  Get Started
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-11 h-11 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300 active:scale-95"
              aria-label="Toggle menu"
            >
              <div className="text-white">
                {isOpen ? <XIcon /> : <MenuIcon />}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 top-20 bg-black/95 backdrop-blur-2xl transition-all duration-500 ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="container mx-auto px-6 py-8">
            <div className="space-y-3">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.name.toLowerCase();
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => handleNavClick(item.name)}
                    className={`flex items-center gap-4 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-blue-600 text-white shadow-2xl shadow-blue-500/30 scale-105"
                        : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
                    }`}
                    style={{
                      animation: isOpen ? `slideUp 0.4s ease-out ${index * 0.1}s both` : "none",
                    }}
                  >
                    <div className={`p-2 rounded-lg ${isActive ? "bg-white/20" : "bg-white/5"}`}>
                      <Icon />
                    </div>
                    <span>{item.name}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    )}
                  </a>
                );
              })}
            </div>

            {/* Mobile CTA */}
            <button className="w-full mt-8 px-6 py-4 rounded-2xl font-bold text-black bg-linear-to-r from-yellow-400 via-orange-500 to-pink-500 hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95">
              <SparkleIcon />
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}

export default Header;