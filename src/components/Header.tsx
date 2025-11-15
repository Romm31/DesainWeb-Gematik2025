import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#000000] text-white shadow-lg py-5">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">Gen- <span className="text-amber-400">Z</span></h1>

        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li><a href="#" className="hover:text-blue-800 transition duration-300">Home</a></li>
          <li><a href="#artikel" className="hover:text-blue-800 transition duration-300">Artikel</a></li>
          <li><a href="#" className="hover:text-blue-800 transition duration-300">Profil</a></li>
          <li><a href="#" className="hover:text-blue-800 transition duration-300">Contact</a></li>
        </ul>

        {/* Tombol menu (mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? (
            // Icon X
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Icon Hamburger
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="space-y-2 font-medium">
            <li><a href="#" className="block py-2 hover:text-yellow-300">Home</a></li>
            <li><a href="#" className="block py-2 hover:text-yellow-300">Artikel</a></li>
            <li><a href="#" className="block py-2 hover:text-yellow-300">Profil</a></li>
            <li><a href="#" className="block py-2 hover:text-yellow-300">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Header;
