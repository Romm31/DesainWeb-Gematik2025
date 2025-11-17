import "./index.css";

import Header from "./components/Header";
import Slider from "./components/Slider";
import TextType from "./components/Text";
import Program from "./components/program";
import Footer from "./components/Footer";
import CircleTransition from "./components/transisi";
import Model3D from "./components/Model3d";
import Artikels from "./components/Artikel";
import Squares from "./components/Squares";
import ContactPage from "./components/Contact";
import LogoLoop from "./components/LogoLoop";
import AboutUs from "./components/filter";
import Spline from '@splinetool/react-spline';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";





// Alternative with image sources
const imageLogos = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    alt: "Amazon",
    href: "#",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    alt: "Google",
    href: "#",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    alt: "Microsoft",
    href: "#",
  },
];

function App() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Section (Slider + 3D Model) */}
      <div className="relative w-full h-screen overflow-hidden grid grid-cols-12"id="home">
        {/* Slider Background */}
        <div className="absolute inset-0 z-0">
          <Slider />
        </div>

        {/* Hero Text */}
        <div className="col-span-12 md:col-span-6 z-20 flex flex-col items-start mx-20 justify-center">
          <div className="text-white text-5xl font-bold mb-5">
            <TextType
              text={["Adaptation", "Innovation", "Solutions."]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>

          <h1 className="text-white text-5xl font-bold drop-shadow-xl">
            "Future Forward: Navigating {" "}
            <span className="text-amber-400">Disruption</span>"
          </h1>

          <h2 className="text-white max-w-3xl mt-3">
            Building an Empowered, Innovative, and Adaptable Young Generation Amidst Constant Change.
          </h2>

          <button className="mt-6 px-6 py-3 bg-gradient-to-r bg-blue-600 via-blue-400 to-blue-600 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition">
            Learn More
          </button>
        </div>

        {/* 3D Model Section */}
        <div className="col-span-12 md:col-span-6 z-20 mt-20">
          <Canvas camera={{ position: [1, 3, 3], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            <Model3D />
            <OrbitControls enableZoom autoRotate autoRotateSpeed={0.5} />
            <Environment preset="sunset" />
          </Canvas>
        </div>
      </div>


    <div className="relative w-full min-h-screen overflow-x-hidden bg-black" id="profil">
      
      {/* 2. Lapisan Background (di belakang) */}
      <div className="absolute inset-0 z-0">
        {/* Ini adalah perbaikan typo dari 'inset-' menjadi 'inset-0' */}
        <Squares
          speed={0.1}
          squareSize={40}
          direction="diagonal"
          borderColor="#636363"
          hoverFillColor="#51a2ff"
        />
      </div>

      {/* 3. Lapisan Konten (di depan) */}
      {/* - 'relative z-10' memastikannya tampil DI ATAS background.
        - Ini adalah tempat Anda meletakkan layout grid Anda.
      */}
      <div className="relative z-10">
        {/* Anda bisa menggunakan grid Anda di sini. 
          Contoh ini mengasumsikan <AboutUs> mengisi seluruh halaman.
        */}
        <main>
          <AboutUs />
          {/* Halaman lain bisa ditambahkan di sini menggunakan React Router */}
        </main>
      </div>
      
    </div>

          <CircleTransition/>
      {/* Main Content */}
      <div className="relative z-30 overflow-hidden" id="program">
        <Program />

        
       

       

        {/* Basic horizontal loop */}
        <div className=" bg-gray-100 h-96 overflow-hidden z-30 ">
          <div className=" py-5 mx-auto text-center ">
            <h2 className="text-5xl font-bold text-gray-800 mb-12">
              Our Clients
            </h2>
            <p className="text-gray-600 mb-10">
              We are proud to work with various well-known companies.
            </p>

            <LogoLoop
              logos={imageLogos}
              speed={120}
              direction="left"
              logoHeight={48}
              gap={40}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Technology partners"
            />
          </div>
        </div>

         {/* Artikel Section */}
         <div id="Article">

          <Artikels/>
         </div>
      

     

          <div id="kontak">

          <ContactPage/>
          </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
