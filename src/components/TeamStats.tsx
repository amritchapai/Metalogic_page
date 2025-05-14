import React, { useEffect, useRef, useState } from "react";
import {
  ClockIcon,
  GlobeIcon,
  UsersIcon,
  CalendarClockIcon,
} from "lucide-react";

const stats = [
  {
    icon: GlobeIcon,
    value: 12,
    unit: "Countries",
    description: "Spanning 5 continents",
  },
  {
    icon: ClockIcon,
    value: 9,
    unit: "Time Zones",
    description: "Around-the-clock collaboration",
  },
  {
    icon: UsersIcon,
    value: 35,
    unit: "Team Members",
    description: "Diverse talents united",
  },
  {
    icon: CalendarClockIcon,
    value: 24,
    unit: "Hours of Coverage",
    description: "Always available to customers",
  },
];

const TeamStats: React.FC = () => {
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);
  const animationTriggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animationTriggered.current) {
          animationTriggered.current = true;

          stats.forEach((stat, index) => {
            let startTimestamp: number;
            const animationDuration = 2000;

            const step = (timestamp: number) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min(
                (timestamp - startTimestamp) / animationDuration,
                1
              );

              setAnimatedStats((prev) => {
                const updated = [...prev];
                updated[index] = Math.floor(progress * stat.value);
                return updated;
              });

              if (progress < 1) {
                window.requestAnimationFrame(step);
              } else {
                setAnimatedStats((prev) => {
                  const updated = [...prev];
                  updated[index] = stat.value;
                  return updated;
                });
              }
            };

            window.requestAnimationFrame(step);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12 relative"
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className="relative  backdrop-blur rounded-xl p-6 border border-slate-700/50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 overflow-hidden group"
        >
          <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>

          <div className="flex flex-col items-center text-center">
            <stat.icon className="w-10 h-10 text-primary mb-4" />
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-4xl font-bold text-primary">
                {animatedStats[index]}
              </span>
              <span className="text-xl text-primary">{stat.unit}</span>
            </div>
            <p className="text-primary">{stat.description}</p>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        </div>
      ))}
    </div>
  );
};

export default TeamStats;
