import React, { useState, useEffect } from "react";

type StatItemProps = {
  count: number;
  label: string;
  isLastItem: boolean;
};

const StatItem: React.FC<StatItemProps> = ({ count, label, isLastItem }) => {
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    setDisplayCount(0);

    const incrementSpeed = Math.max(1, Math.floor(count / 100));
    const duration = count <= 20 ? 80 : count <= 50 ? 40 : 20;

    const timer = setInterval(() => {
      setDisplayCount((prev) => {
        const next = prev + incrementSpeed;
        if (next >= count) {
          clearInterval(timer);
          return count;
        }
        return next;
      });
    }, duration);

    return () => clearInterval(timer);
  }, [count]);

  return (
    <div className="flex-1 min-w-0 sm:min-w-32 md:min-w-40 text-center p-4 sm:p-6 md:p-8 relative group transition-transform duration-300 hover:-translate-y-1">
      <div className="relative inline-block text-3xl sm:text-4xl md:text-5xl font-bold text-teal-600 mb-1 sm:mb-2">
        {displayCount}
        <span className="absolute text-xl sm:text-2xl md:text-3xl top-0 sm:top-1 -right-3 sm:-right-4 md:-right-5">
          +
        </span>
      </div>
      <div className="text-sm sm:text-base md:text-lg text-gray-600 font-medium">
        {label}
      </div>

      {!isLastItem && (
        <div className="hidden md:block absolute right-0 top-1/4 h-1/2 w-px bg-gray-200"></div>
      )}
    </div>
  );
};

const StatsSection: React.FC = () => {
  const stats = [
    { count: 32, label: "Projects Completed" },
    { count: 50, label: "Satisfied Clients" },
    { count: 18, label: "Experts" },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    // Find the container element
    const element = document.getElementById("stats-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div id="stats-section" className="max-w-6xl mx-auto w-full">
      <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 sm:h-2 bg-gradient-to-r from-teal-700 to-teal-500"></div>

        <div className="flex flex-col sm:flex-row justify-around p-2 sm:p-3 md:p-4">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              count={isVisible ? stat.count : 0}
              label={stat.label}
              isLastItem={index === stats.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
