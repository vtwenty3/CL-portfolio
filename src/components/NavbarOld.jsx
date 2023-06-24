import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
const NavbarLink = ({ href, children }) => (
  <a href={href} className="navbar__link">
    {children}
  </a>
);

function Navbar() {
  const [isTop, setIsTop] = useState(false);

  const checkScroll = () => {
    // if we are at the top of the page, make navbar small
    // else, make navbar large
    if (window.scrollY + 200 > window.innerHeight) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const navSize = isTop ? 20 : 40;

  return (
    <motion.div
      className="navbar"
      initial={{ paddingTop: 40, paddingBottom: 40 }}
      animate={{ paddingTop: navSize, paddingBottom: navSize }}
      transition={{ duration: 0.35 }}
    >
      <h1 className="navbar__title">CHRIS LYONS</h1>
      <div className="navbar__links">
        <NavbarLink href="#tuition">Tuition</NavbarLink>
        <NavbarLink href="#media">Media</NavbarLink>
        <NavbarLink href="#events">Events</NavbarLink>
        <NavbarLink href="#contact">Contact</NavbarLink>
      </div>
    </motion.div>
  );
}

export default Navbar;
