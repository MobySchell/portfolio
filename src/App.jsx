import "./App.css";
import Navigation from "./components/Navigation";
import HeroSection from "./components/Pages/HeroSection/HeroSection";
import AboutSection from "./components/Pages/AboutSection/AboutSection";

export default function App() {
  const navbarItems = [
    { text: "Home", link: "/" },
    { text: "About", link: "/about" },
    { text: "Services", link: "/services" },
    { text: "Contact", link: "/contact" },
  ];

  return (
    <>
      <Navigation items={navbarItems} />
      <div className="bg-[url('../src/assets/whalebackground.jpg')] bg-fixed bg-center bg-repeat-x h-screen">
        <HeroSection />
        <AboutSection />
      </div>
    </>
  );
}
