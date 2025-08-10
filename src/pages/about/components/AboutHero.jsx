import { FaSearch } from "react-icons/fa";
import HeroImg from "../../../assets/images/aboutusImg.png";

export default function AboutHero() {
  return (
    <div className="bg-custom-lightblue md:h-screen flex flex-col-reverse md:flex-row items-center">
      <div className="mx-8 md:mx-0 md:ml-18">
        <h1 className="flex justify-center gap-2 md:block text-black text-2xl mt-6 md:mt-0 md:text-5xl font-bold mb-2 md:mb-4">
          <h1 className="mb-3 text-[#2C2C2C]">About</h1>
          <h1>
            <span className="text-custom-pink">Stack</span>
            <span className="text-custom-blue">Junior</span>
          </h1>
        </h1>
        <p className="text-[#2B2B2B] text-xl leading-9 mb-4">
          Is an ed-tech platform that trains kids and teenagers in programming
          and other tech skills so as to prepare them for the opportunities of
          the future
        </p>
        <button className="flex items-center mx-auto md:mx-0 gap-2 bg-custom-pink text-white px-10 py-2 rounded-md">
          <FaSearch className="h-5 w-5" />
          <h1 className="text-xl font-semibold">Explore</h1>
        </button>
      </div>

      <img src={HeroImg} alt="Hero" className="mt-0 md:mt-4" />
    </div>
  );
}
