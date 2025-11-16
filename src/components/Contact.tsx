import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe, MessageCircle } from 'lucide-react';
import * as THREE from 'three';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  // 3D Animation Setup
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvasRef.current.clientWidth / canvasRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    canvasRef.current.appendChild(renderer.domElement);

    // Create floating spheres
    const spheres: THREE.Mesh[] = [];
    const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    
    for (let i = 0; i < 15; i++) {
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color().setHSL(0.5 + Math.random() * 0.2, 0.8, 0.6),
        transparent: true,
        opacity: 0.6,
        shininess: 100
      });
      
      const sphere = new THREE.Mesh(sphereGeometry, material);
      sphere.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      sphere.userData.velocity = {
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02
      };
      spheres.push(sphere);
      scene.add(sphere);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x3b82f6, 2, 100);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x06b6d4, 2, 100);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    camera.position.z = 15;

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      spheres.forEach(sphere => {
        sphere.position.x += sphere.userData.velocity.x;
        sphere.position.y += sphere.userData.velocity.y;
        sphere.position.z += sphere.userData.velocity.z;

        // Boundary check
        ['x', 'y', 'z'].forEach(axis => {
          if (Math.abs(sphere.position[axis as 'x' | 'y' | 'z']) > 10) {
            sphere.userData.velocity[axis] *= -1;
          }
        });

        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
      });

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!canvasRef.current) return;
      camera.aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (canvasRef.current) {
        canvasRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nama wajib diisi';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subjek wajib diisi';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Pesan wajib diisi';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Pesan minimal 10 karakter';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'contact@techvision.id',
      link: 'mailto:contact@techvision.id'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telepon',
      content: '+62 812-3456-7890',
      link: 'tel:+6281234567890'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Alamat',
      content: 'Jl. Sudirman No. 123, Jakarta',
      link: 'https://maps.google.com'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Jam Kerja',
      content: 'Senin - Jumat, 09:00 - 17:00',
      link: null
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-950 via-cyan-900 to-blue-950">
      {/* 3D Background */}
      <div ref={canvasRef} className="absolute inset-0 z-0" />
      
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <MessageCircle className="w-16 h-16 text-cyan-400 animate-bounce" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-slide-down">
            Hubungi Kami
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto animate-slide-up">
            Punya pertanyaan atau ingin berkolaborasi? Kami siap membantu Anda!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-8 animate-slide-right">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Globe className="w-8 h-8 text-cyan-400" />
                Informasi Kontak
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, idx) => (
                  <div
                    key={idx}
                    className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:translate-x-2"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-cyan-300 font-semibold mb-1">{info.title}</h3>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-white hover:text-cyan-400 transition-colors duration-300"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-white">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Ikuti Kami</h3>
              <div className="flex gap-4">
                {['LinkedIn', 'Twitter', 'Instagram', 'Facebook'].map((social, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-300 text-white font-semibold"
                  >
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-left">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Kirim Pesan</h2>
              
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-300 animate-bounce">
                  ✓ Pesan berhasil dikirim! Kami akan segera menghubungi Anda.
                </div>
              )}

              <div className="space-y-6">
                <div className="group">
                  <label className="block text-cyan-300 font-semibold mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300"
                    placeholder="Masukkan nama Anda"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>

                <div className="group">
                  <label className="block text-cyan-300 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300"
                    placeholder="email@example.com"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>

                <div className="group">
                  <label className="block text-cyan-300 font-semibold mb-2">Subjek</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300"
                    placeholder="Tentang apa pesan Anda?"
                  />
                  {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                </div>

                <div className="group">
                  <label className="block text-cyan-300 font-semibold mb-2">Pesan</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300 resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-right {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-left {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-down {
          animation: slide-down 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }

        .animate-slide-right {
          animation: slide-right 1s ease-out;
        }

        .animate-slide-left {
          animation: slide-left 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;