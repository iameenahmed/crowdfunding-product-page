interface CustomPledgeInputProps {
  id: number;
}

const CustomPledgeInput = ({ id }: CustomPledgeInputProps) => {
  return (
    <div className="mt-6 grid grid-cols-2 place-content-center items-center gap-x-4 gap-y-2 border-t border-DarkGray/50 px-5 pt-8 text-center">
      <label htmlFor={`custom-pledge-${id}`} className="col-span-2 font-medium">
        Enter your pledge
      </label>
      <input
        type="text"
        name={`custom-pledge-${id}`}
        id={`custom-pledge-${id}`}
        placeholder="$"
        className="my-4 rounded-full border border-DarkGray/50 px-4 py-2.5"
      />
      <button className="cursor-pointer rounded-full bg-ModerateCyan py-3 font-medium text-white hover:bg-DarkCyan">
        Continue
      </button>
    </div>
  );
};

export default CustomPledgeInput;
