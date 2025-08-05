import Img1 from "../../../assets/images/img1.png";
import Img2 from "../../../assets/images/img2.png";
import Img3 from "../../../assets/images/img3.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Section1() {
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
      className="py-8 px-10 md:px-20"
    >
      <h1 className="text-xl md:text-4xl font-bold flex justify-center items-center py-4 md:mb-16">
        Why Choose Us?
      </h1>
      <div className="flex flex-col md:grid grid-cols-2 md:gap-x-10 gap-y-8 md:gap-y-20">
        <img src={Img1} alt="image" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          viewport={{ once: false, amount: 0.2 }}
          className="md:mr-14"
        >
          <h1 className="md:text-3xl font-bold mt-4 mb-2 md:mb-4">
            Detailed Syllabus with Localized Content
          </h1>
          <p className="md:text-xl text-[#2B2B2B] md:leading-9">
            We’ve got a comprehensive syllabus that leaves nothing untouched and
            with our localized contents and examples, you are sure to grasp
            programming concepts easier and faster even without prior experience
            (i.e. as a beginner).
          </p>
        </motion.div>
        <img src={Img2} alt="image" className="md:hidden" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          viewport={{ once: false, amount: 0.2 }}
          className="md:mr-14"
        >
          <h1 className="md:text-3xl font-bold mt-4 mb-2 md:mb-4">
            An Interactive Personalized Learning Experience
          </h1>
          <p className="md:text-xl text-[#2B2B2B] md:leading-9">
            With StackJunior’s flexible learning options and 1-on-1 code review
            with seasoned tutors, your learning is suited just for you.
          </p>
        </motion.div>
        <img src={Img2} alt="image" className="hidden md:block" />
        <img src={Img3} alt="image" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          viewport={{ once: false, amount: 0.2 }}
          className="md:mr-14"
        >
          <h1 className="md:text-3xl font-bold mt-4 mb-2 md:mb-4">
            World-Class Learning with World-Class Jobs
          </h1>
          <p className="md:text-xl text-[#2B2B2B] md:leading-9">
            At StackJunior, we impact students with industry-standard skills and
            trainings. We also support them in getting jobs that are available
            from around the globe. How cool is that?
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
