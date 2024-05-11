import EmailInput from "./EmailInput";
import { useState } from "react";

const PledgeWithNoReward = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

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
      {isChecked && <EmailInput />}
    </div>
  );
};

export default PledgeWithNoReward;
