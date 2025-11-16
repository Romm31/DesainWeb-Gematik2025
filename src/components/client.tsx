import React from "react";

// Contoh data client
const clients = [
  {
    id: 1,
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    id: 2,
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    id: 3,
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    id: 4,
    name: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  },
  {
    id: 5,
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
];

const ClientSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-12">
          Our Clients
        </h2>
        <p className="text-gray-600 mb-10">
          Kami bangga bekerja sama dengan berbagai perusahaan ternama.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
