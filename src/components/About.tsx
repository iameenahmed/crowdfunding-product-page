import pledges from "../data/pledges";
import PledgeItem from "./PledgeItem";

const About = () => {
  return (
    <div>
      <div>
        <h2>About this project</h2>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
          <span>
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </span>
        </p>
      </div>
      <div>
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
      </div>
    </div>
  );
};
export default About;
