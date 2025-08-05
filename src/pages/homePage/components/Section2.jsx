import TutorialImg from "../../../assets/images/tutorial 1.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Section2() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={cardVariants}
      viewport={{ once: false, amount: 0.2 }}
      className="relative"
    >
      <div className="py-8 px-10 md:px-20 mt-6 bg-custom-green text-white flex flex-col items-center md:h-[550px]">
        <h1 className="text-xl md:text-4xl font-bold py-4">Quick Tutorials</h1>
        <p className="md:text-lg md:px-40 text-center md:leading-9">
          At StackJunior, acquire industry-relevant tech skills such as
          programming, software development, data science, cloud computing and
          more to become a world-class IT professional.
        </p>
      </div>
      <div className="md:-mt-80 z-10 relative flex justify-center items-center md:ml-56 bg-white rounded-4xl w-full max-w-4xl">
        <img src={TutorialImg} alt="image" className="w-full max-w-5xl" />
      </div>
    </motion.div>
  );
}
