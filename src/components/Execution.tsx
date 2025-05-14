import React, { useEffect, useRef, useState } from "react";
import Bird from "../classes/Bird";

const Execution = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const [dimension, setDimension] = useState({
    width: 0,
    height: 0,
  });
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [birds, setBirds] = useState<Bird[]>([]);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const width = window.innerWidth;
        const height = window.innerHeight;

        canvas.width = width;
        canvas.height = height;
        setDimension({ width, height });

        const numberBirds = Math.floor((width * height) / 20000);
        const newBirds = Array(numberBirds)
          .fill(0)
          .map(() => new Bird(width, height));
        setBirds(newBirds);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  useEffect(() => {
    if (birds.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, dimension.width, dimension.height);

      birds.forEach((bird) => {
        bird.update(cursor.x, cursor.y, dimension.width, dimension.height);
        bird.draw(ctx);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [birds, cursor, dimension]);

  return (
    <div className="relative flex flex-col items-center justify-center bg-gradient-to-b from-blue-300 to-blue-600 w-full h-screen overflow-hidden">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white shadow-lg z-20">
        Where Vision Meets Execution
      </h1>
      <p className="max-w-3xl text-lg md:text-xl text-white text-center mb-8 z-20">
        At Metalogic, we navigate the digital landscape with innovation,
        collaboration, and a dedicated focus on client success.
      </p>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-10" />
    </div>
  );
};

export default Execution;
