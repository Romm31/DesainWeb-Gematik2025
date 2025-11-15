import "./index.css";

import Header from "./components/Header";
import Slider from "./components/Slider";
import TextType from "./components/Text";
import About from "./components/tentang";
import Program from "./components/program";
import Footer from "./components/Footer";
import CircleTransition from "./components/transisi";
import Model3D from "./components/Model3d";
// import Artikels from "./components/Artikel"; // Uncomment kalau mau dipakai

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

function App() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Section (Slider + 3D Model) */}
      <div className="relative w-full h-screen overflow-hidden grid grid-cols-12">
        {/* Slider Background */}
        <div className="absolute inset-0 z-0">
          <Slider />
        </div>

        {/* Hero Text */}
        <div className="col-span-12 md:col-span-6 z-20 flex flex-col items-start mx-20 justify-center">
          <div className="text-white text-5xl font-bold mb-5">
            <TextType
              text={["Coding", "for your websites", "Happy coding!"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>

          <h1 className="text-white text-5xl font-bold drop-shadow-xl">
            "Empowering Youth in the Era of{" "}
            <span className="text-amber-400">Disruption</span>"
          </h1>

          <h2 className="text-white max-w-3xl mt-3">
            Bangun potensi diri dan keterampilan masa depan.
            Wujudkan inovasi yang memberikan dampak nyata untuk Indonesia.
          </h2>

          <button className="mt-6 px-6 py-3 bg-blue-700 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition">
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

      {/* Transition Effect */}
      <CircleTransition />

      {/* Main Content */}
      <div className="relative z-30 overflow-hidden">
        <About />

        <div className="bg-[#e5e7eb] min-h-screen overflow-x-hidden">
          <Program />
        </div>

        {/* Artikel Section */}
        <div id="artikel">
          {/* <Artikels /> */}
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
