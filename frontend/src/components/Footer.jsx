import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      {/* footer div */}
      <footer className="border py-10">
        <div className="container mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* dive 1 */}
          <div className="text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Products </h2>
            <ul className="spcae-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Flutter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  React
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Android
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  IOS
                </a>
              </li>
            </ul>
          </div>

          {/* dive 2 */}
          <div className="text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Design to code</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Figma plugin
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Templates
                </a>
              </li>
            </ul>
          </div>

          {/* dive 3 */}
          <div className="text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Comparison</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  AdvanTech with Anima
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  AdvanTech vs Appsmith
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  AdvanTech with Flutterflow
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  AdvanTech vs Monday Hero
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  AdvanTech vs Flutterflow
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  AdvanTech vs Bubble
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  AdvanTech vs figma Dev Mode
                </a>
              </li>
            </ul>
          </div>

          {/* dive 4 */}
          <div className="text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms of Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="Container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-xl font-semibold hidden md:flex">
          Markdown<span className="text-blue-500">Blog</span>
        </div>
        <div className="text-gray-400 text-sm hidden md:flex">
          <p>2026 AdvanTech PVT.LTD. ALL rights reserved</p>
        </div>
        <div className="mt-4 md:mt-4 flex space-x-4">
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaGithub />
          </a>
          <a href="#">
            <BsTwitter />{" "}
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <BsYoutube />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
