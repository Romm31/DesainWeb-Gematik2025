import { useRef, useEffect } from "react";

export default function CircleTransition() {
  const circleRef = useRef<HTMLDivElement>(null);
  const targetSizeRef = useRef(5); // ukuran target
  const currentSizeRef = useRef(5); // ukuran aktual yang di-render
  const targetOpacityRef = useRef(0); // target opacity
  const currentOpacityRef = useRef(0); // opacity saat ini

  useEffect(() => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const maxSize = Math.sqrt(viewportWidth ** 2 + viewportHeight ** 2) * 2;

    const handleScroll = () => {
      const scrollY = window.scrollY;
       // Mulai membesar setelah scroll 1000px
  const scrollOffset = 1400;
  const effectiveScroll = Math.max(0, scrollY - scrollOffset );
      // Update target size
      const targetSize = Math.min(maxSize, effectiveScroll *3+5); // +5 ukuran awal
      targetSizeRef.current = targetSize;

      // Update target opacity
       targetOpacityRef.current = scrollY > scrollOffset ? 1 : 0;
    };

    window.addEventListener("scroll", handleScroll);

    let animationFrame: number;

    const animate = () => {
      if (circleRef.current) {
        // Smooth lerp untuk ukuran
        currentSizeRef.current += (targetSizeRef.current - currentSizeRef.current) * 0.1;
        circleRef.current.style.width = `${currentSizeRef.current}px`;
        circleRef.current.style.height = `${currentSizeRef.current}px`;

        // Smooth lerp untuk opacity
        currentOpacityRef.current += (targetOpacityRef.current - currentOpacityRef.current) * 0.1;
        circleRef.current.style.opacity = `${currentOpacityRef.current}`;
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      className="fixed bottom-0 left-1/2 -translate-x-1/2 z-21 pointer-events-none"
    >
      <div
        ref={circleRef}
        className="bg-white rounded-full"
        style={{
          width: 5,
          height: 5,
          opacity: 0, // awalnya hide
        }}
      />
    </div>
  );
}
