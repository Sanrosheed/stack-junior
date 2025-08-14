import { FaSearch } from "react-icons/fa";
import HeroImg from "../../../assets/images/coursesImg.png";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

export default function CoursesHero() {
  const [searchTerm, setSearchTerm] = useState("Intro");
  const [results, setResults] = useState([
    "Introduction to Programming",
    "Introduction to Frontend Development",
    "Introduction to Basics Understanding of UI / UX Design",
    "Introduction to SQL Programming",
    "Introduction to Programming",
  ]);

  const handleRemove = (index) => {
    setResults(results.filter((_, i) => i !== index));
  };
  return (
    <div className="relative flex flex-col justify-center items-center mt-20 md:mt-24">
      <h1 className="text-2xl md:text-5xl font-extrabold mb-3">
        <span className="text-custom-blue">Search </span>
        <span className="text-[#2C2C2C]">for your</span> desired{" "}
        <span className="text-custom-pink">courses</span>
      </h1>

      <div className="relative md:mt-4 md:w-2xl flex items-start flex-col mb-8">
        {/* Search Input & Button */}
        <div className="flex w-full shadow-md rounded-md overflow-hidden">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white w-full p-4 outline-none placeholder-gray-400"
            placeholder="What are you looking for?"
          />
          <button className="bg-pink-500 text-white p-4 cursor-pointer">
            <FaSearch className="h-6 w-6" />
          </button>
        </div>

        {/* Dropdown Results */}
        {results.length > 0 && (
          <div className="absolute top-full mt-1 w-full bg-white shadow-lg rounded-md z-10">
            {results.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center p-3">
                  <a href="/courses/view-course">
                    <span className="font-semibold text-sm md:text-base">
                      {item}
                    </span>
                  </a>
                  <IoClose
                    className="cursor-pointer text-black font-bold"
                    onClick={() => handleRemove(index)}
                  />
                </div>
                {index !== results.length - 1 && (
                  <hr className="border-[#BFBEBE]" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <img src={HeroImg} />
    </div>
  );
}
