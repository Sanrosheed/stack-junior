import Features from "../homePage/components/Features";
import Footer from "../homePage/components/Footer";
import NavBar from "../homePage/components/NavBar";
import AboutHero from "./components/AboutHero";

export default function About() {
  return (
    <div className="bg-custom-lightblue">
      <NavBar
        backgroundColor="bg-custom-lightblue"
        text="text-black"
        coloredLogo={true}
      />
      <AboutHero />
      <Features bgColor="bg-custom-yellow" feature={true} />
      <Footer />
    </div>
  );
}
