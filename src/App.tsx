import "./App.css";
import Navigation from "./components/Navigation";
import LandingPage from "./components/pages/LandingPage";
import AboutMe from "./components/pages/AboutMe";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Contact />} />
        <Route path="/contact" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
