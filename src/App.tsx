import "./App.css";
import Navigation from "./components/Navigation";
import LandingPage from "./components/pages/LandingPage";

function App() {
  return (
    <>
      <Navigation />
      <div className="w-[100%] h-screen bg-primary">
        <LandingPage />
      </div>
    </>
  );
}

export default App;
