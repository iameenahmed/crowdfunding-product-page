import bookmarkIcon from "../assets/icon-bookmark.svg";
import mastercraftLogo from "../assets/logo-mastercraft.svg";

const Intro = () => {
  return (
    <div>
      <div>
        <img src={mastercraftLogo} alt="mastercraft logo" />
      </div>
      <div>
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <p>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
      </div>
      <div>
        <button>Back this project</button>
        <button>
          <span>
            <img src={bookmarkIcon} alt="bookmark icon" />
          </span>
          Bookmark
        </button>
      </div>
    </div>
  );
};
export default Intro;
