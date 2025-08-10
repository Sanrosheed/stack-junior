import Img1 from "../../../assets/images/courseImg1.png";
import Img2 from "../../../assets/images/courseImg2.png";
import Img3 from "../../../assets/images/courseImg3.png";
import Img4 from "../../../assets/images/courseImg4.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function CoursesList() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const courses = [
    {
      img: Img1,
      name: "Introduction to Programming",
      path: "",
    },
    {
      img: Img2,
      name: "Frontend Development",
      path: "",
    },
    {
      img: Img3,
      name: "UI / UX Design",
      path: "",
    },
    {
      img: Img4,
      name: "SQL Programming",
      path: "",
    },
  ];
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={cardVariants}
      viewport={{ once: false, amount: 0.2 }}
      className={`pt-8 pb-14  -mt-8 px-10 md:px-20 rounded-t-4xl bg-custom-yellow`}
    >
      <h1
        className={`text-xl text-[#2B2B2B] md:text-4xl font-bold py-4 md:mb-6 md:mt-8 flex justify-center`}
      >
        Check out our courses
      </h1>
      <div>
        <div className="flex flex-col md:grid grid-cols-2 md:gap-x-10 gap-y-8 md:gap-y-20">
          {courses?.map((course, index) => (
            <div key={index} className="flex flex-col items-center bg-white">
              <img src={course.img} alt="image" className="md:h-96" />
              <p className="pb-3 font-semibold text-lg">{course.name}</p>
              <div className="bg-custom-blue py-4 w-full flex justify-center font-semibold text-white">
                <a href={course.path}>Click to learn more</a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <button className="bg-black text-white rounded-full px-20 font-semibold py-3">
            View All Courses
          </button>
        </div>
      </div>
    </motion.div>
  );
}
