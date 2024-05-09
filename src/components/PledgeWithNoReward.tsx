import { useState } from "react";

interface PledgeWithNoRewardProps {
  showSuccessModal: () => void;
}

const PledgeWithNoReward = ({ showSuccessModal }: PledgeWithNoRewardProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleClick = () => {
    showSuccessModal();
  };
  return (
    <div
      className={`rounded-lg  ${isChecked ? "border-2 border-ModerateCyan" : "border border-DarkGray/50"}`}
    >
      <div className="px-5 py-8 md:px-8">
        <div className="mb-5 inline-flex flex-row-reverse items-center gap-4">
          <label htmlFor="no-reward" className="text-base font-bold text-black">
            Pledge with no reward
          </label>
          <input
            type="radio"
            name="no-reward"
            id="no-reward"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="h-6 w-6"
          />
        </div>
        <p className="ml-10">
          Choose to support us without a reward if you simply believe in our
          project. As a backer, you will be signed up to receive product updates
          via email.
        </p>
      </div>
      {isChecked && (
        <div className="grid grid-cols-2 place-content-center items-center gap-x-4 gap-y-2 border-t border-DarkGray/50 p-5 text-center md:grid-cols-5 md:px-8">
          <label
            htmlFor="email"
            className="col-span-2 font-medium md:col-span-2 md:justify-self-start md:text-base"
          >
            Enter your email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="username@example.com"
            className="my-4 rounded-full border border-DarkGray/50 px-4 py-2.5 md:col-span-2"
          />
          <button
            onClick={handleClick}
            className="cursor-pointer rounded-full bg-ModerateCyan py-3 font-medium text-white hover:bg-DarkCyan"
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
};

export default PledgeWithNoReward;
