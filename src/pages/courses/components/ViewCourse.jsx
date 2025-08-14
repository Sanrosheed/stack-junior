import Footer from "../../homePage/components/Footer";
import NavBar from "../../homePage/components/NavBar";
import CourseDetails from "./CourseDetails";

export default function ViewCourse() {
  return (
    <div>
      <NavBar backgroundColor="bg-white" text="text-black" coloredLogo={true} />
      <CourseDetails />
      <Footer />
    </div>
  );
}
