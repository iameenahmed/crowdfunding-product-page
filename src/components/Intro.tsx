import { useState } from "react";
import bookmarkIcon from "../assets/icon-bookmark.svg";
import mastercraftLogo from "../assets/logo-mastercraft.svg";
import { useInputModal } from "../stores/modalsStore";

const Intro = () => {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const openInputModal = useInputModal((state) => state.openModal);

  return (
    <div className="relative z-10 -mt-[12.5%] flex w-full flex-col items-center rounded-xl bg-white px-6 py-8 text-center shadow-md md:px-12 md:pb-12">
      <div className="absolute -top-7">
        <img src={mastercraftLogo} alt="mastercraft logo" />
      </div>
      <div className="my-6 md:mb-9">
        <h1 className="text-2xl font-semibold md:text-[1.75rem]">
          Mastercraft Bamboo Monitor Riser
        </h1>
        <p className="mt-3.5 leading-relaxed text-DarkGray">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
      </div>
      <div className="flex w-full justify-center gap-x-6 font-semibold md:justify-between">
        <button
          onClick={() => openInputModal(0)}
          className="rounded-full bg-ModerateCyan px-6 py-3 text-white transition-colors duration-300 hover:bg-DarkCyan md:px-10"
        >
          Back this project
        </button>
        <button
          onClick={() => setIsBookmarked(!isBookmarked)}
          className="text-DarkGray transition-all duration-300 hover:opacity-70 min-[500px]:inline-flex min-[500px]:items-center min-[500px]:gap-4 min-[500px]:rounded-full min-[500px]:bg-DarkGray/10 min-[500px]:pr-7"
        >
          <img src={bookmarkIcon} alt="bookmark icon" />
          <span className="hidden min-[500px]:inline">
            {isBookmarked ? "Bookmarked" : "Bookmark"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Intro;
