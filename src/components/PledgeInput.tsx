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
      className={`rounded-lg py-8 ${!lefts && "opacity-30"} ${isChecked ? "border-2 border-ModerateCyan" : "border border-DarkGray/50"}`}
    >
      <div className="px-5">
        <div className="mb-5 inline-flex flex-row-reverse items-center gap-4">
          <label htmlFor={title} className="font-bold text-black">
            {title}
            <span className="mt-1 block text-ModerateCyan">
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
        <p>{detail}</p>
        <p className="mt-6 inline-flex items-center gap-2 font-medium">
          <strong className="text-lg font-bold text-black">{lefts}</strong> left
        </p>
      </div>
      {isChecked && <CustomPledgeInput id={id} />}
    </div>
  );
};

export default PledgeInput;
