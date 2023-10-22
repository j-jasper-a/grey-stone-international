"use client";

import { useCallback, useEffect, useState } from "react";
import Logo from "../common/Logo";
import MobileMenuButton from "./MobileMenuButton";
import ScreenOverlay from "../common/ScreenOverlay";
import MobileNavigationLink from "./MobileNavigationLink";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleBackground, setVisibleBackground] = useState(false);

  const changeBackground = useCallback(() => {
    if (window.scrollY >= 16) {
      setVisibleBackground(true);
    } else {
      setVisibleBackground(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => window.removeEventListener("scroll", changeBackground);
  }, [changeBackground]);

  return (
    <nav className="fixed left-0 top-0 z-10 block sm:hidden">
      <div
        className={`relative z-20 flex flex-row justify-between p-4 ${
          visibleBackground || isOpen ? "bg-light shadow-md" : ""
        }`}
      >
        <Logo
          className={`${visibleBackground || isOpen ? "h-8 w-8" : "h-16 w-16"}`}
          onClick={() => setIsOpen(false)}
        />
        <MobileMenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </div>
      <ul
        className={`flex-col items-center gap-8 bg-light p-8 ${
          isOpen ? "flex" : "hidden -translate-y-[150%]"
        }`}
      >
        <MobileNavigationLink
          title="Services"
          href="#services"
          onClick={() => setIsOpen(false)}
        />
        <MobileNavigationLink
          title="Our Story"
          href="#our-story"
          onClick={() => setIsOpen(false)}
        />
        <MobileNavigationLink
          title="Careers"
          href="#careers"
          onClick={() => setIsOpen(false)}
        />
        <MobileNavigationLink
          title="Contact"
          href="#contact"
          onClick={() => setIsOpen(false)}
        />
      </ul>
      <ScreenOverlay isOpen={isOpen} onClick={() => setIsOpen(false)} />
    </nav>
  );
};

export default MobileNavigation;
