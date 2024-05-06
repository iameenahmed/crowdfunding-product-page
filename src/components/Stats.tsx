const Stats = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <span>$89,914</span>of $100,000 backed
          </li>
          <li>
            <span>5,007</span>total backers
          </li>
          <li>
            <span>56</span>days left
          </li>
        </ul>
      </div>
      <div>
        <progress value="89914" max="100000"></progress>
      </div>
    </div>
  );
};
export default Stats;
