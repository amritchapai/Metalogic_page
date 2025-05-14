import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed z-50 top-0 w-full h-16 md:h-24 flex justify-between items-center 
                bg-primary text-white px-4 md:px-16 py-3 transition-transform duration-300
                ${visible ? "transform-none" : "-translate-y-full"}`}
    >
      <div className="flex items-center">
        <div className="bg-red-600 w-8 h-8 md:w-10 md:h-10 rounded-full flex justify-center items-center mr-2">
          <img src="metalogo.png" alt="MetaLogic logo" />
        </div>
        <span className="text-xl md:text-3xl font-bold tracking-wider">
          MetaLogic
        </span>
      </div>

      <ul className="hidden md:flex space-x-8 text-xl">
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
          <a href="#" className="font-medium border-b-4 border-red-600 px-2">
            About Us
          </a>
        </li>
      </ul>

      <button className="hidden md:block bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded">
        Get in Touch
      </button>

      <button
        className="md:hidden border-2 border-red-600 p-1 rounded"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-red-600" />
        )}
      </button>

      <div
        className={`fixed md:hidden top-16 left-0 w-full bg-white text-gray-800 shadow-lg transition-transform duration-300 ease-in-out transform origin-top ${
          isMenuOpen ? "scale-y-100" : "scale-y-0"
        }`}
      >
        <ul className="flex flex-col p-4">
          <li className="py-3 border-b border-gray-200">
            <a href="#" className="font-medium block">
              Home
            </a>
          </li>
          <li className="py-3 border-b border-gray-200">
            <button className="flex items-center justify-between w-full font-medium">
              Services
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
          </li>
          <li className="py-3 border-b border-gray-200">
            <a href="#" className="font-medium block">
              Career
            </a>
          </li>
          <li className="py-3 border-b border-gray-200">
            <a href="#" className="font-medium block">
              Blogs
            </a>
          </li>
          <li className="py-3 border-b border-gray-200">
            <a href="#" className="font-medium block text-red-600">
              About Us
            </a>
          </li>
          <li className="py-3">
            <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded w-full">
              Get in Touch
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
