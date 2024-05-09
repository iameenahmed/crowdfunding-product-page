import closeIcon from "../assets/icon-close-modal.svg";
import PledgesForm from "./PledgesForm";

interface PledgesModalProps {
  closeModal: () => void;
}

const PledgesModal = ({ closeModal }: PledgesModalProps) => {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center overflow-y-auto bg-black/40 text-sm text-DarkGray md:text-[0.9375rem] md:leading-relaxed">
      <div className="relative mx-6 max-h-[80vh] max-w-[45.75rem] overflow-scroll rounded-lg bg-white px-5 py-8 md:p-12">
        <button
          onClick={closeModal}
          aria-label="close modal"
          className="absolute right-5 top-10"
        >
          <img src={closeIcon} alt="close icon" />
        </button>
        <div>
          <h2 className="text-lg font-bold text-black">Back this project</h2>
          <p className="my-5 text-DarkGray">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
        </div>
        <PledgesForm />
      </div>
    </div>
  );
};

export default PledgesModal;
