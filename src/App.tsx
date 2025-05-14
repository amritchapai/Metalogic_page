import "./App.css";
import DistributedTeamSection from "./components/DistributedTeamSection";
import Execution from "./components/Execution";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MissionSection from "./components/MissionSection";
import Navbar from "./components/Navbar";
import StepsSection from "./components/StepsSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Execution />
      <StepsSection />
      <MissionSection />
      <DistributedTeamSection />
      <Footer />
    </>
  );
}

export default App;
