import React, { useEffect, useRef } from "react";
import { GlobeIcon } from "lucide-react";

const WorldMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const locations = document.querySelectorAll(".location-dot");
      locations.forEach((location, index) => {
        setTimeout(() => {
          location.classList.add("pulse");
          setTimeout(() => {
            location.classList.remove("pulse");
          }, 2000);
        }, index * 200);
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const teamLocations = [
    { x: 18, y: 38 },
    { x: 28, y: 65 },
    { x: 16, y: 30 },
    { x: 24, y: 35 },
    { x: 24, y: 35 },
    { x: 45, y: 28 },
    { x: 22, y: 45 },
    { x: 80, y: 35 },
    { x: 68, y: 48 },
    { x: 78, y: 33 },
    { x: 32, y: 65 },
    { x: 60, y: 42 },
    { x: 45, y: 35 },
  ];

  return (
    <div className="relative h-[400px] md:h-[500px] lg:h-[600px] mb-16 flex items-center justify-center">
      <div
        ref={mapRef}
        className="absolute inset-0 bg-white rounded-3xl overflow-hidden transition-transform duration-300 ease-out"
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-25">
            {Array.from({ length: 12 * 6 }).map((_, i) => (
              <div key={i} className="border border-blue-500/20"></div>
            ))}
          </div>

          <div className="absolute top-[20%] left-[15%] w-[25%] h-[30%] bg-blue-500/20 rounded-full blur-md"></div>
          <div className="absolute top-[25%] left-[45%] w-[20%] h-[20%] bg-blue-500/20 rounded-full blur-md"></div>
          <div className="absolute top-[30%] right-[10%] w-[15%] h-[25%] bg-blue-500/20 rounded-full blur-md"></div>
          <div className="absolute bottom-[20%] left-[30%] w-[30%] h-[20%] bg-blue-500/20 rounded-full blur-md"></div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full bg-blue-500/10 blur-xl"></div>

          {teamLocations.map((location, index) => (
            <div
              key={index}
              className="location-dot absolute w-3 h-3 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"
              style={{
                left: `${location.x}%`,
                top: `${location.y}%`,
                boxShadow: "0 0 0 rgba(59, 130, 246, 0.4)",
                animation: "pulse 2s infinite",
              }}
            >
              <div className="absolute -inset-1 bg-blue-500/50 rounded-full animate-ping"></div>
            </div>
          ))}

          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient
                id="lineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.5)" />
                <stop offset="100%" stopColor="rgba(99, 102, 241, 0.5)" />
              </linearGradient>
            </defs>
            {teamLocations
              .slice(0, -1)
              .map((start, i) =>
                teamLocations
                  .slice(i + 1)
                  .map((end, j) => (
                    <line
                      key={`${i}-${j}`}
                      x1={`${start.x}%`}
                      y1={`${start.y}%`}
                      x2={`${end.x}%`}
                      y2={`${end.y}%`}
                      stroke="url(#lineGradient)"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                      className="opacity-30"
                    />
                  ))
              )}
          </svg>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-500/80 animate-float">
        <GlobeIcon size={120} strokeWidth={1} />
      </div>
    </div>
  );
};

export default WorldMap;
