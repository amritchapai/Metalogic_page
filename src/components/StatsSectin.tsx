import React, { useState, useEffect } from "react";

type StatItemProps = {
  count: number;
  label: string;
  icon: string;
};

const StatItem: React.FC<StatItemProps> = ({ count, label, icon }) => {
  const [displayCount, setDisplayCount] = useState(0);
  console.log(displayCount);
  useEffect(() => {
    const duration = 20;

    const timer = setInterval(() => {
      if (displayCount === count) {
        clearInterval(timer);
      } else {
        setDisplayCount((prev) => prev + 1);
      }
    }, duration);

    return () => clearInterval(timer);
  }, [count, displayCount]);

  return (
    <div className="flex-1 min-w-40 text-center p-8 relative group transition-transform duration-300 hover:-translate-y-1">
      <div className="text-teal-500 text-2xl mb-4">{icon}</div>
      <div className="relative inline-block text-5xl font-bold text-teal-600 mb-2">
        {displayCount}
        <span className="absolute text-3xl top-1 -right-5">+</span>
      </div>
      <div className="text-lg text-gray-600 font-medium">{label}</div>

      <div className="absolute right-0 top-1/4 h-1/2 w-px bg-gray-200 last:hidden md:block hidden"></div>
    </div>
  );
};

const StatsSection: React.FC = () => {
  const stats = [
    { count: 32, label: "Projects Completed", icon: "📊" },
    { count: 50, label: "Satisfied Clients", icon: "🤝" },
    { count: 18, label: "Experts", icon: "👨‍💻" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-700 to-teal-500"></div>

        <div className="flex flex-wrap justify-around p-6 md:p-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              count={stat.count}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
