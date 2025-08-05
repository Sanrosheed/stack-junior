import { useEffect, useState } from "react";
import ReviewImg from "../../../assets/images/review 1.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const testimonials = [
  {
    content:
      "I took the python course using the mobile app and I found the videos encouraging and helpful.",
    author: "John Doe",
  },
  {
    content:
      "The lessons were clear and the examples were easy to follow. I really enjoyed it!",
    author: "Jane Smith",
  },
  {
    content:
      "Very detailed and user-friendly app. I learned more than I expected!",
    author: "Michael Brown",
  },
];

export default function TestimonialSlider() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={cardVariants}
      viewport={{ once: false, amount: 0.2 }}
      className="bg-custom-pink pt-16 text-white"
    >
      <h2 className="text-3xl md:text-4xl flex justify-center font-semibold text-center md:text-left">
        What People Are Saying
      </h2>
      <div className="container px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left: Image */}
        <div className="">
          <img
            src={ReviewImg}
            alt="People Holding Stars"
            className="w-80 md:w-xl"
          />
        </div>

        {/* Right: Testimonial */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex flex-col gap-10">
          <div className="transition duration-700 ease-in-out">
            <p className="text-2xl italic md:mb-4">
              {testimonials[currentIndex].content}
            </p>
            <p className="text-2xl font-semibold">
              - {testimonials[currentIndex].author}
            </p>
          </div>

          {/* Dots */}
          <div className="flex gap-3 md:mt-4 mb-10 md:mb-0 ml-20">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`w-10 md:w-16 h-2 rounded-full transition-colors ${
                  idx === currentIndex ? "bg-black" : "bg-white"
                }`}
                onClick={() => setCurrentIndex(idx)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
