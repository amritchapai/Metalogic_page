import React from "react";
import WorldMap from "./WorldMap";
import TeamStats from "./TeamStats";

const DistributedTeamSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#f0f0f0] text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 bg-clip-text text-primary ">
            We Are a Distributed Team
          </h2>
          <p className="text-lg md:text-xl text-primary max-w-2xl text-center">
            Working across time zones and borders to deliver exceptional results
          </p>
        </div>

        <div className="relative">
          <WorldMap />
        </div>

        <TeamStats />
      </div>
    </section>
  );
};

export default DistributedTeamSection;
