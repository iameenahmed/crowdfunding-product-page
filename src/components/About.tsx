import PledgeItem from "./PledgeItem";
import { useInputModal } from "../stores/modalsStore";
import { usePledgeStore } from "../stores/pledgeStore";

const About = () => {
  const pledges = usePledgeStore((state) => state.pledges);
  const showInputModal = useInputModal((state) => state.openModal);

  return (
    <div className="rounded-lg bg-white px-6 py-7 text-sm text-DarkGray shadow-md md:px-12 md:text-base">
      <div>
        <h2 className="text-xl font-bold text-black">About this project</h2>
        <p className="mt-4 leading-[1.875] md:mt-8">
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
          <span className="mt-6 block md:mt-7">
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </span>
        </p>
      </div>
      <div className="mt-6 space-y-6 md:mt-10">
        {pledges.map(({ id, title, amount, detail, lefts }) => {
          return (
            <PledgeItem
              key={id}
              title={title}
              amount={amount}
              detail={detail}
              lefts={lefts}
              showInputModal={showInputModal}
            />
          );
        })}
      </div>
    </div>
  );
};

export default About;
