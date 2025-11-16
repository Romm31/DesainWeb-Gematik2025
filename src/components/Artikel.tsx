import React from 'react';

const articles = [
  {
    id: 1,
    title: "Sharpening Young People's Digital Skills",
    excerpt: "Generasi muda harus menguasai keterampilan digital agar mampu bersaing dan berinovasi di era disrupsi teknologi.",
    image: "https://plus.unsplash.com/premium_photo-1681505713407-bc50ef2c2b38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2hhcnBlbmluZyUyMFlvdW5nJTIwUGVvcGxlJ3MlMjBEaWdpdGFsJTIwU2tpbGxzfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    title: "Creativity and Innovation for the Future",
    excerpt: "Kemampuan berpikir kreatif dan inovatif menjadi kunci sukses anak muda menghadapi perubahan cepat di era digital.",
    image: "https://plus.unsplash.com/premium_photo-1695807489199-4ba908b63826?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8S3JlYXRpdml0YXMlMjBkYW4lMjBJbm92YXNpJTIwdW50dWslMjBNYXNhJTIwRGVwYW58ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    title: "The Importance of Emotional Intelligence",
    excerpt: "Selain keterampilan teknis, kecerdasan emosional membantu generasi muda menghadapi tantangan sosial dan profesional di era disrupsi.",
    image: "https://media.istockphoto.com/id/2164574681/photo/wooden-blocks-with-the-letters-iq-eq-and-aq-representing-intelligence-quotient-emotional.webp?a=1&b=1&s=612x612&w=0&k=20&c=-CPNU_5GLplxZ-KiRKuj4k06hRcEW3Rx6WuDJijxez0=",
  },
  {
    id: 4,
    title: "Entrepreneurship di Era Digital",
    excerpt: "Menjadi wirausaha muda dengan memanfaatkan teknologi dan platform digital adalah salah satu cara memberdayakan diri dan masyarakat.",
    image: "https://media.istockphoto.com/id/2163952011/photo/beautiful-millennial-businesswoman-using-ai-on-smart-phone-and-laptop-for-work.webp?a=1&b=1&s=612x612&w=0&k=20&c=fJWNv4CsNQKDn7FYztTZYCj73ImZ7AEyS0TMM1WpBLk= ",
  },
];

const Artikels: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-5xl font-bold text-center mb-5  text-black">Artikel</h2>
         <h3 className=" w-2xl text-xl text-center mb-16 text-gray-500 mx-auto">
         Empowering youth in this era is not just about academic excellence; it’s about cultivating a set of holistic competencies:
        </h3>
      <div className="grid md:grid-cols-2 gap-8">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover   "
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
