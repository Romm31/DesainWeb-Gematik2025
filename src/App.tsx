
import { useState } from 'react'
import './index.css'
import Slider from './components/Slider';
import Artikels from './components/Artikel';
import Header from './components/Header';
function App() {
const [count, setCount] = useState(0)

  return (
 
  
   <div className="bg-[#f8f5f2] min-h-screen overflow-x-hidden">
      {/* <header/> */}
      <Header/>
      {/* Slider Section */}
      <div className="relative w-full h-screen overflow-hidden">
       <Slider />

     <div className="absolute inset-0 mt-10 flex flex-col justify-center items-center text-center">
  <h1 className="text-white text-5xl font-bold drop-shadow-xl">
    Next Gen Impact
  </h1>

  <h1 className="text-white text-5xl font-bold drop-shadow-xl">
    "Empowering Youth in the Era of Disruption"
  </h1>

  <h2 className="text-white max-w-3xl">
    Empowering Youth in the Era of Disruption
    Bangun potensi diri dan keterampilan masa depan. Wujudkan inovasi yang memberikan dampak nyata untuk Indonesia.
  </h2>
</div>

    </div>
     
      {/* Artikel Section */}
      <Artikels/>
    </div>
   
  );
};

export default App;


