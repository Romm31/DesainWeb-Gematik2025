
import React from 'react';

const article = [
  {
    id: 1,
    title: "Sejarah Kopi Nusantara",
    excerpt: "Kopi telah menjadi bagian dari budaya Nusantara sejak abad ke-17...",
    image: "https://source.unsplash.com/400x300/?coffee-beans",
  },
  {
    id: 2,
    title: "Tips Menyeduh Kopi Arabika",
    excerpt: "Pelajari cara menyeduh kopi arabika agar rasanya maksimal...",
    image: "https://source.unsplash.com/400x300/?coffee-cup",
  },
  {
    id: 3,
    title: "Manfaat Kopi untuk Kesehatan",
    excerpt: "Kopi ternyata memiliki banyak manfaat untuk tubuh jika dikonsumsi secukupnya...",
    image: "https://source.unsplash.com/400x300/?coffee-health",
  },
];

const Artikels: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-5xl font-bold text-center mb-12 text-black">Artikel</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {article.map((article) => (
          <div
            key={article.id}
            className="bg- rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-700 text-sm">{article.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Artikels;
