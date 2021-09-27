import "./styles/app.scss";
//COMPONENTS
import NavBar from "./components/navbar/NavBar";
import IntroSection from "./components/introsection/IntroSection";
import TeamMembers from "./components/TeamMembers/TeamMembers";
import Vision from "./components/Vision/Vision";
import Testimonials from "./components/Testimonials/Testimonials";

import { Marginer } from "./components/Marginer";
import Mission from "./components/Mission/Mission";
import ServicesSection from "./components/servicesOffered/ServicesSection";

import { AnimatePresence } from "framer-motion"; //DETECTS WHEN THE MOUNTED COMPONENT LEAVES THE SCREEN.

function App() {
  return (
    <div className="App">
      <NavBar />

      <AnimatePresence exitBeforeEnter>
        <IntroSection />
        <TeamMembers />
        <Marginer direction="vertical" margin="4em" />
        <Mission />
        <Marginer direction="vertical" margin="4em" />
        <Vision />
        <ServicesSection />
        <Marginer direction="vertical" margin="3em" />
        <Testimonials />
        <Marginer direction="vertical" margin="3em" />
      </AnimatePresence>
    </div>
  );
}

export default App;
