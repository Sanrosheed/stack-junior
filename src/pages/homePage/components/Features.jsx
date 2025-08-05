import Img1 from "../../../assets/images/tutorial 2.png";
import Img2 from "../../../assets/images/tutorial 3.png";
import Img3 from "../../../assets/images/tutorial 4.png";
import Img4 from "../../../assets/images/tutorial 5.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Features() {
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
      className="py-8 px-10 md:px-20 mt-6"
    >
      <h1 className="text-xl md:text-4xl font-bold py-4 md:mb-16">
        Features Include
      </h1>
      <div>
        <div className="flex flex-col md:grid grid-cols-2 md:gap-x-10 gap-y-8 md:gap-y-20">
          <div className=" flex flex-col items-center">
            <img src={Img1} alt="image" />
            <h1 className="md:text-2xl font-bold mt-4 mb-2 md:mb-4">
              Code Reviews
            </h1>
            <p className="md:text-xl text-[#2B2B2B] md:leading-9 text-center">
              We don’t just give you assignments, we review your solutions and
              give you insightful feedbacks on your code to enhance and
              reinforce your understanding.
            </p>
          </div>
          <div className=" flex flex-col items-center">
            <img src={Img2} alt="image" />
            <h1 className="md:text-2xl font-bold mt-4 mb-2 md:mb-4">
              Mentorship
            </h1>
            <p className="md:text-xl text-[#2B2B2B] md:leading-9 text-center">
              Even without being in a physical class, we make it possible for
              our students to ask questions and get guidance through our
              seasoned and qualified mentors.
            </p>
          </div>
          <div className=" flex flex-col items-center">
            <img src={Img3} alt="image" />
            <h1 className="md:text-2xl font-bold mt-4 mb-2 md:mb-4">
              Live Code Editor
            </h1>
            <p className="md:text-xl text-[#2B2B2B] md:leading-9 text-center">
              Whether at home or on the go, you can still follow your classes
              and practice with our easy-to-use code editor. It works on both
              the web and mobile app.
            </p>
          </div>
          <div className=" flex flex-col items-center">
            <img src={Img4} alt="image" />
            <h1 className="md:text-2xl font-bold mt-4 mb-2 md:mb-4">
              Community Forums
            </h1>
            <p className="md:text-xl text-[#2B2B2B] md:leading-9 text-center">
              Just because you are learning online doesn’t mean you have to be
              all alone. With our discussion forum, you can share your opinions
              with other students and even make friends.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
