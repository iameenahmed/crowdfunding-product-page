import { useState } from "react";

import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Stats from "./components/Stats";
import PledgesModal from "./components/PledgesModal";
import SuccessModal from "./components/SuccessModal";

const App = () => {
  const [isInputModalOpen, setIsInputModalOpen] = useState<boolean>(true);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);

  return (
    <div className="font-Commissioner">
      <Header />
      <Hero />
      <main className="px-6 pb-16">
        <Intro />
        <Stats />
        <About />
        {isInputModalOpen && (
          <PledgesModal closeModal={() => setIsInputModalOpen(false)} />
        )}
        {isSuccessModalOpen && (
          <SuccessModal closeModal={() => setIsSuccessModalOpen(false)} />
        )}
      </main>
    </div>
  );
};

export default App;
