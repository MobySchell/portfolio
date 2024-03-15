import "./App.css";
import Navigation from "./components/Navigation";
import LandingPage from "./components/pages/LandingPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
