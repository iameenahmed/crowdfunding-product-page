import { useInputModal } from "../stores/modalsStore";
import { usePledgeStore } from "../stores/pledgeStore";
import PledgeInput from "./PledgeInput";
import PledgeWithNoReward from "./PledgeWithNoReward";

const PledgesForm = () => {
  const pledges = usePledgeStore((state) => state.pledges);
  const selectedOption = useInputModal((state) => state.selectedOption);
  const onCheckChange = useInputModal((state) => state.updateSelectedOption);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <PledgeWithNoReward
        selectedOption={selectedOption}
        onCheckChange={onCheckChange}
      />
      {pledges.map(({ id, title, amount, detail, lefts }) => {
        return (
          <PledgeInput
            key={id}
            id={id}
            title={title}
            amount={amount}
            detail={detail}
            lefts={lefts}
            selectedOption={selectedOption}
            onCheckChange={onCheckChange}
          />
        );
      })}
    </form>
  );
};
export default PledgesForm;
