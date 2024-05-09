import useModal from "./components/useModal";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Stats from "./components/Stats";
import PledgesModal from "./components/PledgesModal";
import SuccessModal from "./components/SuccessModal";

const App = () => {
  const inputModal = useModal();
  const successModal = useModal();

  const showSuccessModal = () => {
    inputModal.closeModal();
    successModal.openModal();
  };

  return (
    <div className="relative mx-auto max-w-[1440px] font-Commissioner">
      <Header />
      <Hero />
      <main className="mx-6 mb-16 max-w-[45.75rem] md:mx-auto md:mb-[7.75rem]">
        <Intro showInputModal={inputModal.openModal} />
        <Stats />
        <About showInputModal={inputModal.openModal} />
        {inputModal.isOpen && (
          <PledgesModal
            closeModal={inputModal.closeModal}
            showSuccessModal={showSuccessModal}
          />
        )}
        {successModal.isOpen && (
          <SuccessModal closeModal={successModal.closeModal} />
        )}
      </main>
    </div>
  );
};

export default App;
