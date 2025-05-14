import React, { useEffect, useRef, useState } from "react";
import Bird from "../classes/Bird";

const Execution: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const birdsRef = useRef<Bird[]>([]);

  const [dimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const isInitializedRef = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const width = window.innerWidth;
        const height = window.innerHeight;

        canvas.width = width;
        canvas.height = height;
        setDimension({ width, height });

        const maxBirds = 100;
        const densityFactor = 20000;
        const numberBirds = Math.min(
          Math.floor((width * height) / densityFactor),
          maxBirds
        );

        birdsRef.current = Array(numberBirds)
          .fill(0)
          .map(() => new Bird(width, height));
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        setCursor({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    handleResize();
    isInitializedRef.current = true;

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (
      !canvasRef.current ||
      !isInitializedRef.current ||
      birdsRef.current.length === 0
    )
      return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let lastTime = 0;
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;

    const animate = (timestamp: number) => {
      const elapsed = timestamp - lastTime;

      if (elapsed > frameInterval) {
        lastTime = timestamp - (elapsed % frameInterval);

        ctx.clearRect(0, 0, dimension.width, dimension.height);

        birdsRef.current.forEach((bird) => {
          bird.update(cursor.x, cursor.y, dimension.width, dimension.height);
          bird.draw(ctx);
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [dimension, cursor]);

  return (
    <div className="relative flex flex-col items-center justify-center bg-gradient-to-b from-blue-300 to-blue-600 w-full min-h-screen overflow-hidden px-4 py-8">
      <div className="z-20 max-w-4xl text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 text-white drop-shadow-lg">
          Where Vision Meets Execution
        </h1>
        <p className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl text-base sm:text-lg md:text-xl text-white text-center mb-6 md:mb-8 drop-shadow">
          At Metalogic, we navigate the digital landscape with innovation,
          collaboration, and a dedicated focus on client success.
        </p>
      </div>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-10" />
    </div>
  );
};

export default Execution;
