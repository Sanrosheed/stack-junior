import { FaSearch } from "react-icons/fa";
import HeroImg from "../../../assets/images/kid 2.png";

export default function Hero() {
  return (
    <div className="bg-custom-blue md:h-screen flex flex-col-reverse md:flex-row items-center">
      <div className="md:ml-12">
        <h1 className="text-white text-2xl mt-6 md:mt-0 md:text-5xl font-bold mb-4 md:mb-6">
          Learn on your schedule
        </h1>
        <div className="md:mt-4 flex gap-2 items-center justify-between mb-8">
          <input
            type="text"
            className="bg-white  w-full p-4"
            placeholder="Search for your desired course"
          />
          <button className="bg-custom-pink text-white p-4">
            <FaSearch className="h-6 w-6" />
          </button>
        </div>
      </div>

      <img src={HeroImg} alt="Hero" className="mt-8 md:mt-4" />
    </div>
  );
}
