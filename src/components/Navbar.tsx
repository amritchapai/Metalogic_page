import React from "react";
import { ChevronDown } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed z-100 top-0 w-full h-24 flex justify-between items-center bg-primary text-white px-16 py-3 ">
      <div className="flex items-center">
        <div className="bg-[#e83d3d] w-10 h-10 rounded-full flex justify-center items-center mr-2">
          <img src="metalogo.png" />
        </div>
        <span className="text-3xl font-bold tracking-wider">MetaLogic</span>
      </div>

      <ul className="flex space-x-8 text-xl">
        <li>
          <a href="#" className="font-medium">
            Home
          </a>
        </li>
        <li className="relative">
          <button className="flex items-center font-medium">
            Services
            <ChevronDown className="ml-1 w-4 h-4" />
          </button>
        </li>
        <li>
          <a href="#" className="font-medium">
            Career
          </a>
        </li>
        <li>
          <a href="#" className="font-medium">
            Blogs
          </a>
        </li>
        <li>
          <a href="#" className="px-2 font-medium border-b-4 border-[#e83d3d]">
            About Us
          </a>
        </li>
      </ul>

      <button className="bg-[#e83d3d] hover:bg-red-600 text-white font-medium px-4 py-2 rounded ">
        Get in Touch
      </button>
    </nav>
  );
};

export default Navbar;
