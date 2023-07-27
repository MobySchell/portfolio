import "./App.css";
import Navigation from "./components/Navigation";
import HeroSection from "./components/Pages/HeroSection/HeroSection";

export default function App() {
  return (
    <>
      <Navigation />
      <div className="bg-[url('../src/assets/whalebackground.jpg')] bg-cover h-screen">
        <HeroSection />
      </div>
    </>
  );
}
