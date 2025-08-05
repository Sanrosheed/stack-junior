import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../../../assets/images/stackJuniorLogo.png";
import ChatBot from "../../../assets/images/chatbot.png";
import { FaX, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-custom-blue text-white relative">
      <div className="py-12 px-6 md:px-24 flex flex-col md:flex-row gap-y-8 md:justify-between">
        {/* Logo and About */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src={logo} alt="StackJunior Logo" className="" />
          </div>
          <p className="text-sm md:text-lg leading-relaxed">
            Is an ed-tech platform that trains <br />
            kids and teenagers in programming and other tech skills
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:mr-44">
          <h3 className="text-lg md:text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm md:text-lg">
            <li>
              <a href="#">About StackJunior</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Send Feedback</a>
            </li>
            <li>
              <a href="#">Partnerships</a>
            </li>
          </ul>
        </div>

        {/* Right: Socials & Contact */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-4">Socials</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#">
              <FaFacebookF size={28} />
            </a>
            <a href="#">
              <FaXTwitter size={28} />
            </a>
            <a href="#">
              <FaInstagram size={28} />
            </a>
            <a href="#">
              <FaYoutube size={28} />
            </a>
          </div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm md:text-lg">+234 xxx xxx xxxx</p>
          <p className="text-sm md:text-lg">+234 xxx xxx xxxx</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#00426D] py-4 text-center">
        ©{new Date().getFullYear()} - <strong>StackJunior</strong>. All Rights
        Reserved.
      </div>

      {/* Floating Chat Button */}
      <button className="absolute bottom-4 right-4 flex items-center md:px-4 py-2">
        <img src={ChatBot} alt="Chatbot" className="w-56 h-28 md:w-auto md:h-auto" />
      </button>
    </footer>
  );
}
