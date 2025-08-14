import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/homePage/Home";
import About from "./pages/about/About";
import Courses from "./pages/courses/Courses";
import ViewCourse from "./pages/courses/components/ViewCourse";
import Contact from "./pages/contact-us/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/view-course" element={<ViewCourse />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
