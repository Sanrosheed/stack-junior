import { FaSearch } from "react-icons/fa";
import HeroImg from "../../../assets/images/coursesImg.png";

export default function CoursesHero() {
  return (
    <div className="flex flex-col justify-center items-center mt-20 md:mt-24">
      <h1 className="text-2xl md:text-5xl font-extrabold mb-3">
        <span className="text-custom-blue">Search </span>
        <span className="text-[#2C2C2C]">for your</span> desired{" "}
        <span className="text-custom-pink">courses</span>
      </h1>
      <div className="md:mt-4 md:w-2xl flex gap-2 items-center justify-between mb-8">
        <input
          type="text"
          className="bg-white w-full p-4"
          placeholder="What are you looking for?"
        />
        <button className="bg-custom-pink text-white p-4">
          <FaSearch className="h-6 w-6" />
        </button>
      </div>

      <img src={HeroImg} />
    </div>
  );
}
