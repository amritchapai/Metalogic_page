import React from "react";

const MissionSection: React.FC = () => {
  return (
    <div className="w-full bg-[#faf7fa]">
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 px-6 md:px-12 lg:px-20 py-20 md:py-20 max-w-7xl mx-auto">
        <div className=" relative w-100 md:w-1/2">
          <img src="innovation.png" alt="Mission" className="w-3/4 h-auto" />
          <div className="absolute z-15 top-67 lg:-translate-y-full -translate-y-30 right-1/2 -translate-x-10 lg:-translate-x-full md:h-16 md:w-16 h-14 w-14 rounded-full bg-[#b334cc] animate-pulse shadow-[0_0_25px_10px_rgba(179,52,204,0.7)]"></div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="text-red-600 font-bold text-lg sm:text-xl mb-3 sm:mb-4">
            OUR MISSION
          </div>
          <h1 className="text-[#0A2149] font-semibold text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 leading-tight">
            Dedication to innovation
          </h1>
          <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
            We believe that every project is an opportunity to create something
            remarkable—a chance to push boundaries, challenge norms, and exceed
            expectations. We approach each endeavor with curiosity and
            creativity, striving to craft solutions that not only meet your
            needs but also propel you ahead of the curve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
