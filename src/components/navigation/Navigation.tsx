"use client";

import { useCallback, useEffect, useState } from "react";
import Button from "../common/Button";
import Logo from "../common/Logo";
import NavigationLink from "./NavigationLink";
import Container from "../common/Container";
import { motion } from "framer-motion";

const Navigation = () => {
  const [visibleBackground, setVisibleBackground] = useState(false);

  const changeBackground = useCallback(() => {
    if (window.scrollY >= 32) {
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
    <motion.nav
      layout
      className={`fixed left-0 top-0 z-10 hidden sm:block ${
        visibleBackground ? "bg-light shadow-md" : "mt-8"
      }`}
    >
      <Container className="flex h-16 flex-row items-center justify-between p-4">
        <Logo className={`${visibleBackground ? "h-8 w-8" : "h-16 w-16"}`} />
        <ul className="flex w-fit flex-row items-center gap-4 sm:gap-8">
          <NavigationLink href="#services">Services</NavigationLink>
          <NavigationLink href="#our-story">Our Story</NavigationLink>
          <NavigationLink href="#careers">Careers</NavigationLink>
          <NavigationLink href="#contact">Contact</NavigationLink>
        </ul>
      </Container>
    </motion.nav>
  );
};

export default Navigation;
