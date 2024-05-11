import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Stats from "./components/Stats";
import PledgesModal from "./components/PledgesModal";
import SuccessModal from "./components/SuccessModal";
import { useInputModal, useSuccessModal } from "./stores/modalsStore";

const App = () => {
  const isInputModalOpen = useInputModal((state) => state.isOpen);
  const isSuccessModalOpen = useSuccessModal((state) => state.isOpen);

  return (
    <div className="relative mx-auto max-w-[1440px] font-Commissioner">
      <Header />
      <Hero />
      <main className="mx-6 mb-16 max-w-[45.75rem] md:mx-auto md:mb-[7.75rem]">
        <Intro />
        <Stats />
        <About />
        {isInputModalOpen && <PledgesModal />}
        {isSuccessModalOpen && <SuccessModal />}
      </main>
    </div>
  );
};

export default App;
