import {
  FaClock,
  FaGraduationCap,
  FaBook,
  FaProjectDiagram,
  FaVideo,
} from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { IoMdTime } from "react-icons/io";
import { MdOutlineDescription } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import courseImg from "../../../assets/images/courseImg1.png";

export default function CourseDetails() {
  const videos = [
    { title: "Introduction to Programming", time: "02 : 10" },
    { title: "Understanding Syntax", time: "02 : 50" },
    { title: "Introduction to Programming", time: "02 : 10" },
    { title: "Introduction to Programming", time: "02 : 10" },
    { title: "Introduction to Programming", time: "02 : 10" },
    { title: "Introduction to Programming", time: "02 : 10" },
    { title: "Introduction to Programming", time: "02 : 10" },
  ];

  return (
    <div className="bg-custom-yellow p-6 lg:p-0 lg:pt-24">
      <div className="relative max-w-6xl lg:max-w-full mx-auto lg:mx-0 gap-6 lg:gap-0">
        {/* Left Card */}
        <div className="lg:absolute lg:left-44 lg:top-0 mb-4 lg:mb-0 bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={courseImg}
            alt="Course Illustration"
            className="w-full lg:max-w-sm object-cover"
          />
          <div className="p-6">
            <h2 className="font-bold text-[#2B2B2B] text-lg lg:text-2xl mb-4 border-b border-[#BFBEBE] pb-4">
              Course Details
            </h2>
            <div className="space-y-3 text-[#2B2B2B] font-bold text-lg">
              <div className="flex items-center gap-3 border-b border-[#BFBEBE] pb-2">
                <FaBook className="text-black" />
                <span>6 course materials</span>
              </div>
              <div className="flex items-center gap-3 border-b border-[#BFBEBE] pb-2">
                <FaProjectDiagram className="text-black" />
                <span>2 Projects</span>
              </div>
              <div className="flex items-center gap-3 border-b border-[#BFBEBE] pb-2">
                <FaVideo className="text-black" />
                <span>10 Videos</span>
              </div>
            </div>
            <button className="mt-6 w-full text-xl bg-custom-pink text-white py-3 rounded-md font-bold shadow hover:bg-pink-600">
              ENROLL NOW
            </button>
          </div>
        </div>
        <div className=""></div>

        {/* Right Section */}
        <div className="bg-white md:bg-transparent p-6 md:p-0 w-full">
          <div className="lg:flex items-center gap-4">
            <div className="w-3/7"></div>
            <div>
              <h1 className="text-2xl md:text-4xl font-bold text-[#2B2B2B]">
                Introduction to Programming
              </h1>
              <div className="flex items-center gap-4 text-sm text-black mt-2 font-bold">
                <div className="flex items-center gap-1">
                  <FaClock />
                  <span className="text-[#2B2B2B]">Duration : 3 months</span>
                </div>
                <span>|</span>
                <div className="flex items-center gap-1">
                  <FaGraduationCap />
                  <span className="text-[#2B2B2B]">Status : Beginner</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="lg:flex items-center gap-4 mt-6 bg-black text-white px-4 py-2 font-bold">
            <div className="w-3/7"></div>
            <h3 className="lg:text-xl">Description</h3>
          </div>

          <div className="lg:flex items-center gap-4 bg-custom-lightblue lg:py-4 lg:pb-18">
            <div className="lg:w-3/4"></div>
            <div className="p-4 lg:p-0 lg:px-4 lg:pr-10">
              <p className="text-gray-700 leading-relaxed">
                Understanding core programming concepts is necessary for
                starting a career in software development, data science, and
                many more. This is your first step to becoming a world-class
                tech pro.
              </p>

              {/* Videos */}
              <div className="mt-6">
                <h3 className="flex items-center gap-2 font-bold text-lg lg:text-2xl">
                  <IoVideocam className="text-black lg:w-12 lg:h-10" /> Videos
                </h3>
                <div className="mt-4 flex flex-col gap-4 space-y-2">
                  {videos.map((video, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between border-b border-[#BFBEBE] pb-2 text-[#2B2B2B] lg:text-lg"
                    >
                      <span>{video.title}</span>
                      <span>{video.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
