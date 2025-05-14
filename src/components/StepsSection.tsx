import React, { useEffect, useRef, useState } from "react";
import "../App.css";

const StepsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(-1);

  const steps = [
    {
      title: "2023 Founded",
      description:
        "In 2023, Metalogic: a beacon of innovation. Youthful, unwavering commitment to exceptional software. Fresh perspective, building a legacy of quality and excellence",
      icon: "💡",
    },
    {
      title: "Visionary Leadership",
      description:
        "Metalogic: Founded by forward-thinking visionaries, we harness technology to shape the future, driven by innovation and groundbreaking solutions",
      icon: "🔧",
    },
    {
      title: "Commitment to Excellence",
      description:
        "Founded on an unwavering commitment to excellence. Our culture, instilled by founders, centers on continuous improvement, delivering high-quality software with dedication.",
      icon: "🚀",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      const scrollProgress = 1 - sectionTop / (windowHeight * 0.5);

      if (scrollProgress >= 0.9) {
        setActiveStep(2);
      } else if (scrollProgress >= 0.5) {
        setActiveStep(1);
      } else if (scrollProgress >= 0.1) {
        setActiveStep(0);
      } else {
        setActiveStep(-1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="py-10 min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      <div className="ml-6 md:ml-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-red-400 mb-8 md:mb-16">
          Our Foundation
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
          Bridging Futures Since 2023
        </h1>
      </div>

      {/* Timeline Line */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-3/4 top-36 rounded-full z-10">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`
              absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full 
              transition-all duration-500
              ${
                activeStep >= index
                  ? "bg-yellow-300 shadow-lg shadow-yellow-200"
                  : "bg-gray-400"
              }
            `}
            style={{ top: `${index * 33 + 5}%` }}
          >
            <div
              className={`
                absolute inset-0 rounded-full animate-pulse
                transition-opacity duration-500
                ${activeStep >= index ? "opacity-60" : "opacity-0"}
              `}
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,190,0.8) 0%, rgba(255,255,0,0) 70%)",
                transform: "scale(2)",
              }}
            ></div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-14 z-20">
        <div className="space-y-20 md:space-y-32 flex flex-col items-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`
                relative flex flex-col md:flex-row items-center transition-all duration-1000
                ${
                  activeStep >= index
                    ? "opacity-100 translate-x-0"
                    : index % 2 === 0
                    ? "opacity-0 -translate-x-10 md:-translate-x-16"
                    : "opacity-0 translate-x-10 md:translate-x-16"
                }
              `}
            >
              <div className="z-20 mb-4 md:mb-0">
                <div
                  className={`
                    w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-2xl sm:text-3xl
                    transition-all duration-700 transform
                    ${
                      activeStep >= index
                        ? "bg-yellow-300 text-blue-800 shadow-lg shadow-yellow-200"
                        : "bg-gray-300 text-gray-500"
                    }
                  `}
                >
                  {step.icon}
                </div>
              </div>

              <div
                className={`
                  md:ml-6 p-4 sm:p-6 bg-white rounded-lg shadow-lg w-full max-w-md
                  transition-all duration-700 transform
                  ${activeStep >= index ? "scale-100" : "scale-95"}
                `}
              >
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-blue-800">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
