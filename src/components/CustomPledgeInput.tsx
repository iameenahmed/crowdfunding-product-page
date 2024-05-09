import { useState } from "react";
interface CustomPledgeInputProps {
  id: number;
  amount: number;
  showSuccessModal: () => void;
}

const CustomPledgeInput = ({
  id,
  amount,
  showSuccessModal,
}: CustomPledgeInputProps) => {
  const [value, setValue] = useState<string>(amount.toString());
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    const inputRegex = /^(0*[1-9]\d*(\.\d+)?)$/;
    if (!inputRegex.test(event.target.value)) setIsValid(true);
    else setIsValid(false);
  };

  const handleClick = () => {
    if (isValid) return;
    showSuccessModal();
  };

  return (
    <div className="grid grid-cols-2 place-content-center items-center gap-x-4 gap-y-2 border-t border-DarkGray/50 p-5 text-center md:grid-cols-5 md:px-8">
      <label
        htmlFor={`custom-pledge-${id}`}
        className="col-span-2 font-medium md:col-span-3 md:justify-self-start md:text-base"
      >
        Enter your pledge
      </label>
      <input
        type="text"
        name={`custom-pledge-${id}`}
        id={`custom-pledge-${id}`}
        placeholder="$"
        value={value}
        onChange={handleInputChange}
        className={`my-4 rounded-full border px-4 py-2.5 text-center text-DarkGray placeholder:text-start focus:outline-none focus:ring-1 ${isValid ? "border-red-500 text-pink-600 focus:border-red-500 focus:ring-red-500" : "border-DarkGray/50 focus:border-ModerateCyan focus:ring-ModerateCyan"}`}
      />
      <button
        onClick={handleClick}
        className="cursor-pointer rounded-full bg-ModerateCyan py-3 font-medium text-white hover:bg-DarkCyan"
      >
        Continue
      </button>
    </div>
  );
};

export default CustomPledgeInput;
