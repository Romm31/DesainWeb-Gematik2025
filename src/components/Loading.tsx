import { useEffect, useState } from "react";
import logo from "../assets/logo.png"

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2; // kecepatan naik progress
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-1000 transition-opacity duration-500">
      {/* LOGO */}
      <img
        src={logo}alt="Logo"className="w-32 h-32 animate-pulse mb-6"
      />
      {/* PROGRESS TEXT */}
      <p className="text-white text-xl font-semibold mb-3">
        {progress}%
      </p>

      {/* PROGRESS BAR */}
      <div className="w-64 h-3 bg-white/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
