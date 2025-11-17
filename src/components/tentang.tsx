import React from 'react';

const aboutt = [
  {
    id: 1,
    title: "Mendorong Inovasi",
    excerpt:
      "Menginspirasi anak muda untuk menciptakan solusi kreatif bagi tantangan masa depan.",
    image:
      "https://images.unsplash.com/photo-1581090698407-7d93959da202?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGlub3ZhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    title: "Keterampilan Digital",
    excerpt:
      "Menumbuhkan kemampuan berpikir kritis dan digital skill yang relevan dengan industri.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Inspirasi Generasi",
    excerpt:
      "Membagikan kisah sukses dan pembelajaran dari generasi muda yang berdampak.",
    image:
      "https://images.unsplash.com/photo-1758876021444-3885d0a2539f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const About: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-5xl font-bold text-center mb-5 text-black">About US</h2>
      <h3 className="w-2xl text-xl text-center mb-12 text-gray-500 mx-auto">
        Gen Z hadir untuk memberdayakan generasi muda Indonesia menghadapi era
        disrupsi dengan percaya diri dan keterampilan yang tepat.
      </h3>

      <div className="grid md:grid-cols-3 gap-8">
        {aboutt.map((article) => (
          <div
            key={article.id}
            className="rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition"
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

      <h1 className="py-5 bg-linear-to-r from-blue-600 to-blue-800 text-white font-medium rounded-full shadow-sm hover:bg-blue-400 transition w-2xl mt-10 text-center mx-auto">
        Visi: Menjadi katalis transformasi digital generasi muda Indonesia
      </h1>
    </section>
  );
};

export default About;
