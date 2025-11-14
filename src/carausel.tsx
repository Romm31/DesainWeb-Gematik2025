import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=80",
    caption: "Rasakan aroma kopi yang memikat setiap pagi",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1510626176961-4b37d0af1a2c?auto=format&fit=crop&w=1600&q=80",
    caption: "Dari biji pilihan, diseduh dengan sepenuh hati",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1600&q=80",
    caption: "Tempat terbaik untuk berbagi cerita dan kopi",
  },
];

function Carousel() {
  const [current, setCurrent] = useState(0);

  // Ganti slide otomatis setiap 4 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Ganti manual
  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full h-[500px] relative">
            <img
              src={slide.image}
              alt={slide.caption}
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 drop-shadow-lg">
                {slide.caption}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Tombol kontrol kiri-kanan */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-[#4b2e05]/70 text-white p-2 rounded-full hover:bg-[#3b2304]"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-[#4b2e05]/70 text-white p-2 rounded-full hover:bg-[#3b2304]"
      >
        ❯
      </button>
    </div>
  );
}

export default Carousel;
