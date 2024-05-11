import { useState } from "react";
import CustomPledgeInput from "./CustomPledgeInput";
interface PledgeInputProps {
  id: number;
  title: string;
  amount: number;
  detail: string;
  lefts: number;
}

const PledgeInput = ({
  id,
  title,
  amount,
  detail,
  lefts,
}: PledgeInputProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div
      className={`rounded-lg ${!lefts && "opacity-30"} ${isChecked ? "border-2 border-ModerateCyan" : "border border-DarkGray/50"}`}
    >
      <div className="px-5 py-8 md:grid md:grid-cols-4 md:grid-rows-2 md:items-center md:gap-y-2 md:px-8">
        <div className="mb-5 inline-flex flex-row-reverse items-center gap-4 md:col-span-3 md:mb-0 md:justify-self-start">
          <label htmlFor={title} className="font-bold text-black ">
            {title}
            <span className="mt-1 block text-ModerateCyan md:ms-4 md:inline">
              Pledge ${amount} or more
            </span>
          </label>
          <input
            type="radio"
            name={title}
            id={title}
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            disabled={!lefts}
            className="h-6 w-6 cursor-pointer disabled:cursor-not-allowed"
          />
        </div>
        <p className="md:col-span-4 md:ml-10">{detail}</p>
        <p className="mt-6 inline-flex items-center gap-2 font-medium md:col-start-4 md:row-start-1 md:mt-0 md:justify-self-end">
          <strong className="text-lg font-bold text-black">{lefts}</strong> left
        </p>
      </div>
      {isChecked && <CustomPledgeInput id={id} amount={amount} />}
    </div>
  );
};

export default PledgeInput;
