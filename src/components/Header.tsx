import logo from "../assets/logo.svg";
import hamburgerIcon from "../assets/icon-hamburger.svg";
import closeIcon from "../assets/icon-close-menu.svg";

import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <header>
      <div>
        <div>
          <img src={logo} alt="crowdfund logo" />
        </div>
        <div>
          {isMenuOpen ? (
            <img
              src={closeIcon}
              alt="close icon"
              onClick={() => setIsMenuOpen(false)}
            />
          ) : (
            <img
              src={hamburgerIcon}
              alt="hamburger icon"
              onClick={() => setIsMenuOpen(true)}
            />
          )}
        </div>
      </div>
      <nav>
        <ul>
          <li>About</li>
          <li>Discover</li>
          <li>Get Started</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
