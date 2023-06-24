import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

const NavbarLink = ({ href, children }) => (
  <a href={href} className="navbar__link">
    {children}
  </a>
);

function Navbar() {
  const minHeight = 10;
  const maxHeight = 18;
  const [navHeight, setNavHeight] = useState(maxHeight); // start with 15vh

  const checkScroll = () => {
    const triggerHeight = window.innerHeight - window.innerHeight * 0.3; // Start reducing height in the last 10% of the viewport height
    const scrollPosition = window.scrollY;

    if (scrollPosition >= triggerHeight) {
      // Calculate the height based on the scroll position in the last 10vh.
      const height =
        minHeight +
        ((maxHeight - minHeight) * (window.innerHeight - scrollPosition)) /
          (window.innerHeight - triggerHeight);
      setNavHeight(Math.max(height, minHeight)); // Ensure height does not go below 8vh
    } else {
      setNavHeight(maxHeight); // restore to original height when not in the last 10%
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <motion.div
      className="navbar"
      initial={{ height: `${maxHeight}dvh` }}
      animate={{ height: `${navHeight}dvh` }} // animate height based on state
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
