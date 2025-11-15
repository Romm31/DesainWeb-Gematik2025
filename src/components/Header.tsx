import { useState, useEffect } from "react";

// SVG Icons
const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const XIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
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

const RocketIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
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
        className={`fixed w-full top-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-black/95 backdrop-blur-3xl shadow-2xl shadow-purple-900/20 border-b border-linear-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30"
            : "bg-linear-to-b from-black/80 to-transparent backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="flex justify-between items-center h-24">
            
            {/* Logo Ultra Premium */}
            <a href="#home" className="relative group cursor-pointer">
              {/* Glow effect background */}
              <div className="absolute -inset-3 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-700"></div>
              
              <div className="relative flex items-center gap-3">
                {/* Icon Container */}
                <div className="relative">
                  <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl blur-md opacity-50 group-hover:opacity-70 transition-opacity"></div>
                  <div className="relative w-12 h-12 rounded-2xl bg-linear-to-br from-blue-600/40 to-purple-600/40 backdrop-blur-xl border-2 border-white/20 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <span className="text-2xl font-black text-transparent bg-clip-text bg-linear-to-br from-white via-blue-200 to-purple-300">Z</span>
                  </div>
                </div>
                
                {/* Text Logo */}
                <div className="flex flex-col">
                  <h1 className="text-2xl font-black tracking-tight leading-none">
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 group-hover:from-blue-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-500">Gen</span>
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-orange-500 group-hover:from-yellow-300 group-hover:to-orange-400 transition-all duration-500">-Z</span>
                  </h1>
                  <p className="text-[9px] text-gray-500 tracking-[0.2em] uppercase font-semibold group-hover:text-gray-400 transition-colors">Empowering Youth</p>
                </div>
              </div>
            </a>

            {/* Desktop Navigation - Ultra Modern */}
            <div className="hidden lg:flex items-center gap-1.5 px-2 py-2 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-lg">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.name.toLowerCase();
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => handleNavClick(item.name)}
                    className={`relative px-5 py-3 rounded-xl font-bold text-sm transition-all duration-500 flex items-center gap-2.5 group overflow-hidden ${
                      isActive
                        ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-xl shadow-blue-500/40"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {/* Background hover effect */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-linear-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    )}
                    
                    {/* Icon with gradient on hover */}
                    <div className={`relative z-10 ${!isActive && 'group-hover:text-blue-400'} transition-colors duration-300`}>
                      <Icon />
                    </div>
                    
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <>
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/50"></div>
                        <div className="absolute inset-0 bg-linear-to-r from-blue-400/20 to-purple-400/20 blur-xl"></div>
                      </>
                    )}
                  </a>
                );
              })}
            </div>

            {/* CTA Button - Premium Gradient */}
            <div className="hidden lg:block">
              <button className="relative group px-7 py-3.5 rounded-xl font-black text-sm overflow-hidden shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-500 hover:scale-105">
                {/* Animated gradient backgrounds */}
                <div className="absolute inset-0 bg-linear-to-r from-yellow-400 via-orange-500 to-pink-500"></div>
                <div className="absolute inset-0 bg-linear-to-r from-pink-500 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/30 to-transparent"></div>
                
                <span className="relative flex items-center gap-2 text-black group-hover:text-white transition-colors duration-300">
                  <RocketIcon />
                  Get Started
                </span>
              </button>
            </div>

            {/* Mobile Menu Button - Elegant */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-12 h-12 rounded-xl bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:from-white/15 hover:to-white/10 transition-all duration-300 active:scale-90 shadow-lg group"
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-white relative z-10">
                {isOpen ? <XIcon /> : <MenuIcon />}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay - Ultra Smooth */}
        <div
          className={`lg:hidden fixed inset-0 top-24 bg-linear-to-b from-black/98 via-black/95 to-black/98 backdrop-blur-3xl transition-all duration-700 ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="container mx-auto px-6 py-10 h-full flex flex-col">
            <div className="space-y-3 flex-1">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.name.toLowerCase();
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => handleNavClick(item.name)}
                    className={`flex items-center gap-4 px-6 py-5 rounded-2xl font-bold text-base transition-all duration-500 group ${
                      isActive
                        ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-500/40 scale-[1.02]"
                        : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20"
                    }`}
                    style={{
                      animation: isOpen ? `slideUpFade 0.5s ease-out ${index * 0.1}s both` : "none",
                    }}
                  >
                    <div className={`p-2.5 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? "bg-white/20 shadow-lg" 
                        : "bg-white/5 group-hover:bg-white/10"
                    }`}>
                      <Icon />
                    </div>
                    <span className="flex-1">{item.name}</span>
                    {isActive && (
                      <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/50"></div>
                    )}
                  </a>
                );
              })}
            </div>

            {/* Mobile CTA - Premium */}
            <button className="relative group w-full mt-6 px-6 py-5 rounded-2xl font-black text-base overflow-hidden shadow-2xl hover:shadow-orange-500/40 transition-all duration-500 active:scale-95">
              <div className="absolute inset-0 bg-linear-to-r from-yellow-400 via-orange-500 to-pink-500"></div>
              <div className="absolute inset-0 bg-linear-to-r from-pink-500 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/30 to-transparent"></div>
              <span className="relative flex items-center justify-center gap-2.5 text-black group-hover:text-white transition-colors duration-300">
                <RocketIcon />
                Get Started
              </span>
            </button>
          </div>
        </div>
      </nav>

      <style>{`
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(40px);
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