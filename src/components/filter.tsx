import React, { useState } from 'react';
import { Users, Building2, Mail, Linkedin, Twitter, Square } from 'lucide-react';
import CountUp from 'react-countup'; // Pastikan sudah di-install

interface Stat {
  label: string;
  value: string;
}

interface Value {
  title: string;
  desc: string;
}

interface CompanyProfile {
  name: string;
  founded: string;
  description: string;
  mission: string;
  vision: string;
  values: Value[];
  stats: Stat[];
}

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
  email: string;
  linkedin: string;
  twitter: string;
}

type TabType = 'company' | 'team';

const AboutUs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('company');

  const companyProfile: CompanyProfile = {
    name: "Gen-Z",
    founded: "2018",
    description: "Kami adalah perusahaan teknologi terkemuka yang berfokus pada inovasi digital dan solusi bisnis modern. Dengan pengalaman lebih dari 5 tahun, kami telah membantu ratusan klien mencapai transformasi digital mereka.",
    mission: "Memberdayakan bisnis melalui teknologi inovatif dan solusi digital yang berkelanjutan.",
    vision: "Menjadi pemimpin teknologi terpercaya di Asia Tenggara yang menghadirkan dampak positif bagi masyarakat.",
    values: [
      { title: "Inovasi", desc: "Selalu mencari cara baru dan lebih baik" },
      { title: "Integritas", desc: "Berkomitmen pada kejujuran dan transparansi" },
      { title: "Kolaborasi", desc: "Bekerja sama untuk hasil terbaik" },
      { title: "Keunggulan", desc: "Memberikan kualitas tertinggi dalam setiap hal" }
    ],
    stats: [
      { label: "Klien Aktif", value: "500+" },
      { label: "Proyek Selesai", value: "1000+" }, // Bisa juga "1,000+" dan akan tetap aman
      { label: "Tim Profesional", value: "150+" },
      { label: "Negara", value: "15+" }
    ]
};
    
  const teamMembers: TeamMember[] = [
    // ... (Data teamMembers Anda tidak perlu diubah) ...
    {
      id: 1,
      name: "Budi Santoso",
      position: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Visioner dengan 15+ tahun pengalaman di industri teknologi",
      email: "budi@techvision.id",
      linkedin: "#",
      twitter: "#"
    },
    {
      id: 2,
      name: "Siti Nurhaliza",
      position: "CTO",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "Expert dalam AI dan Machine Learning dengan berbagai penghargaan internasional",
      email: "siti@techvision.id",
      linkedin: "#",
      twitter: "#"
    },
    {
      id: 3,
      name: "Ahmad Fauzi",
      position: "Head of Design",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      bio: "Designer kreatif dengan passion untuk user experience yang luar biasa",
      email: "ahmad@techvision.id",
      linkedin: "#",
      twitter: "#"
    },
    {
      id: 4,
      name: "Dewi Lestari",
      position: "Head of Marketing",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      bio: "Strategist handal dengan track record membangun brand awareness",
      email: "dewi@techvision.id",
      linkedin: "#",
      twitter: "#"
    },
    {
      id: 5,
      name: "Reza Pratama",
      position: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Full-stack developer dengan expertise di berbagai teknologi modern",
      email: "reza@techvision.id",
      linkedin: "#",
      twitter: "#"
    },
    {
      id: 6,
      name: "Maya Safitri",
      position: "HR Manager",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      bio: "Passionate tentang pengembangan talenta dan budaya perusahaan",
      email: "maya@techvision.id",
      linkedin: "#",
      twitter: "#"
    }
  ];

  return (
  	// Latar belakang gradien utama ada di App.tsx, jadi di sini polos
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-slide-down">
            About US
          </h1>
          <p className="text-xl text-purple-200 animate-slide-up">
            Kenali lebih dekat siapa kami dan apa yang kami lakukan
          </p>
        </div>

        {/* Tab Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-full p-2 inline-flex gap-2">
            <button
              onClick={() => setActiveTab('company')}
              className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'company'
						    // PERBAIKAN TYPO: bg-gradient-to-r
                  ? 'bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 text-white shadow-lg scale-105'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Building2 size={20} />
              Profil Perusahaan
            </button>
            <button
              onClick={() => setActiveTab('team')}
              className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'team'
						    // PERBAIKAN TYPO: bg-gradient-to-r
                  ? 'bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 text-white shadow-lg scale-105'
                  : 'text-white hover:bg-white/10'
            	}`}
            >
              <Users size={20} />
            	  Tim Kami
            </button>
          </div>
        </div>

        {/* Company Profile Content */}
        {activeTab === 'company' && (
          <div className="space-y-12 animate-fade-in">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {companyProfile.stats.map((stat: Stat, idx: number) => {
                
                // PERBAIKAN LOGIKA NaN:
                // 1. Ubah nilai (yg mungkin null/undefined) jadi string
                const valueString = String(stat.value || "");
                // 2. Hapus semua karakter non-angka (seperti "+", ",", " ")
                const digitsOnly = valueString.replace(/\D/g, '');
                // 3. Ubah ke angka. Jika gagal (hasilnya NaN), gunakan 0
                const numericValue = parseInt(digitsOnly) || 0;
                // 4. Cek suffix
                const suffix = stat.value.endsWith('+') ? '+' : '';

                return (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center transform hover:scale-110 transition-all duration-300 hover:bg-white/20 animate-slide-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                    {/* PERBAIKAN TYPO: bg-gradient-to-r */}
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 mb-2">
                    {/* IMPLEMENTASI COUNTUP */}
                    <CountUp
                      end={numericValue} // Sekarang aman dari NaN
                      duration={2.5}
                      separator=","
                      suffix={suffix}
                      enableScrollSpy={true} 
                      scrollSpyOnce={true} 
                    />
                  </div>
                  <div className="text-purple-200">{stat.label}</div>
                </div>
                );
            	})}
            </div>

            {/* Company Info */}
            <div className="w-full bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 animate-slide-up ">
            	<div className="mb-8">
            	  <h2 className="text-3xl font-bold text-white mb-4">{companyProfile.name}</h2>
            	  <p className="text-lg text-purple-100 leading-relaxed">
            	  	{companyProfile.description}
            	  </p>
          	</div>

          	<div className="grid md:grid-cols-2 gap-8 mb-8">
				  {/* PERBAIKAN TYPO: bg-gradient-to-r */}
            	  <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
            	  	<h3 className="text-2xl font-bold text-white mb-3"> Misi</h3>
            	  	<p className="text-purple-100">{companyProfile.mission}</p>
          	  </div>
				  {/* PERBAIKAN TYPO: bg-gradient-to-r */}
            	  <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
            	  	<h3 className="text-2xl font-bold text-white mb-3">Visi</h3>
            	  	<p className="text-purple-100">{companyProfile.vision}</p>
          	  </div>
          	</div>

          	{/* Values */}
          	<div>
          	  <h3 className="text-2xl font-bold text-white mb-6"> Nilai-Nilai Kami</h3>
          	  <div className="grid md:grid-cols-2 gap-4">
          	  	{companyProfile.values.map((value: Value, idx: number) => (
          	  	  <div
          	  	  	key={idx}
          	  	  	className="bg-white/5 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 transform hover:translate-x-2"
          	  	  >
          	  	  	<h4 className="text-xl font-semibold text-blue-400 mb-2">
          	  	  	  {value.title}
          	  	  	</h4>
  	  	  	  	<p className="text-purple-100">{value.desc}</p>
          	  	  </div>
          	  	))}
          	  </div>
        	  </div>
        	</div>
        	</div>
        )}

        {/* Team Content */}
        {activeTab === 'team' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          	{teamMembers.map((member: TeamMember, idx: number) => (
          	  <div
  	  	  	key={member.id}
  	  	  	className="group bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-500 animate-slide-up"
  	  	  	style={{ animationDelay: `${idx * 100}ms` }}
  	  	  >
  	  	  	{/* Image Container */}
  	  	  	<div className="relative overflow-hidden h-64">
  	  	  	  <img
  	  	  	  	src={member.image}
  	  	  	  	alt={member.name}
  	  	  	  	className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
  	  	  	  />
  	  	  	  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  	  	  	  
  	  	  	  {/* Social Icons */}
  	  	  	  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
  	  	  	  	<a
  	  	  	  	  href={`mailto:${member.email}`}
  	  	  	  	  className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
  	  	  	  	>
  	  	  	  	  <Mail size={18} className="text-white" />
  	  	  	  	</a>
  	  	  	  	<a
  	  	  	  	  href={member.linkedin}
  	  	  	  	  className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
  	  	  	  	>
  	  	  	  	  <Linkedin size={18} className="text-white" />
  	  	  	  	</a>
  	  	  	  	<a
  	  	  	  	  href={member.twitter}
  	  	  	  	  className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
  	  	  	  	>
  	  	  	  	  <Twitter size={18} className="text-white" />
  	  	  	  	</a>
  	  	  	  </div>
  	  	  	</div>

  	  	  	{/* Card Content */}
  	  	  	<div className="p-6">
				    {/* PERBAIKAN TEMA: Ganti dari ungu/pink ke biru */}
  	  	  	  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-400 transition-all duration-300">
  	  	  	  	{member.name}
  	  	  	  </h3>
  	  	  	  <p className="text-purple-300 font-semibold mb-3">{member.position}</p>
  	  	  	  <p className="text-purple-100 text-sm leading-relaxed">{member.bio}</p>
  	  	  	</div>

  	  	  	{/* Decorative Element */}
				    {/* PERBAIKAN TEMA: Ganti dari ungu/pink ke biru */}
  	  	  	<div className="h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
  	  	  </div>
  	  	  ))}
  	  	</div>
  	  )}
  	</div>

  	<style>{`
  		@keyframes fade-in {
  		  from { opacity: 0; }
  		  to { opacity: 1; }
  		}
  		@keyframes slide-down {
  		  from { opacity: 0; transform: translateY(-20px); }
  		  to { opacity: 1; transform: translateY(0); }
  		}
  		@keyframes slide-up {
  		  from { opacity: 0; transform: translateY(20px); }
  		  to { opacity: 1; transform: translateY(0); }
  		}
  		.animate-fade-in {
  		  animation: fade-in 0.6s ease-out;
  		}
  		.animate-slide-down {
  		  animation: slide-down 0.8s ease-out;
  		}
  		.animate-slide-up {
  		  animation: slide-up 0.8s ease-out;
  		}
  	`}</style>
  </div>
  );
};

export default AboutUs;