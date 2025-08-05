import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../../assets/images/stackJuniorLogo.png";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-custom-blue py-6 px-4">
      <div className="container mx-auto flex md:gap-36 items-center">
        <img
          src={logo}
          alt="Logo"
          className="w-40 h-10 md:w-48 md:h-12 md:object-cover"
        />

        {/* Hamburger icon for mobile */}
        <div className="lg:hidden">
          <button
            onClick={handleToggle}
            className="text-white focus:outline-none ml-32"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-16 text-lg">
          <li>
            <a
              href="/"
              className="text-white hover:text-custom-pink font-semibold"
            >
              Courses
            </a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-custom-pink">
              About Stack Junior
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-custom-pink">
              Quick Tutorials
            </a>
          </li>
        </ul>

        {/* button */}
        <div className="hidden md:flex items-center space-x-16 text-lg">
          <h1 className="text-white font-semibold">My Account</h1>
          <a href="">
            <button className="lg:block bg-custom-pink text-white px-6 py-2 rounded-full font-semibold">
              Start Learning
            </button>
          </a>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <ul className="lg:hidden flex flex-col mt-4 space-y-4 text-white text-center">
          <li>
            <a href="/" className="block hover:text-custom-pink">
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
              Quick Tutorials
            </a>
          </li>
          <li>
            <a href="/" className="block hover:text-custom-pink">
              My Account
            </a>
          </li>
          <li>
            <a href="">
              <button className="bg-custom-pink text-white px-6 py-2 rounded-full font-semibold w-full">
                Start Learning
              </button>
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
