// Anggap Anda mengimpor ikon dari library seperti 'lucide-react' atau 'heroicons/react'
// Misalnya: import { Instagram, Youtube, Linkedin } from 'lucide-react';
// Saya akan menggunakan placeholder SVG di sini.

const Footer = () => {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="bg-black text-white pt-12 pb-8 border-t border-purple-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          
          {/* 1. Branding & Motto */}
          <div className="col-span-2 lg:col-span-2">
            <h3 className="text-2xl font-bold text-white">
              Gen -<span className="text-amber-400">Z</span>
            </h3>
            <p className="mt-4 text-gray-400 max-w-xs">
              "Wujudkan inovasi yang memberikan dampak nyata untuk Indonesia."
            </p>
          </div>

          {/* 2. Navigasi Cepat */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-800">Navigasi</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition">Beranda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition">Tentang Kami</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition">Program</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition">Blog</a></li>
            </ul>
          </div>

          {/* 3. Sumber Daya */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-800">Sumber Daya</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition">Karir</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition">Terms & Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition">Dukungan</a></li>
            </ul>
          </div>

          {/* 4. Kontak & Sosial Media */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-blue-800">Hubungi Kami</h4>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">Email: info@youthdisrupt.id</p>
              <p className="text-gray-400 text-sm">Telepon: +62 812 XXXX</p>
            </div>
            
            {/* Sosial Media Icons */}
            <div className="flex space-x-4 mt-4">
              {/* <SocialIcon name="Instagram" />
              <SocialIcon name="YouTube" />
              <SocialIcon name="LinkedIn" /> */}
            </div>
          </div>
          
        </div>

        {/* Copyright Bar (Di bawah, responsif) */}
        <div className="mt-10 text-center text-sm text-gray-500 pt-6 border-t border-blue-800">
          © {currentYear} YouthDisrupt. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;