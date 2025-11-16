const Footer = () => {
  const currentYear = new Date().getFullYear();

  // SVG Icons
  const InstagramIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );

  const YoutubeIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );

  const LinkedinIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Artikel", href: "#artikel" },
    { name: "Profil", href: "#profil" },
    { name: "Contact", href: "#contact" },
  ];

  const resources = [
    { name: "Karir", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Terms & Privacy", href: "#" },
    { name: "Dukungan", href: "#" },
  ];

  const socialLinks = [
    { icon: InstagramIcon, href: "#", label: "Instagram" },
    { icon: YoutubeIcon, href: "#", label: "YouTube" },
    { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  ];

  return (
  
    <footer className="relative bg-black text-white pt-16 pb-8 border-t border-linear-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* 1. Branding & Motto */}
          <div className="lg:col-span-1">
            <div className="relative group inline-block">
              <div className="absolute -inset-2 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
              <div className="relative flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-600 via-blue-400 to-blue-600 backdrop-blur-xl border-2 border-white/20 flex items-center justify-center">
                  <span className="text-xl font-black text-transparent bg-clip-text bg-linear-to-br from-white via-blue-200 to-purple-300">Z</span>
                </div>
                <h3 className="text-2xl font-black">
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-blue-400 to-blue-400">Gen</span>
                  <span className="text-transparent bg-clip-text bg-blue-400">-Z</span>
                </h3>
              </div>
            </div>
              <p className="mt-2 text-[10px] text-gray-500 tracking-widest uppercase font-semibold">
              Empowering Youth
            </p>
            <p className="mt-6 text-gray-400 text-sm leading-relaxed">
              Realize innovations that have a real impact on Indonesia.
            </p>
          
          </div>

          {/* 2. Navigasi */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-blue-400 uppercase tracking-wider">
              Navigasi
            </h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-linear-to-r from-blue-400 to-purple-400 group-hover:w-4 transition-all duration-300"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Sumber Daya */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-blue-400 uppercase tracking-wider">
              Sumber Daya
            </h4>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-linear-to-r from-purple-400 to-pink-400 group-hover:w-4 transition-all duration-300"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Kontak & Sosial Media */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-blue-400 uppercase tracking-wider">
              Hubungi Kami
            </h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 group">
                <div className="mt-1 p-1.5 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:uti@teknokrat.ac.id" className="text-gray-400 hover:text-white text-sm transition-colors">
                  uti@teknokrat.ac.id
                </a>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="mt-1 p-1.5 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-gray-400 text-sm">+62 812 3456 789</span>
              </div>
            </div>
            
            {/* Sosial Media Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="relative group p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative text-gray-400 group-hover:text-white transition-colors">
                      <Icon />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          
        </div>

        {/* Copyright Bar */}
        <div className="relative pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {currentYear} <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400 font-semibold">Gen-Z</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-gray-500">
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
              <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;