import "./App.css";
import Navigation from "./components/Navigation";
import LandingPage from "./components/pages/LandingPage";
import AboutMe from "./components/pages/AboutMe";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import { Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />

        {/* Default redirect */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
