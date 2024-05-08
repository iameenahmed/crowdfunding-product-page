import logo from "../assets/logo.svg";
import hamburgerIcon from "../assets/icon-hamburger.svg";
import closeIcon from "../assets/icon-close-menu.svg";

import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <header className="relative z-20">
      <div className="absolute top-0 z-30 flex  w-full justify-between p-6">
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
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute inset-0 min-h-screen bg-gradient-to-b from-black/50 to-transparent  md:hidden">
            <ul className="absolute left-6 right-6 top-20 z-20 space-y-4 rounded-lg bg-white p-6  font-bold">
              <li className="cursor-pointer border-b border-DarkGray/30 pb-6 hover:opacity-70">
                About
              </li>
              <li className="cursor-pointer border-b border-DarkGray/30 pb-6 hover:opacity-70">
                Discover
              </li>
              <li className="cursor-pointer hover:opacity-70">Get Started</li>
            </ul>
          </div>
        )}

        {/* Desktop Navigation */}
        <div className="hidden">
          <ul>
            <li className="cursor-pointer hover:opacity-70">About</li>
            <li className="cursor-pointer hover:opacity-70">Discover</li>
            <li className="cursor-pointer hover:opacity-70">Get Started</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
