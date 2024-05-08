import pledges from "../data/pledges";
import PledgeInput from "./PledgeInput";

const PledgesForm = () => {
  return (
    <form className="space-y-6">
      <div className="rounded-lg border border-DarkGray/50 px-5 py-8">
        <div>
          <div className="mb-5 inline-flex flex-row-reverse items-center gap-4">
            <label
              htmlFor="no-reward"
              className="text-base font-bold text-black"
            >
              Pledge with no reward
            </label>
            <input
              type="radio"
              name="no-reward"
              id="no-reward"
              className="h-6 w-6"
            />
          </div>
          <p>
            Choose to support us without a reward if you simply believe in our
            project. As a backer, you will be signed up to receive product
            updates via email.
          </p>
        </div>
      </div>
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
