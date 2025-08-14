import Footer from "../homePage/components/Footer";
import NavBar from "../homePage/components/NavBar";
import ContactForm from "./components/ContactForm";
import ContactHero from "./components/ContactHero";

export default function Contact() {
  return (
    <div>
      <NavBar backgroundColor="bg-white" text="text-black" coloredLogo={true} />
      <ContactHero />
      <ContactForm />
      <Footer />
    </div>
  );
}
