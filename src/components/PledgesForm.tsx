import pledges from "../data/pledges";
import PledgeInput from "./PledgeInput";
import PledgeWithNoReward from "./PledgeWithNoReward";

const PledgesForm = () => {
  return (
    <form className="space-y-6">
      <PledgeWithNoReward />
      {pledges.map(({ id, title, amount, detail, lefts }) => {
        return (
          <PledgeInput
            key={id}
            id={id}
            title={title}
            amount={amount}
            detail={detail}
            lefts={lefts}
          />
        );
      })}
    </form>
  );
};
export default PledgesForm;
