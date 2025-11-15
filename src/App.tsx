import "./index.css";
import Slider from "./components/Slider";
import Header from "./components/Header";
import TextType from "./components/Text";
import About from "./components/tentang";
import Program from "./components/program";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Model3D from "./components/Model3d";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Section - ULTRA CLEAN & MODERN */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-black">
        
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <Slider />
          {/* Dark Overlay - Cleaner */}
          <div className="absolute inset-0 bg-black/70"></div>
          
          {/* Minimal Gradient Accents */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full container mx-auto px-6 lg:px-12 xl:px-20 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left Content - 7 columns */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Small Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                <span className="text-sm text-white/80 font-medium">Generation Z Platform</span>
              </div>

              {/* Hero Title - MASSIVE & CLEAN */}
              <div className="space-y-4">
                <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9]">
                  <TextType
                    text={["Code.", "Build.", "Create."]}
                    typingSpeed={100}
                    pauseDuration={2000}
                    showCursor={true}
                    cursorCharacter="_"
                  />
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white/90 leading-tight max-w-3xl">
                  Empowering Youth in the Era of{" "}
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-pink-400">
                      Disruption
                    </span>
                    <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                      <path d="M0 4 Q50 0, 100 4 T200 4" stroke="url(#grad)" strokeWidth="3" fill="none"/>
                      <defs>
                        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#60A5FA" />
                          <stop offset="50%" stopColor="#A78BFA" />
                          <stop offset="100%" stopColor="#F472B6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </h1>
              </div>

              {/* Description - Clean & Minimal */}
              <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
                Membangun keterampilan masa depan dan menciptakan inovasi yang memberikan dampak nyata untuk Indonesia.
              </p>

              {/* CTA Buttons - Minimal & Elegant */}
              <div className="flex flex-wrap gap-4">
                <button className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-white/20">
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
                
                <button className="px-8 py-4 border-2 border-white/20 text-white font-bold rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all">
                  Learn More
                </button>
              </div>

              {/* Stats - Minimal */}
              <div className="flex items-center gap-12 pt-8">
                <div>
                  <div className="text-4xl font-black text-white">500+</div>
                  <div className="text-sm text-white/50 mt-1">Active Members</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white">50+</div>
                  <div className="text-sm text-white/50 mt-1">Programs</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white">10+</div>
                  <div className="text-sm text-white/50 mt-1">Partners</div>
                </div>
              </div>
            </div>

            {/* Right Content - 3D Model - 5 columns */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative w-full h-[600px]">
                {/* Subtle Glow */}
                <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-3xl"></div>
                
                {/* 3D Canvas */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10">
                  <Canvas camera={{ position: [2, 2, 5], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <spotLight position={[-10, 10, 10]} angle={0.3} intensity={0.5} />
                    
                    <Model3D />
                    
                    <OrbitControls
                      enableZoom={false}
                      autoRotate
                      autoRotateSpeed={1}
                      maxPolarAngle={Math.PI / 2}
                      minPolarAngle={Math.PI / 3.5}
                      enablePan={false}
                    />
                    <Environment preset="city" />
                  </Canvas>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll Indicator - Minimal */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
          <span className="text-xs text-white/40 font-medium">SCROLL</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative bg-black">
        <About />
      </section>

      {/* Program Section */}
      <section id="program" className="relative bg-white">
        <Program />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;