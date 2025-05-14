import React from "react";
import Wave from "./Wave";
import StatsSection from "./StatsSectin";

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div className="absolute top-0 left-0 w-full h-2/3 bg-gradient-to-b from-blue-300 via-blue-200 to-blue-100"></div>

      <div className="absolute rounded-full bg-yellow-300 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 top-10 md:top-20 lg:top-24 right-10 md:right-20 lg:right-32 shadow-yellow-200 shadow-2xl"></div>

      <div className="absolute inset-0 overflow-hidden">
        <img
          className="absolute -bottom-10 md:-bottom-15 lg:-bottom-20 -right-36 md:-right-48 lg:-right-70 z-20 w-64 md:w-80 lg:w-auto h-auto"
          src="rocktest1.png"
          alt="Rock formation right"
        />

        <img
          className="absolute -bottom-16 md:-bottom-20 lg:-bottom-28 -right-10 md:-right-16 lg:-right-20 z-10 rotate-90 w-56 md:w-72 lg:w-auto h-auto"
          src="rocktest1.png"
          alt="Rock formation right rotated"
        />

        <img
          className="hidden md:block absolute -bottom-24 lg:-bottom-35 -left-48 md:-left-60 lg:-left-80 z-10 h-[350px] md:h-[450px] lg:h-[650px] w-auto"
          src="testpure.png"
          alt="Left shore formation"
        />
      </div>

      <div className="absolute bottom-0 w-full h-1/3 bg-blue-400 overflow-hidden">
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
      </div>

      <div className="relative z-20 h-full flex items-center justify-center text-white px-4 py-16 md:py-20 lg:py-24">
        <div className="text-center text-primary bg-opacity-30 rounded-lg max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl">
          <h1 className="text-3xl md:mt-30 sm:text-4xl md:text-5xl font-bold mb-2 md:mb-4">
            Driving innovations and empowering business
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl px-2">
            Metalogic envisions a future where technology serves as a catalyst
            for limitless human potential,
            <span className="hidden sm:inline">
              <br /> fostering innovation and empowering organizations to thrive
              in a transformative digital era.
            </span>
            <span className="sm:hidden">
              {" "}
              fostering innovation and empowering organizations to thrive in a
              transformative digital era.
            </span>
          </p>
        </div>
      </div>

      <div className="absolute z-20 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-11/12 sm:w-10/12 md:w-3/4 lg:w-2/3 xl:w-1/2">
        <StatsSection />
      </div>
    </div>
  );
};

export default HeroSection;
