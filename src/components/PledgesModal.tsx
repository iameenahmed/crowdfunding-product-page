import closeIcon from "../assets/icon-close-modal.svg";
import pledges from "../data/pledges";
import PledgeItem from "./PledgeItem";

const PledgesModal = () => {
  return (
    <div>
      <div>
        <img src={closeIcon} alt="close icon" />
      </div>
      <div>
        <h2>Back this project</h2>
        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
      </div>
      <div>
        <form>
          <div>
            <div>
              <label htmlFor="no-reward">Pledge with no reward</label>
              <input type="radio" name="no-reward" id="no-reward" />
              <p>
                Choose to support us without a reward if you simply believe in
                our project. As a backer, you will be signed up to receive
                product updates via email.
              </p>
            </div>
          </div>

          {pledges.map(({ id, title, amount, detail, lefts }) => {
            return (
              <PledgeItem
                key={id}
                title={title}
                amount={amount}
                detail={detail}
                lefts={lefts}
              />
            );
          })}
        </form>
      </div>
    </div>
  );
};
export default PledgesModal;
