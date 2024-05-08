interface PledgeItemProps {
  title: string;
  amount: number;
  detail: string;
  lefts: number;
}

const PledgeItem = ({ title, amount, detail, lefts }: PledgeItemProps) => {
  return (
    <div
      className={`rounded-lg border border-DarkGray/50 px-6 py-8 ${!lefts && "opacity-40"}`}
    >
      <h3 className="font-bold text-black">{title}</h3>
      <p className="mt-1 font-medium text-ModerateCyan">
        Pledge ${amount} or more
      </p>
      <p className="my-4">{detail}</p>
      <p className="flex items-center gap-2">
        <strong className="text-3xl font-bold text-black">{lefts}</strong>
        left
      </p>
      <button
        disabled={!lefts}
        className="mt-6 cursor-pointer rounded-full bg-ModerateCyan px-8 py-3.5 font-medium text-white disabled:cursor-not-allowed disabled:bg-black"
      >
        {lefts ? "Select Reward" : "Out of stock"}
      </button>
    </div>
  );
};

export default PledgeItem;
