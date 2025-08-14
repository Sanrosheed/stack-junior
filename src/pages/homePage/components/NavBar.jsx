import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../../assets/images/stackJuniorLogo.png";
import coloredStackLogo from "../../../assets/images/stackJuniorColoredLogo.png";

export default function NavBar({ backgroundColor, text, coloredLogo }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`${backgroundColor ? backgroundColor : "bg-custom-blue"} ${
        text ? text : "text-white"
      } py-6 px-4`}
    >
      <div className="container mx-auto flex md:gap-36 items-center">
        <a href="/">
          <img
            src={coloredLogo ? coloredStackLogo : logo}
            alt="Logo"
            className="w-40 h-10 md:w-48 md:h-12 md:object-cover cursor-pointer"
          />
        </a>

        {/* Hamburger icon for mobile */}
        <div className="lg:hidden">
          <button onClick={handleToggle} className="focus:outline-none ml-32">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-16 text-lg">
          <li>
            <a href="/courses" className="hover:text-custom-pink font-semibold">
              Courses
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-custom-pink">
              About Stack Junior
            </a>
          </li>
          <li>
            <a href="/contact-us" className="hover:text-custom-pink">
              Contact Us
            </a>
          </li>
        </ul>

        {/* button */}
        <div className="hidden md:flex items-center space-x-16 text-lg">
          <h1 className="font-semibold">My Account</h1>
          <a href="">
            <button className="text-white lg:block bg-custom-pink px-6 py-2 rounded-full font-semibold">
              Start Learning
            </button>
          </a>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <ul className="lg:hidden flex flex-col mt-4 space-y-4 text-center">
          <li>
            <a href="/courses" className="block hover:text-custom-pink">
              Courses
            </a>
          </li>
          <li>
            <a href="/about" className="block hover:text-custom-pink">
              About Stack Junior
            </a>
          </li>
          <li>
            <a href="/" className="block hover:text-custom-pink">
              Contact Us
            </a>
          </li>
          <li>
            <a href="/" className="block hover:text-custom-pink">
              My Account
            </a>
          </li>
          <li>
            <a href="">
              <button
                className={`text-white bg-custom-pink px-6 py-2 rounded-full font-semibold w-full`}
              >
                Start Learning
              </button>
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
