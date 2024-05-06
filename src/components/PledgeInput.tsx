interface PledgeInputProps {
  title: string;
  amount: number;
  detail: string;
  lefts: number;
}

const PledgeInput = ({ title, amount, detail, lefts }: PledgeInputProps) => {
  return (
    <div>
      <div>
        <label htmlFor={title}>
          <span>{title}</span>
          <span>Pledge ${amount} or more</span>
        </label>
        <input type="radio" name={title} id={title} />
        <p>
          <strong>{lefts} left</strong>
        </p>
        <p>{detail}</p>
      </div>
      <hr />
      <div>
        <label htmlFor="custom-pledge">Enter your pledge</label>
        <input type="text" name="custom-pledge" id="custom-pledge" />
        <button>Continue</button>
      </div>
    </div>
  );
};
export default PledgeInput;
