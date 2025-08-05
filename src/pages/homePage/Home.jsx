import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Stats from "./components/Stats";
import TestimonialSlider from "./components/TestimonialSlider";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Stats />
      <Section1 />
      <Section2 />
      <Features />
      <TestimonialSlider />
      <Footer />
    </div>
  );
}
