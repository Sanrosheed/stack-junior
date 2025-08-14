import { FaSearch } from "react-icons/fa";
import HeroImg from "../../../assets/images/contactImg.png";

export default function ContactHero() {
  return (
    <div className="bg-custom-yellow md:h-screen flex flex-col md:flex-row items-center justify-between">
      <div className="md:ml-12">
        <h1 className="text-black text-2xl mt-8 md:mt-0 md:text-7xl uppercase font-bold md:mb-6">
          Contact Us
        </h1>
      </div>

      <img src={HeroImg} alt="Hero" className="mt-8 md:mt-4" />
    </div>
  );
}
