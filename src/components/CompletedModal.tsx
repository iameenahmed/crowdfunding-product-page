import checkIcon from "../assets/icon-check.svg";

const CompletedModal = () => {
  return (
    <div>
      <div>
        <img src={checkIcon} alt="check icon" />
      </div>
      <div>
        <h4>Thanks for your support!</h4>
        <p>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <button>Got it!</button>
      </div>
    </div>
  );
};
export default CompletedModal;
