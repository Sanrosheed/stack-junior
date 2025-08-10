import Footer from "../homePage/components/Footer";
import NavBar from "../homePage/components/NavBar";
import CoursesHero from "./components/CoursesHero";
import CoursesList from "./components/CoursesList";

export default function Courses() {
  return (
    <div className="bg-custom-lightpink">
      <NavBar
        backgroundColor="bg-custom-lightpink"
        text="text-black"
        coloredLogo={true}
      />
      <CoursesHero />
      <CoursesList />
      <Footer />
    </div>
  );
}
