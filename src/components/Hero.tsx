import hero from "../assets/image-hero-mobile.jpg";
import heroDesktop from "../assets/image-hero-desktop.jpg";

const Hero = () => {
  return (
    <div className="relative left-0 top-0 after:absolute after:inset-0 after:bg-gradient-to-b after:from-black/30 after:to-transparent">
      <picture>
        <source srcSet={heroDesktop} media="(min-width: 768px)" />
        <img
          src={hero}
          alt="iMac desktop computer and a magic keyboard on a desk"
        />
      </picture>
    </div>
  );
};

export default Hero;
