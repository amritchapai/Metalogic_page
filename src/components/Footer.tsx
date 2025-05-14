import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  PhoneCallIcon,
} from "lucide-react";
import { MdEmail } from "react-icons/md";
import { GoLocation } from "react-icons/go";

const Footer: React.FC = () => {
  return (
    <div className=" bg-blue-950 text-white w-full">
      <div className="w-full flex items-center justify-center">
        <div className="container mx-auto flex flex-col justify-center md:flex-row px-4 md:px-8 py-8">
          <div className="md:w-1/4 mb-6 md:mb-0">
            <div className="flex items-center mb-2">
              <img src="metalogo.png" className="h-13" />
              <div className="ml-2">
                <div className="text-white text-xl font-bold">MetaLogic</div>
                <div className="text-white text-xs">
                  Software Private Limited
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-start mb-2 gap-2">
                <GoLocation size={14} />
                <div className="text-white text-sm">
                  Saptakhel, Lalitpur (Head office)
                </div>
              </div>

              <div className="flex items-center mb-2 gap-2">
                <PhoneCallIcon size={14} />

                <div className="text-white text-sm">+ 977 9851353599</div>
              </div>

              <div className="flex items-center gap-2">
                <MdEmail size={14} />
                <div className="text-white text-sm">info@metalogic.com.np</div>
              </div>
            </div>
          </div>

          <div className="md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-white text-sm hover:text-blue-300">
                  Feedback
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-sm hover:text-blue-300">
                  Partnership
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-sm hover:text-blue-300">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>

          <div className="md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-white font-medium mb-4">Services</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-white text-sm hover:text-blue-300">
                  Custom Software Development
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-sm hover:text-blue-300">
                  Web Development
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-sm hover:text-blue-300">
                  Mobile App Development
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-sm hover:text-blue-300">
                  Cloud Computing Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-sm hover:text-blue-300">
                  Quality Assurance and Testing
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-sm hover:text-blue-300">
                  UI/UX Designing
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-sm hover:text-blue-300">
                  Maintenance and Support
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-sm hover:text-blue-300">
                  Dev Ops
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-sm hover:text-blue-300">
                  Blockchain Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Join and Social Links */}
          <div className="md:w-1/4">
            <div className="mb-6">
              <h3 className="text-white font-medium mb-4">Join</h3>
              <ul>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-white text-sm hover:text-blue-300"
                  >
                    Careers at MetaLogic
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-white text-sm hover:text-blue-300"
                  >
                    Internships
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-medium mb-4">
                Join us on Social Medias
              </h3>
              <div className="flex space-x-2">
                <a
                  href="#"
                  className="bg-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200"
                >
                  <MessageCircle size={16} className="text-blue-950" />
                </a>
                <a
                  href="#"
                  className="bg-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200"
                >
                  <Facebook size={16} className="text-blue-950" />
                </a>
                <a
                  href="#"
                  className="bg-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200"
                >
                  <Instagram size={16} className="text-blue-950" />
                </a>
                <a
                  href="#"
                  className="bg-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200"
                >
                  <Linkedin size={16} className="text-blue-950" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-900 py-4">
        <div className="container mx-auto px-4 md:px-8">
          <p className="text-gray-400 text-sm">
            © Copyright 2024 MetaLogic. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
