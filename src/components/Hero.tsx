import hero from "../assets/image-hero-mobile.jpg";
import heroDesktop from "../assets/image-hero-desktop.jpg";

const Hero = () => {
  return (
    <picture className="relative left-0 top-0">
      <source srcSet={heroDesktop} media="(min-width: 768px)" />
      <img
        src={hero}
        alt="iMac desktop computer and a magic keyboard on a desk"
      />
    </picture>
  );
};

export default Hero;
