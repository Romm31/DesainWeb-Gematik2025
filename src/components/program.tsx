import { useRef } from 'react';

// Placeholder images - replace with your actual imports
const img1 = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop";
const img2 = "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop";
const img3 = "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop";

// SVG Icons
const ChevronLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6"/>
  </svg>
);

const ChevronRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

const pgr = [
  {
    id: 1,
    title: "Digital Skill Training",
    excerpt: "Belajar dasar pemasaran digital, desain grafis, dan teknologi terkini untuk meningkatkan daya saing di era digital.",
    image: img1,
  },
  {
    id: 2,
    title: "Personal Branding",
    excerpt: "Membangun citra diri profesional di media sosial dan platform digital untuk membuka peluang karir yang lebih luas.",
    image: img2,
  },
  {
    id: 3,
    title: "Startup Innovation",
    excerpt: "Menumbuhkan ide bisnis berbasis solusi nyata dengan mentoring dari praktisi dan akses ke ekosistem startup.",
    image: img3,
  },
  {
    id: 4,
    title: "Community Empowerment",
    excerpt: "Kolaborasi untuk proyek sosial yang memberikan dampak positif bagi masyarakat dan lingkungan sekitar.",
    image: img2,
  },
];

const Program = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative max-w-7xl mx-auto py-20 px-4 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12 ">
        <h2 className="text-5xl  font-bold mb-6 text-gray-900">
          Our Programs
        </h2>
        <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
          Gen Z is here to empower Indonesia's younger generation to face the era of disruption with confidence and the right skills.
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-end gap-3 mb-6 px-2">
        <button
          onClick={() => scroll('left')}
          className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 group"
          aria-label="Scroll left"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => scroll('right')}
          className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 group"
          aria-label="Scroll right"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {pgr.map((program, index) => (
          <div
            key={program.id}
            className="flex-none w-[340px] md:w-[380px] snap-start group"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-sm font-semibold text-gray-800">
                    0{index + 1}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {program.excerpt}
                </p>
                
                {/* Action Link */}
                <div className="mt-5 flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                  <span>Pelajari lebih lanjut</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Indicator Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {pgr.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-gray-300 transition-all"
          />
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Program;