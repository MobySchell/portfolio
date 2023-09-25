import "./App.css";
import Navigation from "./components/Navigation";
import HeroSection from "./components/Pages/HeroSection";
import AboutSection from "./components/Pages/AboutSection";
import ContactSection from "./components/Pages/ContactSection";
import Projects from "./components/Pages/Projects";

export default function App() {
  const navbarItems = [
    { text: "Home", link: "/" },
    { text: "About", link: "/about" },
    { text: "Projects", link: "/projects" },
    { text: "Contact", link: "/contact" },
  ];

  return (
    <>
      <Navigation items={navbarItems} />
      <div className="bg-[url('../src/assets/whalebackground.jpg')] bg-center h-screen">
        <HeroSection />
      </div>
      <AboutSection />
      <Projects />
      <div className="bg-[url('../src/assets/topLeftOcean.jpg')] bg-no-repeat bg-cover h-screen">
        <ContactSection />
      </div>
    </>
  );
}
