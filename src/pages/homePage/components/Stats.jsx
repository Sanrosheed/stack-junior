import CountUp from "react-countup";

export default function Stats() {
  return (
    <div className="bg-custom-pink flex justify-around items-center pt-10 pb-4 mt-1">
      <div className="text-center">
        <h1 className="text-white text-xl md:text-5xl font-bold">
          <CountUp end={5000} duration={5} />+
        </h1>
        <h2 className="text-white md:text-lg">Courses</h2>
      </div>
      <div className="text-center">
        <h1 className="text-white text-xl md:text-5xl font-bold">
          <CountUp end={2000} duration={5} />+
        </h1>
        <h2 className="text-white md:text-lg">Tutors</h2>
      </div>
      <div className="text-center">
        <h1 className="text-white text-xl md:text-5xl font-bold">
          <CountUp end={1000} duration={5} />+
        </h1>
        <h2 className="text-white md:text-lg">Students</h2>
      </div>
    </div>
  );
}
