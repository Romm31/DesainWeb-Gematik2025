
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import React from 'react';

const pgr = [
  {
    id: 1,
    title: "Digital Skill Training",
    excerpt: "Digital Skill Training Belajar dasar pemasaran digital, desain grafis, dan teknologi terkini untuk meningkatkan daya saing di era digital.",
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
    image: img3,
  },
];

const Program: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-5xl font-bold text-center mb-5 text-black">Program Kami</h2>
      <h3 className=" w-2xl text-xl text-center mb-12 text-stone-400 mx-auto">Gen Z hadir untuk memberdayakan generasi muda Indonesia menghadapi era disrupsi dengan percaya diri dan keterampilan yang tepat.</h3>
      <div className="grid md:grid-cols-2 gap-8">
        {pgr.map((article) => (
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

export default Program;
