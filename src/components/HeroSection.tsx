import React from "react";
import Wave from "./Wave";

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2/3 bg-gradient-to-b from-blue-300 via-blue-200 to-blue-100"></div>
      <div className="absolute rounded-full bg-yellow-300 w-24 h-24 top-35 right-40 shadow-yellow-200 shadow-2xl"></div>
      <div className="absolute bottom-0 w-full h-1/3 bg-blue-400">
        <Wave
          color="#3B82F6"
          heightClass="h-full"
          opacity={0.3}
          animationDuration="7s"
          animationDelay="0s"
        />
        <Wave
          color="#60A5FA"
          heightClass="h-4/5"
          opacity={0.5}
          animationDuration="5s"
          animationDelay="1s"
        />
        <Wave
          color="#93C5FD"
          heightClass="h-3/5"
          opacity={0.7}
          animationDuration="3s"
          animationDelay="2s"
        />

        <img
          className="absolute -bottom-20 -right-70 z-10  h-auto"
          src="rocktest1.png"
          alt="Rock formation right"
        />
        <img
          className="absolute -bottom-6 -right-20 rotate-90 h-auto"
          src="rocktest1.png"
          alt="Rock formation right rotated"
        />
        <img
          className="absolute -bottom-35 -left-80 h-[650px] w-auto"
          src="testpure.png"
          alt="Left shore formation"
        />
      </div>

      

      <div className="relative z-20 h-full flex items-center justify-center text-white">
        <div className="text-center p-6 text-black bg-opacity-30 rounded-lg">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Driving innovations and empowering business
          </h1>
          <p className="text-xl md:text-2xl">
            Metalogic envisions a future where technology serves as a catalyst
            for limitless human potential,
            <br /> fostering innovation and empowering organizations to thrive
            in a transformative digital era.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
