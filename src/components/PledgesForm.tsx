import pledges from "../data/pledges";
import PledgeInput from "./PledgeInput";
import PledgeWithNoReward from "./PledgeWithNoReward";

interface PledgesFormProps {
  showSuccessModal: () => void;
}

const PledgesForm = ({ showSuccessModal }: PledgesFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <PledgeWithNoReward showSuccessModal={showSuccessModal} />
      {pledges.map(({ id, title, amount, detail, lefts }) => {
        return (
          <PledgeInput
            key={id}
            id={id}
            title={title}
            amount={amount}
            detail={detail}
            lefts={lefts}
            showSuccessModal={showSuccessModal}
          />
        );
      })}
    </form>
  );
};
export default PledgesForm;
