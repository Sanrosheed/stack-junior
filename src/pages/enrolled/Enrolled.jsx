import Footer from "../homePage/components/Footer";
import NavBar from "../homePage/components/NavBar";
import ViewMaterial from "./components/ViewMaterial";

export default function Enrolled() {
  return (
    <div>
      <NavBar backgroundColor="bg-white" text="text-black" coloredLogo={true} />
      <ViewMaterial />
      <Footer />
    </div>
  );
}
