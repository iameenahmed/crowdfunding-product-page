import { useInputModal } from "../stores/modalsStore";

interface PledgeItemProps {
  title: string;
  amount: number;
  detail: string;
  lefts: number;
}

const PledgeItem = ({ title, amount, detail, lefts }: PledgeItemProps) => {
  const openInputModal = useInputModal((state) => state.openModal);

  return (
    <div
      className={`rounded-lg border border-DarkGray/50 px-6 py-8 md:grid md:grid-cols-2 md:items-center md:px-8 ${!lefts && "opacity-40"}`}
    >
      <h3 className="font-bold text-black md:text-lg">{title}</h3>
      <p className="mt-1 text-[0.9375rem] font-medium text-ModerateCyan md:col-start-2 md:justify-self-end">
        Pledge ${amount} or more
      </p>
      <p className="my-4 md:col-span-2 md:my-6 md:leading-[1.875]">{detail}</p>
      <p className="flex items-center gap-2.5">
        <strong className="text-3xl font-bold text-black">{lefts}</strong>
        left
      </p>
      <button
        onClick={() => openInputModal(title)}
        disabled={!lefts}
        className="mt-6 inline-block cursor-pointer rounded-full bg-ModerateCyan px-7 py-3 font-medium text-white transition-colors duration-300 hover:bg-DarkCyan disabled:cursor-not-allowed disabled:bg-black md:col-start-2 md:mt-0 md:justify-self-end"
      >
        {lefts ? "Select Reward" : "Out of stock"}
      </button>
    </div>
  );
};

export default PledgeItem;
