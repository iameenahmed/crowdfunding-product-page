import bookmarkIcon from "../assets/icon-bookmark.svg";
import mastercraftLogo from "../assets/logo-mastercraft.svg";

const Intro = () => {
  return (
    <div className="relative z-10 -mt-[15%]  flex w-full flex-col items-center rounded-xl bg-white px-6 py-8 text-center shadow-md">
      <div className="absolute -top-7">
        <img src={mastercraftLogo} alt="mastercraft logo" />
      </div>
      <div className="my-6">
        <h1 className="text-2xl font-semibold">
          Mastercraft Bamboo Monitor Riser
        </h1>
        <p className="mt-2 leading-relaxed text-DarkGray">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
      </div>
      <div className="flex gap-4">
        <button className="rounded-full bg-ModerateCyan px-6 py-3 font-semibold tracking-wide text-white">
          Back this project
        </button>
        <button>
          <img src={bookmarkIcon} alt="bookmark icon" />
          <span className="hidden md:inline">Bookmark</span>
        </button>
      </div>
    </div>
  );
};

export default Intro;
