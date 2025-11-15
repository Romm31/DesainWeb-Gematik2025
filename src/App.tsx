import { useState } from "react";
import "./index.css";
import Slider from "./components/Slider";
import Artikels from "./components/Artikel";
import Header from "./components/Header";
import TextType from "./components/Text";
import About from "./components/tentang";
import Program from "./components/program";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Model3D from "./components/Model3d";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    {/* Slider Section */}
    <Header/>

<div className="relative w-full h-screen overflow-hidden grid grid-cols-12">
    
    {/* Wrapper untuk Slider */}
    <div className="absolute inset-0 z-0">
        <Slider/>
    </div>
    
    {/* Konten lainnya tetap di-render dengan z-index tinggi */}
    <div className="col-span-12 md:col-span-6  z-20 flex flex-col  items-start mx-20 mt-30">
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
      "Empowering Youth in the Era of <span className="text-amber-400">Disruption</span>"
    </h1>

    <h2 className="text-white max-w-3xl mt-3">
      Empowering Youth in the Era of Disruption Bangun potensi diri dan keterampilan masa depan.
      Wujudkan inovasi yang memberikan dampak nyata untuk Indonesia.
    </h2>

    <button className="mt-6 px-6 py-3 bg-blue-700 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition">
      Learn More
    </button>
    </div>
    <div className="col-span-12 md:col-span-6 z-20" > <Canvas  camera={{ position: [1, 3, 3], fov: 50 }} >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Model3D />
      <OrbitControls enableZoom={true}
      autoRotate
      autoRotateSpeed={0.5}  />
      <Environment preset="sunset" />
    </Canvas></div>
</div>





    <About/>
    <div className="bg-[#e5e7eb] min-h-screen overflow-x-hidden">

     <Program/>
    </div>
      {/* Artikel Section */}
      <div id="artikel">

      {/* <Artikels/> */}
      </div>

       
      <Footer/>
    
    </>
  );
}

export default App;
