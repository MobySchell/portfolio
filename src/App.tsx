import "./App.css";
import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import LandingPage from "./components/pages/LandingPage";
import AboutMe from "./components/pages/AboutMe";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    if (!pageLoaded) {
      // Retrieve last visited page from local storage
      const lastVisitedPage = localStorage.getItem("lastVisitedPage");

      const savedLastVisitedPage = () => {
        if (lastVisitedPage) {
          window.location.href = lastVisitedPage; // Redirect to the last visited page
        }
      };

      savedLastVisitedPage();
    }
  }, [pageLoaded]);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    <>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
