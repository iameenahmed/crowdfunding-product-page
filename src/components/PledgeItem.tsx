interface PledgeItemProps {
  title: string;
  amount: number;
  detail: string;
  lefts: number;
}

const PledgeItem = ({ title, amount, detail, lefts }: PledgeItemProps) => {
  return (
    <div>
      <div>
        <h3>{title}</h3>
        <p>Pledge {amount} or more</p>
      </div>
      <p>{detail}</p>
      <div>
        <p>
          <strong>{lefts}</strong> left
        </p>
        <button>{lefts ? "Select Reward" : "Out of stock"}</button>
      </div>
    </div>
  );
};
export default PledgeItem;
