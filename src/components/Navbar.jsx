import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

const NavbarLink = ({ href, children }) => (
  <a href={href} className="navbar__link">
    {children}
  </a>
);

function getOffsetTop(elem) {
  const rect = elem.getBoundingClientRect();
  return rect.top;
}

function Navbar() {
  const minHeight = 12; // height when navbar is at the top
  const maxHeight = 20; // initial height
  const [navHeight, setNavHeight] = useState(maxHeight); // start with max height
  const navRef = useRef(null); // Reference to navbar
  const threshold = 10; // start changing navbar size 50px before reaching the top

  useEffect(() => {
    const onScroll = () => {
      const { top } = navRef.current.getBoundingClientRect();
      // If the top of the navbar is less than or equal to threshold, set minHeight
      // Otherwise, set maxHeight
      setNavHeight(top <= threshold ? minHeight : maxHeight);
    };

    document.querySelector(".app").addEventListener("scroll", onScroll);
    return () => {
      document.querySelector(".app").removeEventListener("scroll", onScroll);
    };
  }, [minHeight, maxHeight, threshold]);

  return (
    <motion.div
      ref={navRef}
      className="navbar"
      initial={{ height: `${maxHeight}vh` }}
      animate={{ height: `${navHeight}vh` }} // animate height based on state
      transition={{ duration: 0.35, ease: "easeOut" }}
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
