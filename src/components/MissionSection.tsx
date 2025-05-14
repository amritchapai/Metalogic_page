import React from "react";

const MissionSection: React.FC = () => {
  return (
    <div className="w-full bg-[#faf7fa]">
      <div className="flex justify-center w-full mx-auto  py-40 px-20 items-center gap-30">
        <div className="w-full">
          <img src="mission.svg" />
        </div>

        <div className="">
          <div className="text-red-600 font-bold text-xl mb-4 ">
            OUR MISSION
          </div>
          <h1 className="text-[#0A2149] font-semibold text-5xl mb-6 leading-tight">
            Dedication to innovation
          </h1>
          <p className="text-gray-800 text-base leading-relaxed">
            We believe that every project is an opportunity to create something
            remarkable a chance to push boundaries, challenge norms, and exceed
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
