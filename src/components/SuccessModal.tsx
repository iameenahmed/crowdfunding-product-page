import checkIcon from "../assets/icon-check.svg";

interface SuccessModalProps {
  closeModal: () => void;
}

const SuccessModal = ({ closeModal }: SuccessModalProps) => {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/40">
      <div className="flex w-[20rem] flex-col items-center rounded-xl bg-white px-5 py-8 text-center  text-sm">
        <div>
          <img src={checkIcon} alt="check icon" />
        </div>
        <div className="mt-6 space-y-6">
          <h4 className="text-lg font-bold">Thanks for your support!</h4>
          <p className="leading-relaxed text-DarkGray">
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed.
          </p>
          <button
            onClick={closeModal}
            className="cursor-pointer rounded-full bg-ModerateCyan px-8 py-3 font-medium text-white hover:bg-DarkCyan"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
